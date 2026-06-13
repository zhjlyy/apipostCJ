// 项目/目录相关 API
// 使用 V8 MCP JSON-RPC 协议：
// - get_project_tree：获取团队和项目列表
// - search_target：搜索目录/接口节点

import type { ApipostClient } from './client';
import type { ApipostProject, ApipostDirectory } from '../types';

/** MCP get_project_tree 响应结构 */
interface ProjectTreeResult {
    teams?: TeamInfo[];
}

interface TeamInfo {
    name: string;
    alias_name: string;
    team_id: string;
    projects?: ProjectInfo[];
}

interface ProjectInfo {
    main_project_id: string;
    name: string;
    branches?: BranchInfo[];
}

interface BranchInfo {
    project_id: string;
    name: string;
    is_lock: number;
}

/** MCP search_target 响应结构 */
interface SearchTargetResult {
    list?: TargetNode[];
}

interface TargetNode {
    target_id: string;
    target_type: string; // "api" | "folder" | "doc" 等
    name: string;
    parent_id: string;
    url: string;
    method?: string;
}

/**
 * 获取当前 accessToken 可见的项目列表
 * 使用 MCP get_project_tree 方法
 */
export async function fetchProjects(client: ApipostClient): Promise<ApipostProject[]> {
    const result = await client.callMethod<ProjectTreeResult>('get_project_tree', {
        tool_version: '1.0.0'
    });

    const projects: ApipostProject[] = [];
    if (result.teams) {
        for (const team of result.teams) {
            if (team.projects) {
                for (const proj of team.projects) {
                    // 使用主项目 ID 和名称
                    projects.push({
                        id: proj.main_project_id,
                        name: proj.name
                    });
                }
            }
        }
    }
    return projects;
}

/**
 * 获取指定项目的目录树
 * 使用 MCP search_target 方法，搜索 folder 类型节点
 */
export async function fetchDirectoryTree(
    client: ApipostClient,
    projectId: string
): Promise<ApipostDirectory[]> {
    const result = await client.callMethod<SearchTargetResult>('search_target', {
        project_id: projectId,
        target_types: ['folder'],
        tool_version: '1.0.0'
    });

    const flat: ApipostDirectory[] = [];
    if (result.list) {
        for (const node of result.list) {
            flat.push({
                id: node.target_id,
                name: node.name,
                parentId: node.parent_id === '0' ? undefined : node.parent_id
            });
        }
    }
    return buildTree(flat);
}

/**
 * 将扁平目录列表组装为树形结构
 */
function buildTree(flat: ApipostDirectory[]): ApipostDirectory[] {
    const map = new Map<string, ApipostDirectory>();
    for (const d of flat) {
        map.set(d.id, { ...d, children: [] });
    }
    const roots: ApipostDirectory[] = [];
    for (const node of map.values()) {
        const parentId = node.parentId;
        if (parentId && map.has(parentId)) {
            const parent = map.get(parentId)!;
            (parent.children as ApipostDirectory[]).push(node);
        } else {
            roots.push(node);
        }
    }
    return roots;
}

/**
 * 在指定项目下创建目录
 * 使用 MCP create_target 方法，target_type 为 folder
 */
export async function createDirectory(
    client: ApipostClient,
    projectId: string,
    parentId: string | null,
    name: string
): Promise<{ id: string }> {
    const result = await client.callMethod<{ code: number; data: { target_id: string } | null; msg: string }>(
        'create_target',
        {
            project_id: projectId,
            target_type: 'folder',
            name,
            parent_id: parentId && parentId.length > 0 ? parentId : '0',
            tool_version: ''
        }
    );

    if (!result.data || !result.data.target_id) {
        throw new Error(`Apipost 创建目录失败：${result.msg || '响应中未包含 target_id'}`);
    }
    return { id: result.data.target_id };
}
