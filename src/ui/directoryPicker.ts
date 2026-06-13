// 目录选择弹窗
// 将 Apipost 目录树扁平化为带缩进的列表,首项额外提供「根目录/不分类」选项
import * as vscode from 'vscode';
import { ApipostDirectory } from '../types';
import { ApipostClient } from '../apipost/client';
import { fetchDirectoryTree } from '../apipost/projects';
import * as log from '../utils/log';

/**
 * 弹窗返回给调用方的最小目录信息
 */
export interface PickedDirectory {
    /** 目录 ID;根目录时为 null */
    id: string | null;
    /** 目录名称 */
    name: string;
}

/**
 * 扁平化后的目录项(包含深度信息,用于决定缩进)
 */
interface FlatDirectory {
    /** 目录 ID;根目录占位项为 null */
    id: string | null;
    /** 目录名称 */
    name: string;
    /** 所在层级,根占位项与顶层目录均为 0 */
    level: number;
}

/**
 * QuickPick 列表项的扩展类型
 */
interface DirectoryPickItem extends vscode.QuickPickItem {
    /** 关联的扁平目录 */
    dir: FlatDirectory;
}

/**
 * 弹出目录选择框,展示给定项目下的所有目录,并支持默认激活上次选项
 * @param client 已构造好的 Apipost 客户端
 * @param projectId 已选中的项目 ID
 * @param defaultDirectoryId 可选,期望被默认激活的上次目录 ID
 * @returns 用户选中的目录信息;取消时返回 undefined
 * @throws 网络/解析失败时抛出原错误(并已向用户弹出友好提示)
 */
export async function pickDirectory(
    client: ApipostClient,
    projectId: string,
    defaultDirectoryId?: string | null
): Promise<PickedDirectory | undefined> {
    // 1) 拉取目录树
    let tree: ApipostDirectory[];
    try {
        tree = await fetchDirectoryTree(client, projectId);
    } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        log.error(`获取 Apipost 目录树失败, projectId=${projectId}`, err);
        void vscode.window.showErrorMessage(`获取目录列表失败: ${message}`);
        throw err;
    }

    // 2) 扁平化:首项为「根目录/不分类」占位
    const flat: FlatDirectory[] = [];
    flat.push({ id: null, name: '根目录 / 不分类', level: 0 });
    flattenTree(tree ?? [], 0, flat);

    // 3) 构造 QuickPick 项
    const items: DirectoryPickItem[] = flat.map((d) => {
        const indent = '  '.repeat(d.level);
        if (d.id === null) {
            // 根目录占位项:用 📁 图标提示
            return {
                label: `📁 ${d.name}`,
                description: '不分类',
                detail: '上传到此项目根目录,不归属任何子分类',
                dir: d,
            };
        }
        return {
            label: `${indent}${d.name}`,
            description: `ID: ${d.id}`,
            detail: indent ? `子目录(深度 ${d.level})` : '顶层目录',
            dir: d,
        };
    });

    // 4) 走 createQuickPick 以支持 defaultDirectoryId 默认激活
    return new Promise<PickedDirectory | undefined>((resolve) => {
        const quickPick = vscode.window.createQuickPick<DirectoryPickItem>();
        quickPick.placeholder = '请选择要上传到的 Apipost 目录(支持搜索)';
        quickPick.title = 'Apipost 目录选择';
        quickPick.matchOnDescription = true;
        quickPick.matchOnDetail = true;

        quickPick.items = items;

        if (defaultDirectoryId !== undefined) {
            const active = items.find((i) => i.dir.id === defaultDirectoryId);
            if (active) {
                quickPick.activeItems = [active];
            }
        }

        let settled = false;
        const settle = (value: PickedDirectory | undefined): void => {
            if (settled) {
                return;
            }
            settled = true;
            resolve(value);
        };

        quickPick.onDidAccept(() => {
            const picked = quickPick.selectedItems[0] ?? quickPick.activeItems[0];
            quickPick.hide();
            settle(picked ? { id: picked.dir.id, name: picked.dir.name } : undefined);
        });

        quickPick.onDidHide(() => {
            quickPick.dispose();
            settle(undefined);
        });

        quickPick.show();
    });
}

/**
 * 深度优先遍历目录树,产出 (层级, 目录) 元数据
 * 子目录会获得 level + 1 的缩进
 */
function flattenTree(
    tree: ApipostDirectory[],
    level: number,
    out: FlatDirectory[]
): void {
    for (const node of tree) {
        if (!node || !node.id) {
            continue;
        }
        out.push({ id: node.id, name: node.name, level });
        if (node.children && node.children.length > 0) {
            flattenTree(node.children, level + 1, out);
        }
    }
}
