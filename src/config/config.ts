// 读取 VSCode 配置项的封装
import * as vscode from 'vscode';

/** V8 默认云端地址 */
export const DEFAULT_BASE_URL = 'https://open.apipost.net';

/** 上传模式枚举 */
export type UploadMode = 'manual' | 'autoClassDir' | 'autoModuleAndClassDir';

/** 插件配置聚合对象 */
export interface ApipostConfig {
    accessToken: string;
    baseUrl: string;
    uploadMode: UploadMode;
    host: string;
}

/**
 * 从 VSCode 配置中读取最新的 Apipost 插件设置
 */
export function readConfig(): ApipostConfig {
    const cfg = vscode.workspace.getConfiguration('apipost');
    return {
        // 访问令牌
        accessToken: (cfg.get<string>('accessToken') ?? '').trim(),
        // 云端地址，缺省使用 V8
        baseUrl: (cfg.get<string>('baseUrl') ?? DEFAULT_BASE_URL).trim() || DEFAULT_BASE_URL,
        // 上传模式
        uploadMode: (cfg.get<UploadMode>('uploadMode') ?? 'manual'),
        // 手动覆盖的 host
        host: (cfg.get<string>('host') ?? '').trim()
    };
}

/**
 * 判断当前配置是否已具备上传所需的最少凭据
 */
export function hasValidCredential(cfg: ApipostConfig): boolean {
    return cfg.accessToken.length > 0;
}

/**
 * 跳转到插件设置中 `accessToken` 所在项
 */
export async function openAccessTokenSettings(): Promise<void> {
    await vscode.commands.executeCommand('workbench.action.openSettings', 'apipost.accessToken');
}
