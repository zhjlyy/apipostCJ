// Apipost V8 REST API 客户端封装
// 基于《开放接口文档 V2版本（saas版）》实现
// 鉴权方式：api-token header
// 所有接口统一响应格式：{ code: 0, msg: "成功", data: ... }

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

/** Apipost 统一响应结构 */
export interface ApipostResponse<T> {
    code: number;
    msg: string;
    data: T;
    time?: string;
    extra_err?: Record<string, unknown>;
}

/**
 * Apipost V8 REST 客户端
 *
 * - 鉴权：api-token header
 * - 基础 URL：默认 https://open.apipost.net
 * - 内置 30 秒超时
 * - 自动解析统一响应格式，code !== 0 时抛出业务异常
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
     * 发送 GET 请求
     * @param path 接口路径（如 /open/team/list）
     * @param query 查询参数
     * @returns data 字段的内容
     */
    public async get<T>(path: string, query?: Record<string, string>): Promise<T> {
        const url = buildUrl(this.baseUrl, path, query);
        return this.request<T>('GET', url);
    }

    /**
     * 发送 POST 请求
     * @param path 接口路径（如 /open/apis/create）
     * @param body 请求体
     * @returns data 字段的内容
     */
    public async post<T>(path: string, body?: Record<string, unknown>): Promise<T> {
        const url = buildUrl(this.baseUrl, path);
        return this.request<T>('POST', url, body);
    }

    /**
     * 通用请求方法
     * - 自动附加 api-token header
     * - 自动解析统一响应格式
     * - code !== 0 时抛出业务异常
     */
    private async request<T>(method: string, url: string, body?: Record<string, unknown>): Promise<T> {
        // 提取路径用于错误信息
        let urlPath: string;
        try { urlPath = new URL(url).pathname; } catch { urlPath = url; }
        // 超时控制
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), this.timeoutMs);

        // 构造请求选项
        const opts: RequestInit = {
            method,
            headers: this.buildHeaders(),
            signal: controller.signal
        };
        if (body && method !== 'GET') {
            opts.body = JSON.stringify(body);
        }

        let response: Response;
        try {
            response = await fetch(url, opts);
        } catch (err) {
            clearTimeout(timer);
            if (err instanceof Error && err.name === 'AbortError') {
                throw new ApipostHttpError(
                    `Apipost 请求超时（${this.timeoutMs}ms）: ${method} ${urlPath}`,
                    0, '', urlPath
                );
            }
            const msg = err instanceof Error ? err.message : String(err);
            throw new ApipostHttpError(
                `Apipost 网络错误: ${method} ${urlPath} -> ${msg}`,
                0, '', urlPath
            );
        } finally {
            clearTimeout(timer);
        }

        // 读取响应
        const rawText = await response.text();
        const snippet = rawText.slice(0, 2048);

        if (!response.ok) {
            throw new ApipostHttpError(
                `Apipost 响应异常: ${method} ${urlPath} -> HTTP ${response.status} ${response.statusText}`,
                response.status, snippet, urlPath
            );
        }

        // 解析 JSON
        let resp: ApipostResponse<T>;
        try {
            resp = JSON.parse(rawText);
        } catch (err) {
            const msg = err instanceof Error ? err.message : String(err);
            throw new ApipostHttpError(
                `Apipost 响应 JSON 解析失败: ${method} ${urlPath} -> ${msg}`,
                response.status, snippet, urlPath
            );
        }

        // 检查业务错误码
        if (resp.code !== 0) {
            throw new ApipostHttpError(
                `Apipost 业务错误: ${method} ${urlPath} -> [${resp.code}] ${resp.msg}`,
                response.status, snippet, urlPath
            );
        }

        return resp.data;
    }

    /**
     * 构造请求头
     * V2 鉴权方式：api-token header
     */
    private buildHeaders(): Record<string, string> {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        if (this.config.accessToken) {
            headers['api-token'] = this.config.accessToken;
        }
        return headers;
    }
}

/**
 * 拼接 URL（含查询参数）
 */
function buildUrl(base: string, path: string, query?: Record<string, string>): string {
    const url = new URL(path, base);
    if (query) {
        for (const [k, v] of Object.entries(query)) {
            if (v !== undefined && v !== null && v !== '') {
                url.searchParams.set(k, v);
            }
        }
    }
    return url.toString();
}
