// host 解析工具
// - 优先使用 overrideHost（用户在插件设置中显式指定）
// - 否则在工作区根目录下查找 application.yml / application.properties
// - 解析 server.port（默认 8080）与 server.servlet.context-path
// - 拼成 `http://localhost:<port><contextPath>` 形式返回
// - 若都解析不到则返回空字符串

import * as fs from 'fs';
import * as path from 'path';
import { fileExists } from '../utils/fs';

/** 默认端口：8080 */
const DEFAULT_PORT = 8080;

/** 默认 host：localhost */
const DEFAULT_HOSTNAME = 'localhost';

/** 默认 scheme：http */
const DEFAULT_SCHEME = 'http';

/**
 * 解析目标 host 字符串
 *
 * 优先级：
 * 1. overrideHost 非空时直接使用
 * 2. workspaceFolder 下存在 `application.yml` 或 `application.properties`，解析后拼接
 * 3. 上述都不可用时返回空字符串（调用方应自行兜底）
 *
 * @param workspaceFolder 当前工作区根目录（可能为 undefined）
 * @param overrideHost 用户在设置中手动覆盖的 host
 */
export function resolveHost(workspaceFolder: string | undefined, overrideHost: string): string {
    // 1. 优先使用覆盖值
    const trimmedOverride = (overrideHost ?? '').trim();
    if (trimmedOverride.length > 0) {
        return trimmedOverride;
    }

    // 2. 工作区为空则无法继续
    if (!workspaceFolder || workspaceFolder.trim().length === 0) {
        return '';
    }

    // 3. 依次尝试 yaml / properties
    const yamlPath = path.join(workspaceFolder, 'application.yml');
    const propsPath = path.join(workspaceFolder, 'application.properties');

    let port: number | undefined;
    let contextPath: string | undefined;

    if (fileExists(yamlPath)) {
        try {
            const content = fs.readFileSync(yamlPath, 'utf-8');
            const parsed = parseYamlConfig(content);
            port = parsed.port;
            contextPath = parsed.contextPath;
        } catch {
            // 读取失败：忽略，尝试 properties
        }
    }

    // properties 仅在尚未取得 port/context 时尝试，避免覆盖
    if ((port === undefined || contextPath === undefined) && fileExists(propsPath)) {
        try {
            const content = fs.readFileSync(propsPath, 'utf-8');
            const parsed = parsePropertiesConfig(content);
            if (port === undefined) {
                port = parsed.port;
            }
            if (contextPath === undefined) {
                contextPath = parsed.contextPath;
            }
        } catch {
            // 读取失败：忽略
        }
    }

    // 4. 至少要解析出 port，否则视为解析失败
    if (port === undefined) {
        return '';
    }

    return composeHost(DEFAULT_SCHEME, DEFAULT_HOSTNAME, port, contextPath);
}

/** 拼装 host 字符串，保证 contextPath 以 `/` 开头且不带尾部 `/` */
function composeHost(scheme: string, hostname: string, port: number, contextPath?: string): string {
    let ctx = contextPath && contextPath.length > 0 ? contextPath : '';
    if (ctx.length > 0 && !ctx.startsWith('/')) {
        ctx = `/${ctx}`;
    }
    // 去掉尾部 `/` 防止重复
    if (ctx.endsWith('/')) {
        ctx = ctx.slice(0, -1);
    }
    return `${scheme}://${hostname}:${port}${ctx}`;
}

/** 解析结果 */
interface ServerConfig {
    /** server.port，未命中则为 undefined */
    port?: number;
    /** server.servlet.context-path，未命中则为 undefined */
    contextPath?: string;
}

/**
 * 使用正则从 application.yml 中解析 server.port / server.servlet.context-path
 * 不引入 js-yaml 依赖以避免新增 npm 包。
 *
 * 支持的形式（不要求严格 YAML）：
 *   server:
 *     port: 8080
 *   server:
 *     servlet:
 *       context-path: /api
 *   server.port: 8080
 */
function parseYamlConfig(content: string): ServerConfig {
    const result: ServerConfig = {};

    // 1) 缩进式匹配：形如 `  port: 8080`，要求前置空白 + `port:`
    // 兼容 8080、`"8080"`、`'8080'`
    const portIndented = content.match(/^\s+port:\s*["']?(\d+)["']?\s*$/m);
    if (portIndented) {
        const n = Number(portIndented[1]);
        if (Number.isFinite(n)) {
            result.port = n;
        }
    }
    // 2) 扁平式：`server.port: 8080`
    if (result.port === undefined) {
        const portFlat = content.match(/^\s*server\.port\s*:\s*["']?(\d+)["']?\s*$/m);
        if (portFlat) {
            const n = Number(portFlat[1]);
            if (Number.isFinite(n)) {
                result.port = n;
            }
        }
    }

    // context-path 同样支持缩进与扁平两种
    const ctxIndented = content.match(/^\s+context-path:\s*["']?([^"'\s#]+)["']?\s*$/m);
    if (ctxIndented) {
        result.contextPath = ctxIndented[1];
    } else {
        const ctxFlat = content.match(/^\s*server\.servlet\.context-path\s*:\s*["']?([^"'\s#]+)["']?\s*$/m);
        if (ctxFlat) {
            result.contextPath = ctxFlat[1];
        }
    }

    return result;
}

/**
 * 解析 application.properties：
 *   server.port=8080
 *   server.servlet.context-path=/api
 *   # 注释行以 # 开头会被忽略
 */
function parsePropertiesConfig(content: string): ServerConfig {
    const result: ServerConfig = {};
    const lines = content.split(/\r?\n/);
    for (const raw of lines) {
        const line = raw.trim();
        // 跳过空行与注释
        if (line.length === 0 || line.startsWith('#') || line.startsWith('!')) {
            continue;
        }
        const eqIdx = line.indexOf('=');
        if (eqIdx < 0) {
            continue;
        }
        const key = line.slice(0, eqIdx).trim();
        const value = line.slice(eqIdx + 1).trim();
        if (key === 'server.port') {
            const n = Number(value);
            if (Number.isFinite(n)) {
                result.port = n;
            }
        } else if (key === 'server.servlet.context-path') {
            result.contextPath = value;
        }
    }
    return result;
}

/** 暴露默认端口，便于测试/调用方复用 */
export function getDefaultPort(): number {
    return DEFAULT_PORT;
}
