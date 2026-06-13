// Apipost V8 MCP JSON-RPC 客户端封装
// V8 不提供传统 REST API，而是通过 MCP（Model Context Protocol）JSON-RPC 协议通信
// 端点：POST {baseUrl}/mcp，鉴权：api-token header

import type { ApipostConfig } from '../config/config';

/** 默认请求超时时间：30 秒 */
const DEFAULT_TIMEOUT_MS = 30_000;

/** 网络层错误（封装 HTTP 状态码与响应片段） */
export class ApipostHttpError extends Error {
    public readonly status: number;
    public readonly bodySnippet: string;
    public readonly path: string;

    constructor(message: string, status: number, bodySnippet: string, path: string) {
        super(message);
        this.name = 'ApipostHttpError';
        this.status = status;
        this.bodySnippet = bodySnippet;
        this.path = path;
    }
}

/** MCP JSON-RPC 请求 ID 计数器 */
let rpcId = 1;

/**
 * Apipost V8 MCP 客户端
 *
 * - 使用 MCP JSON-RPC 协议与 V8 通信
 * - 端点：POST {baseUrl}/mcp
 * - 鉴权：api-token header
 * - 内置 30 秒超时
 */
export class ApipostClient {
    private readonly config: ApipostConfig;
    private readonly timeoutMs: number;

    constructor(config: ApipostConfig, options?: { timeoutMs?: number }) {
        this.config = config;
        this.timeoutMs = options?.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    }

    /** 暴露当前 baseUrl（去除尾部 `/`） */
    public get baseUrl(): string {
        return this.config.baseUrl.replace(/\/+$/, '');
    }

    /** 暴露当前 api-token */
    public get apiToken(): string {
        return this.config.accessToken;
    }

    /**
     * 调用 MCP JSON-RPC 方法
     * @param method MCP 方法名（如 get_project_tree、create_target）
     * @param params 方法参数
     * @returns result 字段的内容
     */
    public async callMethod<T>(method: string, params: Record<string, unknown>): Promise<T> {
        const url = `${this.baseUrl}/mcp`;
        const id = rpcId++;

        // 构造 JSON-RPC 请求体
        const body = {
            jsonrpc: '2.0',
            id,
            method,
            params
        };

        // 超时控制
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), this.timeoutMs);

        let response: Response;
        try {
            response = await fetch(url, {
                method: 'POST',
                headers: this.buildHeaders(),
                body: JSON.stringify(body),
                signal: controller.signal
            });
        } catch (err) {
            clearTimeout(timer);
            if (err instanceof Error && err.name === 'AbortError') {
                throw new ApipostHttpError(
                    `Apipost 请求超时（${this.timeoutMs}ms）: ${method}`,
                    0, '', '/mcp'
                );
            }
            const msg = err instanceof Error ? err.message : String(err);
            throw new ApipostHttpError(
                `Apipost 网络错误: ${method} -> ${msg}`,
                0, '', '/mcp'
            );
        } finally {
            clearTimeout(timer);
        }

        // 读取响应（SSE 格式，需要解析 event: message 行）
        const rawText = await response.text();
        const snippet = rawText.slice(0, 2048);

        if (!response.ok) {
            throw new ApipostHttpError(
                `Apipost 响应异常: ${method} -> HTTP ${response.status} ${response.statusText}`,
                response.status, snippet, '/mcp'
            );
        }

        // 解析 SSE 格式响应：提取 data: 行
        const dataLine = parseSseData(rawText);
        if (!dataLine) {
            throw new ApipostHttpError(
                `Apipost 响应格式异常: ${method} -> 未找到 data 行`,
                response.status, snippet, '/mcp'
            );
        }

        let rpcResponse: { jsonrpc: string; id: number; result?: T; error?: { code: number; message: string } };
        try {
            rpcResponse = JSON.parse(dataLine);
        } catch (err) {
            const msg = err instanceof Error ? err.message : String(err);
            throw new ApipostHttpError(
                `Apipost 响应 JSON 解析失败: ${method} -> ${msg}`,
                response.status, snippet, '/mcp'
            );
        }

        // 检查 RPC 错误
        if (rpcResponse.error) {
            throw new ApipostHttpError(
                `Apipost RPC 错误: ${method} -> [${rpcResponse.error.code}] ${rpcResponse.error.message}`,
                response.status, dataLine.slice(0, 500), '/mcp'
            );
        }

        return rpcResponse.result as T;
    }

    /**
     * 构造请求头
     * V8 鉴权方式：api-token header
     */
    private buildHeaders(): Record<string, string> {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'Accept': 'text/event-stream'
        };
        // V8 鉴权：api-token header
        if (this.config.accessToken) {
            headers['api-token'] = this.config.accessToken;
        }
        return headers;
    }
}

/**
 * 解析 SSE 格式响应，提取 data: 行的 JSON 内容
 * V8 MCP 返回格式：
 *   event: message
 *   data: {"jsonrpc":"2.0","id":1,"result":{...}}
 */
function parseSseData(raw: string): string | null {
    const lines = raw.split('\n');
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('data:')) {
            return line.substring(5).trim();
        }
    }
    // 如果不是 SSE 格式，尝试直接解析为 JSON
    const trimmed = raw.trim();
    if (trimmed.startsWith('{')) {
        return trimmed;
    }
    return null;
}
