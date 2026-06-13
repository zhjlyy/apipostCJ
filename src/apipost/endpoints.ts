// 接口上传相关 API
// 使用 V8 MCP JSON-RPC 协议：
// - create_target：创建 API 节点（target_type: "api"）
// - 单个失败不阻断其他接口上传

import type { ApipostClient } from './client';
import type { ApiEndpoint, ApiParam, ApipostUploadResult, HttpMethod } from '../types';

/** MCP create_target 响应结构 */
interface CreateTargetResult {
    code: number;
    data: { target_id: string } | null;
    msg: string;
}

/**
 * 批量上传接口到 Apipost
 * 使用 MCP create_target 方法逐个创建 API 节点
 */
export async function uploadEndpoints(
    client: ApipostClient,
    projectId: string,
    directoryId: string | null,
    endpoints: ApiEndpoint[],
    host: string
): Promise<ApipostUploadResult> {
    let success = 0;
    let failed = 0;
    const errors: string[] = [];

    if (!Array.isArray(endpoints) || endpoints.length === 0) {
        return {
            success: 0,
            failed: 0,
            errors: [],
            debugUrl: buildDebugUrl(client, projectId),
            shareUrl: buildShareUrl(client, projectId)
        };
    }

    // 逐个上传
    for (const ep of endpoints) {
        try {
            const body = buildCreateTargetParams(ep, projectId, directoryId, host);
            await client.callMethod<CreateTargetResult>('create_target', body);
            success += 1;
        } catch (err) {
            failed += 1;
            const message = err instanceof Error ? err.message : String(err);
            const id = `${ep.className}#${ep.methodName}`;
            errors.push(`${id} -> ${message}`);
        }
    }

    return {
        success,
        failed,
        errors,
        debugUrl: buildDebugUrl(client, projectId),
        shareUrl: buildShareUrl(client, projectId)
    };
}

/**
 * 将 ApiEndpoint 转为 MCP create_target 的参数
 * 字段映射遵循 V8 MCP create_target 的 schema 定义
 */
function buildCreateTargetParams(
    ep: ApiEndpoint,
    projectId: string,
    directoryId: string | null,
    host: string
): Record<string, unknown> {
    // 按 in 位置分桶参数
    const queryParams: McpParam[] = [];
    const pathParams: McpParam[] = [];
    const headerParams: McpParam[] = [];
    const bodyParams: McpParam[] = [];

    for (const p of ep.parameters) {
        const mapped = mapParam(p);
        switch (p.in) {
            case 'query': queryParams.push(mapped); break;
            case 'path': pathParams.push(mapped); break;
            case 'header': headerParams.push(mapped); break;
            case 'body':
            default: bodyParams.push(mapped); break;
        }
    }

    // 构造请求体
    const request: Record<string, unknown> = {};

    // Query 参数
    if (queryParams.length > 0) {
        request['query'] = { parameter: queryParams };
    }

    // Path（restful）参数
    if (pathParams.length > 0) {
        request['restful'] = { parameter: pathParams };
    }

    // Header 参数
    if (headerParams.length > 0) {
        request['header'] = { parameter: headerParams };
    }

    // Body 参数
    if (ep.requestBodyType) {
        // @RequestBody 整体对象：使用 json mode + schema
        request['body'] = {
            mode: 'json',
            raw: '{}',
            parameter: bodyParams
        };
    } else if (bodyParams.length > 0) {
        request['body'] = {
            mode: 'json',
            parameter: bodyParams
        };
    }

    // 拼接完整 URL（host + path）
    const url = host ? `${host}${ep.path}` : ep.path;

    return {
        project_id: projectId,
        target_type: 'api',
        name: ep.summary || `${ep.className}.${ep.methodName}`,
        parent_id: directoryId && directoryId.length > 0 ? directoryId : '0',
        method: ep.method,
        url,
        description: ep.description || '',
        tags: ep.tags,
        request,
        tool_version: ''
    };
}

/** MCP 参数结构 */
interface McpParam {
    key: string;
    value: string;
    description: string;
    field_type: string;
    not_null: number; // 1=必填, -1=非必填
    is_checked: number; // 1=启用, -1=禁用
}

/** 将内部 ApiParam 转为 MCP 参数结构 */
function mapParam(p: ApiParam): McpParam {
    return {
        key: p.name,
        value: p.defaultValue || '',
        description: p.description || '',
        field_type: mapFieldType(p.type),
        not_null: p.required ? 1 : -1,
        is_checked: 1
    };
}

/** 将 Java 类型映射为 MCP field_type */
function mapFieldType(javaType: string): string {
    const lower = javaType.toLowerCase();
    if (lower === 'int' || lower === 'integer' || lower === 'long' || lower === 'short' || lower === 'byte') {
        return 'integer';
    }
    if (lower === 'float' || lower === 'double' || lower === 'bigdecimal') {
        return 'number';
    }
    if (lower === 'boolean') {
        return 'boolean';
    }
    if (lower === 'list' || lower === 'set' || lower === 'collection') {
        return 'array';
    }
    if (lower === 'map' || lower === 'object') {
        return 'object';
    }
    // 默认为 string
    return 'string';
}

/** 拼接调试链接 */
function buildDebugUrl(client: ApipostClient, projectId: string): string {
    const base = client.baseUrl.replace(/\/+$/, '');
    return `${base}/project/${encodeURIComponent(projectId)}/apis`;
}

/** 拼接分享链接 */
function buildShareUrl(client: ApipostClient, projectId: string): string {
    const base = client.baseUrl.replace(/\/+$/, '');
    return `${base}/share/project/${encodeURIComponent(projectId)}`;
}
