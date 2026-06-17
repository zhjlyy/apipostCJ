// 接口上传相关 API
// 基于《开放接口文档 V2版本（saas版）》实现
// - POST /open/apis/create → 创建 HTTP 类型接口
// - 单个失败不阻断其他接口上传

import type { ApipostClient } from './client';
import type { ApiEndpoint, ApiParam, ApipostUploadResult, HttpMethod } from '../types';

/**
 * 批量上传接口到 Apipost
 * 使用 POST /open/apis/create 逐个创建 API 节点
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
            const body = buildApiCreateBody(ep, projectId, directoryId, host);
            await client.post('/open/apis/create', body);
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
 * 将 ApiEndpoint 转为 POST /open/apis/create 的请求体
 * 字段映射遵循 V2 文档定义
 */
function buildApiCreateBody(
    ep: ApiEndpoint,
    projectId: string,
    directoryId: string | null,
    host: string
): Record<string, unknown> {
    // 按 in 位置分桶参数
    const queryParams: ApipostParam[] = [];
    const pathParams: ApipostParam[] = [];
    const headerParams: ApipostParam[] = [];
    const bodyParams: ApipostParam[] = [];

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

    // 拼接完整 URL（host + path）
    const url = host ? `${host}${ep.path}` : ep.path;

    // 构造 request 对象
    const request: Record<string, unknown> = {
        // Query 参数
        query: { parameter: queryParams },
        // Path（restful）参数
        restful: { parameter: pathParams },
        // Header 参数
        header: { parameter: headerParams },
        // Cookie 参数
        cookie: { parameter: [] },
        // 认证方式
        auth: {
            type: 'noauth',
            kv: { key: '', value: '' },
            bearer: { key: '' },
            basic: { username: '', password: '' }
        }
    };

    // Body 参数
    // 构造 raw_schema（用于 Apipost 自动生成结构化的请求体）
    const bodySchema = buildBodySchema(bodyParams);
    if (ep.requestBodyType) {
        // @RequestBody 整体对象：使用 json mode
        request['body'] = {
            mode: 'json',
            raw: buildRawJsonExample(bodyParams),
            parameter: bodyParams,
            raw_parameter: [],
            raw_schema: bodySchema,
            binary: null
        };
    } else if (bodyParams.length > 0) {
        request['body'] = {
            mode: 'json',
            raw: buildRawJsonExample(bodyParams),
            parameter: bodyParams,
            raw_parameter: [],
            raw_schema: bodySchema,
            binary: null
        };
    } else {
        request['body'] = {
            mode: 'none',
            parameter: [],
            raw: '',
            raw_parameter: [],
            raw_schema: { type: 'object' },
            binary: null
        };
    }

    // 构造 response 对象
    // 如果有响应 DTO 字段，生成 response schema
    const responseSchema = buildResponseSchema(ep.responseFields);
    const response: Record<string, unknown> = {
        example: [
            {
                example_id: '1',
                raw: '',
                raw_parameter: [],
                expect: {
                    name: '成功',
                    is_default: 1,
                    code: '200',
                    content_type: 'json',
                    verify_type: 'schema',
                    mock: '',
                    schema: responseSchema
                }
            }
        ],
        is_check_result: 1
    };

    return {
        project_id: projectId,
        target_type: 'api',
        name: ep.summary || `${ep.className}.${ep.methodName}`,
        parent_id: directoryId && directoryId.length > 0 ? directoryId : '0',
        method: ep.method,
        url,
        protocol: 'http/1.1',
        description: ep.description || '',
        mark_id: '1',
        request,
        response,
        attribute_info: {},
        tags: ep.tags || []
    };
}

/** Apipost V2 参数结构 */
interface ApipostParam {
    key: string;
    value: string;
    description: string;
    field_type: string;
    not_null: number; // 1=必填, -1=非必填
    is_checked: number; // 1=启用, -1=禁用
}

/** 将内部 ApiParam 转为 Apipost V2 参数结构 */
function mapParam(p: ApiParam): ApipostParam {
    return {
        key: p.name,
        value: p.defaultValue || '',
        description: p.description || '',
        field_type: mapFieldType(p.type),
        not_null: p.required ? 1 : -1,
        is_checked: 1
    };
}

/** 将 Java 类型映射为 Apipost field_type */
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

/**
 * 构造请求体 schema（基于 body 参数展开）
 * - 格式遵循 Apipost V2 的 raw_schema 定义
 * - 用于 Apipost 在 UI 中渲染结构化的请求体编辑面板
 */
function buildBodySchema(params: ApipostParam[]): Record<string, unknown> {
    if (!params || params.length === 0) {
        return { type: 'object', properties: {} };
    }
    const properties: Record<string, unknown> = {};
    const required: string[] = [];
    for (const p of params) {
        const fieldType = p.field_type;
        const prop: Record<string, unknown> = {
            type: fieldType,
            description: p.description || '',
            mock: p.value ? { mock: p.value } : undefined
        };
        properties[p.key] = prop;
        if (p.not_null === 1) {
            required.push(p.key);
        }
    }
    return {
        type: 'object',
        properties,
        required: required.length > 0 ? required : undefined
    };
}

/**
 * 根据参数列表生成一个示例 JSON 字符串
 * - 用于 Apipost 请求体"raw"字段展示
 */
function buildRawJsonExample(params: ApipostParam[]): string {
    if (!params || params.length === 0) {
        return '';
    }
    const obj: Record<string, unknown> = {};
    for (const p of params) {
        obj[p.key] = p.value !== '' ? p.value : defaultMockForType(p.field_type);
    }
    try {
        return JSON.stringify(obj, null, 2);
    } catch {
        return '';
    }
}

/** 根据字段类型生成一个合理的默认值 */
function defaultMockForType(fieldType: string): unknown {
    switch (fieldType) {
        case 'string': return '';
        case 'integer': return 0;
        case 'number': return 0;
        case 'boolean': return false;
        case 'array': return [];
        case 'object': return {};
        default: return null;
    }
}

/**
 * 构造响应 schema（基于 DTO 字段展开）
 * 格式遵循 Apipost V2 的 schema 定义
 */
function buildResponseSchema(fields: ApiParam[] | undefined): Record<string, unknown> {
    if (!fields || fields.length === 0) {
        return {};
    }
    // 构造 properties
    const properties: Record<string, unknown> = {};
    const required: string[] = [];
    for (const f of fields) {
        properties[f.name] = {
            type: mapFieldType(f.type),
            description: f.description || '',
            mock: f.defaultValue ? { mock: f.defaultValue } : undefined
        };
        if (f.required) {
            required.push(f.name);
        }
    }
    return {
        type: 'object',
        properties,
        required: required.length > 0 ? required : undefined
    };
}

/** 拼接调试链接 */
function buildDebugUrl(client: ApipostClient, projectId: string): string {
    // Apipost 客户端链接（非 open API 地址）
    const base = 'https://app.apipost.cn';
    return `${base}/project/${encodeURIComponent(projectId)}/apis`;
}

/** 拼接分享链接 */
function buildShareUrl(client: ApipostClient, projectId: string): string {
    const base = 'https://app.apipost.cn';
    return `${base}/share/project/${encodeURIComponent(projectId)}`;
}
