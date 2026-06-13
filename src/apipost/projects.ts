// 项目/目录相关 API
// 基于《开放接口文档 V2版本（saas版）》实现
// - GET /open/team/list → 获取团队列表
// - GET /open/project/list → 获取项目列表
// - GET /open/apis/list → 获取接口/目录树
// - POST /open/apis/create → 创建目录（target_type: "folder"）

import type { ApipostClient } from './client';
import type { ApipostProject, ApipostDirectory } from '../types';

/** 团队信息 */
interface TeamInfo {
    team_id: string;
    name: string;
    intro?: string;
    logo?: string;
    is_default?: number;
}

/** 项目信息（/open/project/list 返回） */
interface ProjectInfo {
    project_id: string;
    project_code?: string;
    team_id: string;
    name: string;
    intro?: string;
    is_lock?: number;
    is_freeze?: number;
    status?: number;
    is_default?: number;
}

/** 接口/目录节点（/open/apis/list 返回） */
interface ApiListNode {
    target_id: string;
    target_type: string; // "api" | "folder" | "doc" 等
    parent_id: string;
    name: string;
    version?: number;
    method?: string;
    url?: string;
    mark_id?: string;
    sort?: number;
    is_exampled?: number;
}

/**
 * 获取当前 accessToken 可见的所有项目
 * 流程：先获取团队列表 → 再获取每个团队下的项目 → 合并返回
 */
export async function fetchProjects(client: ApipostClient): Promise<ApipostProject[]> {
    // 1. 获取团队列表
    const teams = await client.get<TeamInfo[]>('/open/team/list');

    // 2. 获取每个团队下的项目列表（最少连接：并行请求所有团队）
    const projectPromises = teams.map(async (team) => {
        try {
            const projects = await client.get<ProjectInfo[]>('/open/project/list', {
                team_id: team.team_id,
                action: '0' // 全部项目
            });
            return projects;
        } catch (err) {
            // 单个团队失败不阻断其他团队
            return [] as ProjectInfo[];
        }
    });

    const allProjectArrays = await Promise.all(projectPromises);
    const allProjects = allProjectArrays.flat();

    // 3. 转换为统一格式
    return allProjects.map((proj) => ({
        id: proj.project_id,
        name: proj.name
    }));
}

/**
 * 获取指定项目的目录树
 * 使用 GET /open/apis/list 获取所有节点，筛选 folder 类型
 */
export async function fetchDirectoryTree(
    client: ApipostClient,
    projectId: string
): Promise<ApipostDirectory[]> {
    const result = await client.get<{ list: ApiListNode[] }>('/open/apis/list', {
        project_id: projectId
    });

    // 筛选 folder 类型节点
    const folders: ApipostDirectory[] = [];
    if (result && result.list) {
        for (const node of result.list) {
            if (node.target_type === 'folder') {
                folders.push({
                    id: node.target_id,
                    name: node.name,
                    parentId: node.parent_id === '0' ? undefined : node.parent_id
                });
            }
        }
    }

    return buildTree(folders);
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
 * 使用 POST /open/apis/create，target_type 为 folder
 */
export async function createDirectory(
    client: ApipostClient,
    projectId: string,
    parentId: string | null,
    name: string
): Promise<{ id: string }> {
    const result = await client.post<{ target_id: string }>('/open/apis/create', {
        project_id: projectId,
        target_type: 'folder',
        name,
        parent_id: parentId && parentId.length > 0 ? parentId : '0'
    });

    if (!result || !result.target_id) {
        throw new Error('Apipost 创建目录失败：响应中未包含 target_id');
    }
    return { id: result.target_id };
}
