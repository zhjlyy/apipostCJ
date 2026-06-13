// Apipost 接口上传 VSCode 扩展入口
// 负责：注册命令、读取配置、调用解析器/客户端/弹窗、反馈上传结果
// 该文件不承载具体业务逻辑，仅做编排

import * as vscode from 'vscode';
import * as path from 'path';

import * as log from './utils/log';
import { readConfig, hasValidCredential, openAccessTokenSettings } from './config/config';
import { ApipostClient } from './apipost/client';
import { createDirectory, fetchDirectoryTree } from './apipost/projects';
import { uploadEndpoints } from './apipost/endpoints';
import { resolveHost } from './apipost/hostResolver';
import { parseFile, parseMethod, parseDirectory } from './parser/javaParser';
import { ApiEndpoint, ApipostProject, ApipostDirectory, ApipostUploadResult } from './types';
import { pickProject } from './ui/projectPicker';
import { pickDirectory } from './ui/directoryPicker';
import {
    getWorkspaceKey,
    loadLastSelection,
    saveLastSelection,
    setGlobalState
} from './storage/lastSelection';

/** 当前是否正在执行上传（用于避免并发） */
let isUploading = false;

// ============================== 激活 / 注销 ==============================

/**
 * 扩展激活入口
 * - 注入 globalState
 * - 注册命令
 * - 订阅配置变更
 */
export function activate(context: vscode.ExtensionContext): void {
    log.info('Apipost Uploader 扩展已激活');
    // 1) 注入全局状态
    setGlobalState(context.globalState);

    // 2) 注册三种粒度的命令
    context.subscriptions.push(
        vscode.commands.registerCommand('apipost.uploadClass', uploadClassCommand),
        vscode.commands.registerCommand('apipost.uploadDirectory', uploadDirectoryCommand),
        vscode.commands.registerTextEditorCommand('apipost.uploadMethod', uploadMethodCommand),
        vscode.commands.registerCommand('apipost.openSettings', () =>
            vscode.commands.executeCommand('workbench.action.openSettings', 'apipost')
        )
    );

    // 3) 订阅配置变更（仅打日志，真正的读取在每次触发时按需进行）
    context.subscriptions.push(
        vscode.workspace.onDidChangeConfiguration((event) => {
            if (event.affectsConfiguration('apipost')) {
                log.info('Apipost 配置已变更，下次上传生效');
            }
        })
    );
}

/**
 * 扩展停用
 */
export function deactivate(): void {
    log.dispose();
}

// ============================== 命令实现 ==============================

/**
 * 命令：上传某个 Java 类（来自资源管理器右键菜单）
 * @param uri 目标 .java 文件 Uri（来自菜单；无值时退到当前活动编辑器）
 * @param uris 多个 Uri（来自多选菜单）
 */
async function uploadClassCommand(uri?: vscode.Uri, uris?: vscode.Uri[]): Promise<void> {
    const targets = collectTargetFiles(uri, uris, ['.java']);
    if (targets.length === 0) {
        void vscode.window.showWarningMessage('请在 .java 文件上右键触发本命令');
        return;
    }
    await runUploadFlow({
        // 类级：每个 .java 文件解析一次
        parse: async () => parseAllClasses(targets),
        label: '类',
        primaryUri: vscode.Uri.file(targets[0])
    });
}

/**
 * 命令：上传目录（来自资源管理器右键菜单）
 * @param uri 目标目录 Uri
 * @param uris 多个目录 Uri
 */
async function uploadDirectoryCommand(uri?: vscode.Uri, uris?: vscode.Uri[]): Promise<void> {
    const folders = collectTargetFolders(uri, uris);
    if (folders.length === 0) {
        void vscode.window.showWarningMessage('请在目录上右键触发本命令');
        return;
    }
    await runUploadFlow({
        // 目录级：递归收集 .java 文件
        parse: async () => parseAllDirectories(folders),
        label: '目录',
        primaryUri: folders[0]
    });
}

/**
 * 命令：上传当前方法（来自编辑器右键菜单 / 命令面板）
 * - 必须有活动编辑器且文件为 .java
 */
async function uploadMethodCommand(editor: vscode.TextEditor): Promise<void> {
    if (!editor || !editor.document) {
        void vscode.window.showWarningMessage('请在 Java 方法内触发本命令');
        return;
    }
    if (editor.document.languageId !== 'java' && !editor.document.fileName.endsWith('.java')) {
        void vscode.window.showWarningMessage('当前文件不是 Java 文件');
        return;
    }
    const filePath = editor.document.uri.fsPath;
    const lineNumber = editor.selection.active.line + 1; // 1-based
    log.info(`准备上传方法: file=${filePath}, line=${lineNumber}`);

    await runUploadFlow({
        parse: async () => {
            const ep = parseMethod(filePath, lineNumber);
            if (!ep) {
                return { files: [], endpoints: [] };
            }
            return { files: [filePath], endpoints: [ep] };
        },
        label: '方法',
        primaryUri: editor.document.uri
    });
}

// ============================== 上传主流程 ==============================

interface UploadFlowInput {
    /** 解析回调，返回受影响的文件与接口 */
    parse: () => Promise<{ files: string[]; endpoints: ApiEndpoint[] }>;
    /** 当前粒度（用于日志/通知） */
    label: string;
    /** 主 Uri（用于工作区键计算） */
    primaryUri: vscode.Uri;
}

/**
 * 上传主流程：解析 -> 选项目 -> 选目录 -> 解析 host -> 上传 -> 反馈
 */
async function runUploadFlow(input: UploadFlowInput): Promise<void> {
    if (isUploading) {
        void vscode.window.showWarningMessage('Apipost 正在执行另一次上传，请稍候...');
        return;
    }
    isUploading = true;
    try {
        // 1. 读取配置 + 校验凭据
        const cfg = readConfig();
        if (!hasValidCredential(cfg)) {
            const choice = await vscode.window.showErrorMessage(
                '尚未配置 Apipost accessToken，无法上传',
                '打开设置'
            );
            if (choice === '打开设置') {
                await openAccessTokenSettings();
            }
            return;
        }

        // 2. 解析代码
        log.info(`[${input.label}] 开始解析代码...`);
        const parsed = await input.parse();
        if (parsed.endpoints.length === 0) {
            void vscode.window.showInformationMessage('未在所选范围内找到任何接口');
            return;
        }
        log.info(`[${input.label}] 解析到 ${parsed.endpoints.length} 个接口, ${parsed.files.length} 个文件`);

        // 3. 计算工作区键 & 读取上次选择
        const workspaceKey = getWorkspaceKey(input.primaryUri);
        const last = loadLastSelection(workspaceKey);

        // 4. 选择项目
        const client = new ApipostClient(cfg);
        const project = await pickProject(client, last?.projectId);
        if (!project) {
            log.info('用户取消选择项目');
            return;
        }

        // 5. 选择目录（注意：null 应被透传，让 pickDirectory 激活「根目录」项）
        //    autoModuleAndClassDir 模式下跳过目录选择，直接使用项目根目录，后续由 resolveTargetDirectoryId 自动创建两级目录
        let directory: { id: string | null; name: string };
        if (cfg.uploadMode === 'autoModuleAndClassDir') {
            // autoModuleAndClassDir 模式：不需要用户选目录，直接在项目根目录下按 module + classDir 自动创建
            directory = { id: null, name: '根目录 / 不分类' };
            log.info('autoModuleAndClassDir 模式，跳过目录选择，将自动创建两级目录');
        } else {
            const picked = await pickDirectory(client, project.id, last?.directoryId);
            if (!picked) {
                log.info('用户取消选择目录');
                return;
            }
            directory = picked;
        }

        // 6. 解析 host
        const workspaceFolder = vscode.workspace.getWorkspaceFolder(input.primaryUri);
        const host = resolveHost(workspaceFolder?.uri.fsPath, cfg.host);

        // 7. 决定最终目录（autoClassDir / autoModuleAndClassDir 模式按类注释自动创建）
        const directoryId = await resolveTargetDirectoryId(
            client,
            project,
            directory.id,
            parsed.endpoints,
            cfg.uploadMode
        );
        if (directoryId === undefined) {
            // 用户在自动创建目录时被取消
            return;
        }

        // 8. 上传
        log.info(`开始上传到 project=${project.id}, directory=${directoryId ?? '<root>'}, host=${host || '<empty>'}`);
        const result = await uploadEndpoints(client, project.id, directoryId, parsed.endpoints, host);

        // 9. 记忆上次选择
        saveLastSelection(workspaceKey, {
            projectId: project.id,
            projectName: project.name,
            directoryId: directory.id,
            directoryName: directory.name,
            savedAt: formatNow()
        });

        // 10. 反馈
        showUploadResult(result, project);
    } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        log.error(`[${input.label}] 上传流程异常`, err);
        void vscode.window.showErrorMessage(`Apipost 上传失败: ${message}`);
    } finally {
        isUploading = false;
    }
}

// ============================== 解析与目录处理 ==============================

/**
 * 在 autoClassDir / autoModuleAndClassDir 模式下，按类注释自动创建目录
 * - manual 模式直接使用 directoryId
 * - autoClassDir：在所选目录（directoryId）下创建子目录（命名 = 类的 classDirName）
 * - autoModuleAndClassDir：先创建 module 父级目录，再创建 classDirName 子目录
 *
 * @returns 最终用于上传的目录 ID（manual 模式返回原 directoryId；其他模式返回新建目录 ID）；
 *          返回 undefined 表示用户取消。
 */
async function resolveTargetDirectoryId(
    client: ApipostClient,
    project: ApipostProject,
    baseDirectoryId: string | null,
    endpoints: ApiEndpoint[],
    mode: 'manual' | 'autoClassDir' | 'autoModuleAndClassDir'
): Promise<string | null | undefined> {
    if (mode === 'manual') {
        return baseDirectoryId;
    }

    // 自动模式：聚合每个 endpoint 期望的 moduleName + classDirName
    // 同一组 (moduleName, classDirName) 只创建一次
    const groups = new Map<string, { moduleName: string | undefined; classDirName: string }>();
    for (const ep of endpoints) {
        const classDir = ep.classDirName || ep.className;
        const key = `${ep.moduleName ?? ''}::${classDir}`;
        if (!groups.has(key)) {
            groups.set(key, { moduleName: ep.moduleName, classDirName: classDir });
        }
    }

    // 全部用第一个分组作为本次上传的目标目录（简化：不做多组合并）
    // 真实场景中会按 endpoint 单独上传到不同目录；本版本先以「首个目录」走通
    const first = groups.values().next().value;
    if (!first) {
        return baseDirectoryId;
    }
    const { moduleName, classDirName } = first;

    // 1) 在 baseDirectoryId 下创建 module 父级目录（如果需要）
    let parentId: string | null | undefined = baseDirectoryId;
    if (mode === 'autoModuleAndClassDir' && moduleName) {
        parentId = await ensureChildDirectory(client, project.id, baseDirectoryId, moduleName);
        if (parentId === undefined) {
            return undefined;
        }
    }
    // 2) 在 parentId 下创建 classDirName 子目录
    const finalId = await ensureChildDirectory(client, project.id, parentId ?? null, classDirName);
    return finalId === undefined ? undefined : finalId;
}

/**
 * 在指定父目录下创建子目录
 * - 若同名目录已存在（按 fetchDirectoryTree 校对），直接复用
 * - 创建失败时返回 undefined，由调用方中止
 */
async function ensureChildDirectory(
    client: ApipostClient,
    projectId: string,
    parentId: string | null,
    name: string
): Promise<string | undefined | null> {
    if (!name) {
        return parentId;
    }
    // 拉取最新目录树，尝试复用
    try {
        const tree = await fetchDirectoryTree(client, projectId);
        const existing = findChildByName(tree, parentId, name);
        if (existing) {
            return existing.id;
        }
    } catch (err) {
        log.warn('拉取目录树以复用失败,将直接尝试创建', err);
    }
    // 创建
    try {
        const { id } = await createDirectory(client, projectId, parentId, name);
        return id;
    } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        void vscode.window.showErrorMessage(`自动创建目录失败: ${name} -> ${msg}`);
        return undefined;
    }
}

/** 在指定父级下查找同名目录 */
function findChildByName(
    tree: ApipostDirectory[],
    parentId: string | null,
    name: string
): { id: string; name: string } | undefined {
    for (const node of tree) {
        if (node.parentId === parentId && node.name === name) {
            return { id: node.id, name: node.name };
        }
        if (node.children && node.children.length > 0) {
            const found = findChildByName(node.children, parentId, name);
            if (found) {
                return found;
            }
        }
    }
    return undefined;
}

// ============================== 结果反馈 ==============================

/**
 * 展示上传结果
 * - 成功 N + 失败 0：info 通知 + 「去调试」「去分享」按钮
 * - 部分失败：warning 通知 + 「查看日志」按钮
 * - 全部失败：error 通知 + 「查看日志」按钮
 */
function showUploadResult(result: ApipostUploadResult, project: ApipostProject): void {
    const { success, failed, errors, debugUrl, shareUrl } = result;
    log.info(`上传完成: 成功 ${success}, 失败 ${failed}`);

    if (failed === 0 && success > 0) {
        const actions: string[] = [];
        if (debugUrl) {
            actions.push('去调试');
        }
        if (shareUrl) {
            actions.push('去分享');
        }
        actions.push('查看日志');
        void vscode.window
            .showInformationMessage(
                `已成功上传 ${success} 个接口到「${project.name}」`,
                ...actions
            )
            .then((choice) => {
                if (choice === '去调试' && debugUrl) {
                    void vscode.env.openExternal(vscode.Uri.parse(debugUrl));
                } else if (choice === '去分享' && shareUrl) {
                    void vscode.env.openExternal(vscode.Uri.parse(shareUrl));
                } else if (choice === '查看日志') {
                    log.getChannel().show();
                }
            });
        return;
    }

    if (success > 0) {
        void vscode.window
            .showWarningMessage(
                `部分上传完成: 成功 ${success}, 失败 ${failed}`,
                '查看日志'
            )
            .then((choice) => {
                if (choice === '查看日志') {
                    log.getChannel().show();
                }
            });
        // 详细错误落到日志通道
        for (const e of errors) {
            log.warn(`上传失败: ${e}`);
        }
        return;
    }

    void vscode.window
        .showErrorMessage(
            `上传失败: 0 成功, ${failed} 失败`,
            '查看日志'
        )
        .then((choice) => {
            if (choice === '查看日志') {
                log.getChannel().show();
            }
        });
    for (const e of errors) {
        log.error(`上传失败: ${e}`);
    }
}

// ============================== 工具函数 ==============================

/**
 * 解析「类级」命令的目标文件
 * - 优先取右键菜单传入的 uri/uris
 * - 其次取活动编辑器对应的文件
 */
function collectTargetFiles(
    uri: vscode.Uri | undefined,
    uris: vscode.Uri[] | undefined,
    allowedExts: string[]
): string[] {
    const list: vscode.Uri[] = [];
    if (Array.isArray(uris) && uris.length > 0) {
        list.push(...uris);
    } else if (uri) {
        list.push(uri);
    } else {
        const active = vscode.window.activeTextEditor?.document;
        if (active) {
            list.push(active.uri);
        }
    }
    return list
        .filter((u) => allowedExts.some((ext) => u.fsPath.endsWith(ext)))
        .map((u) => u.fsPath);
}

/**
 * 解析「目录级」命令的目标文件夹
 */
function collectTargetFolders(uri: vscode.Uri | undefined, uris: vscode.Uri[] | undefined): vscode.Uri[] {
    if (Array.isArray(uris) && uris.length > 0) {
        return [...uris];
    }
    if (uri) {
        return [uri];
    }
    return [];
}

/**
 * 批量解析一组 .java 文件，合并出 endpoints 列表
 */
async function parseAllClasses(filePaths: string[]): Promise<{ files: string[]; endpoints: ApiEndpoint[] }> {
    const endpoints: ApiEndpoint[] = [];
    const files: string[] = [];
    for (const fp of filePaths) {
        const parsed = parseFile(fp);
        if (parsed.endpoints.length === 0) {
            log.info(`文件中未发现接口: ${path.basename(fp)}`);
            continue;
        }
        files.push(fp);
        endpoints.push(...parsed.endpoints);
    }
    return { files, endpoints };
}

/**
 * 批量解析一组目录，递归收集 .java 文件
 */
async function parseAllDirectories(folderUris: vscode.Uri[]): Promise<{ files: string[]; endpoints: ApiEndpoint[] }> {
    const files: string[] = [];
    for (const uri of folderUris) {
        const parsed = parseDirectory(uri.fsPath);
        for (const file of parsed) {
            if (file.endpoints.length > 0) {
                files.push(file.filePath);
            }
        }
    }
    const endpoints: ApiEndpoint[] = [];
    for (const fp of files) {
        const parsed = parseFile(fp);
        endpoints.push(...parsed.endpoints);
    }
    return { files, endpoints };
}

/**
 * 格式化为 yyyy-MM-dd HH:mm:ss
 */
function formatNow(): string {
    const d = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}
