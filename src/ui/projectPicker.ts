// 项目选择弹窗
// 通过 QuickPick 展示可搜索的项目列表,并尝试将上次使用的项目作为默认激活项
import * as vscode from 'vscode';
import { ApipostProject } from '../types';
import { ApipostClient } from '../apipost/client';
import { fetchProjects } from '../apipost/projects';
import * as log from '../utils/log';

/**
 * QuickPick 列表项的扩展类型:把项目本体挂在 item 上,选中时直接取出
 */
interface ProjectPickItem extends vscode.QuickPickItem {
    /** 关联的 Apipost 项目对象 */
    project: ApipostProject;
}

/**
 * 弹出项目选择框,让用户挑选一个 Apipost 项目
 * @param client 已构造好的 Apipost 客户端
 * @param defaultProjectId 可选,期望被默认激活(高亮)的上次项目 ID
 * @returns 用户选中的项目;取消或无项目时返回 undefined
 * @throws 网络/解析失败时抛出原错误(并已向用户弹出友好提示)
 */
export async function pickProject(
    client: ApipostClient,
    defaultProjectId?: string
): Promise<ApipostProject | undefined> {
    // 1) 拉取远端项目列表
    let projects: ApipostProject[];
    try {
        projects = await fetchProjects(client);
    } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        log.error('获取 Apipost 项目列表失败', err);
        // 友好提示用户后继续向外抛,调用方可以决定是否降级
        void vscode.window.showErrorMessage(`获取项目列表失败: ${message}`);
        throw err;
    }

    // 2) 列表为空:提示后退出,不算错误
    if (!projects || projects.length === 0) {
        void vscode.window.showInformationMessage('未找到任何项目');
        return undefined;
    }

    // 3) 构造 QuickPick 项
    const items: ProjectPickItem[] = projects.map((p) => ({
        label: p.name,
        description: `ID: ${p.id}`,
        detail: 'Apipost 项目',
        project: p,
    }));

    // 4) 走 createQuickPick 以便把 defaultProjectId 设为默认激活项
    return new Promise<ApipostProject | undefined>((resolve) => {
        const quickPick = vscode.window.createQuickPick<ProjectPickItem>();
        quickPick.placeholder = '请选择要上传到的 Apipost 项目(支持搜索)';
        quickPick.title = 'Apipost 项目选择';
        // 让用户能用名称、ID、描述三种字段模糊搜索
        quickPick.matchOnDescription = true;
        quickPick.matchOnDetail = true;

        quickPick.items = items;

        // 尝试把 defaultProjectId 对应项预激活,实现「一键回车」
        if (defaultProjectId) {
            const active = items.find((i) => i.project.id === defaultProjectId);
            if (active) {
                quickPick.activeItems = [active];
            }
        }

        // 防止 resolve 被多次调用
        let settled = false;
        const settle = (value: ApipostProject | undefined): void => {
            if (settled) {
                return;
            }
            settled = true;
            resolve(value);
        };

        quickPick.onDidAccept(() => {
            // 用户按 Enter:VSCode 默认会把 activeItems[0] 写入 selectedItems
            const picked = quickPick.selectedItems[0] ?? quickPick.activeItems[0];
            quickPick.hide();
            settle(picked ? picked.project : undefined);
        });

        quickPick.onDidHide(() => {
            // 用户按 Esc / 关闭:统一走取消分支
            quickPick.dispose();
            settle(undefined);
        });

        quickPick.show();
    });
}
