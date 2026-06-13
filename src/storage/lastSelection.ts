// 工作区级别的「项目+目录」选择记忆
// 通过 VSCode 的 globalState 持久化到磁盘,跨会话保留
import * as vscode from 'vscode';
import * as log from '../utils/log';

/**
 * 单个工作区最近一次的项目/目录选择快照
 */
export interface LastSelection {
    /** 项目 ID */
    projectId: string;
    /** 项目名称（用于离线展示） */
    projectName: string;
    /** 目录 ID；根目录/不分类时为 null */
    directoryId: string | null;
    /** 目录名称（用于离线展示） */
    directoryName: string;
    /**
     * 保存时间，格式 yyyy-MM-dd HH:mm:ss
     * 由调用方生成,本模块不参与格式化
     */
    savedAt: string;
}

// 持有 extension 注入的 globalState
// 由扩展入口在 activate() 阶段调用 setGlobalState() 注入
let globalStateRef: vscode.Memento | undefined;

/**
 * 注入 VSCode 全局存储（由扩展入口在激活时调用一次）
 * @param state VSCode 扩展上下文的 globalState
 */
export function setGlobalState(state: vscode.Memento): void {
    globalStateRef = state;
}

/**
 * 读取指定工作区的上次选择
 * @param workspaceKey 工作区唯一键(通常是工作区文件夹的 fsPath)
 * @returns 命中的快照;不存在或读取失败时返回 undefined
 */
export function loadLastSelection(workspaceKey: string): LastSelection | undefined {
    if (!globalStateRef) {
        log.warn('globalState 尚未注入,无法读取上次选择');
        return undefined;
    }
    const key = buildKey(workspaceKey);
    try {
        const data = globalStateRef.get<LastSelection>(key);
        return data;
    } catch (err) {
        log.error(`读取上次选择失败, key=${key}`, err);
        return undefined;
    }
}

/**
 * 写入/覆盖指定工作区的上次选择
 * @param workspaceKey 工作区唯一键
 * @param selection 新的选择快照
 */
export function saveLastSelection(workspaceKey: string, selection: LastSelection): void {
    if (!globalStateRef) {
        log.warn('globalState 尚未注入,无法保存上次选择');
        return;
    }
    const key = buildKey(workspaceKey);
    try {
        // update 是异步的(写入 storage.json),此处不需要 await,
        // 失败会通过 Promise 拒绝被全局未处理 Promise 监听捕获,
        // 同时我们用 .then/.catch 显式落到日志通道
        globalStateRef.update(key, selection).then(
            () => {
                // 静默成功,无需日志刷屏
            },
            (err: unknown) => {
                log.error(`保存上次选择失败, key=${key}`, err);
            }
        );
    } catch (err) {
        log.error(`保存上次选择时同步抛出, key=${key}`, err);
    }
}

/**
 * 解析给定 Uri 所在的工作区文件夹,并返回其 fsPath 作为工作区键
 * 工作区未打开、Uri 不属于任何工作区时,返回占位符
 * @param uri VSCode 中的资源 Uri(可为 undefined)
 */
export function getWorkspaceKey(uri: vscode.Uri | undefined): string {
    if (!uri) {
        return NO_WORKSPACE_KEY;
    }
    const folder = vscode.workspace.getWorkspaceFolder(uri);
    if (!folder) {
        return NO_WORKSPACE_KEY;
    }
    return folder.uri.fsPath;
}

/**
 * 占位键:当扩展运行在无文件夹场景(单文件、空工作区)时使用
 */
const NO_WORKSPACE_KEY = '__no_workspace__';

/**
 * 构造 globalState 实际使用的存储键
 */
function buildKey(workspaceKey: string): string {
    return `apipost.lastSelection.${workspaceKey}`;
}
