// Spring 注解匹配工具
// 用于从已剥离字符串/注释的源码片段中，按行扫描并解析 @xxx(...) 注解及其属性

import { HttpMethod } from '../types';

/** 一个解析后的注解 */
export interface ParsedAnnotation {
    /** 注解名（短名，不含 `@`） */
    name: string;
    /** 注解的全部参数文本（`@xxx(...)` 括号内的全部内容），若为 `@xxx` 形式则为 undefined */
    argsText?: string;
    /** 属性键值对，仅对 value/path/method/produces/headers/tags/name/defaultValue/required 等常见属性抽取 */
    attributes: AnnotationAttribute[];
    /** 注解在源码中的起始行号（1-based） */
    line: number;
    /** 注解的原始文本 */
    raw: string;
}

/** 注解内的一个属性（k=v 或 仅 v） */
export interface AnnotationAttribute {
    /** 显式键名，若为单值注解则为 undefined */
    key?: string;
    /** 值（字符串字面量或枚举/类引用等） */
    value: string;
}

/** 匹配一行（或多行拼接后的一行）上的注解 */
const ANNOTATION_RE = /@([A-Za-z_][A-Za-z0-9_]*(?:\.[A-Za-z_][A-Za-z0-9_]*)*)/g;

/**
 * 扫描整段文本，抽取所有 Spring 注解及其参数
 * 注解可以跨多行：`@GetMapping(value = "/x", method = ...)` 形式均能正确处理
 *
 * @param source 已剥离字符串/注释的源码（与原始行号对应）
 * @returns 注解列表（按出现顺序）
 */
export function findAnnotations(source: string): ParsedAnnotation[] {
    const result: ParsedAnnotation[] = [];
    // 1. 拆分行为单位（保留原顺序），但需要识别跨行注解
    //    思路：把所有空白与换行折叠后用统一的 ANNOTATION_RE 扫描，遇到 @xxx 时再向前/向后取括号范围
    const text = source;
    ANNOTATION_RE.lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = ANNOTATION_RE.exec(text)) !== null) {
        const name = match[1];
        // 仅关注 Spring 常用注解
        if (!isSpringAnnotation(name)) {
            continue;
        }
        const start = match.index;
        const nameEnd = start + match[0].length;
        // 2. 找到 `@xxx` 后跟随的 `(` 起点
        let i = nameEnd;
        // 跳过空白（不含换行之外的字符在这里不重要；注解内不会真正出现换行之外的字符）
        while (i < text.length && /\s/.test(text[i])) {
            i++;
        }
        let argsText: string | undefined;
        if (text[i] === '(') {
            // 3. 找到匹配的右括号
            const closeIdx = findMatchingClose(text, i);
            if (closeIdx > i) {
                argsText = text.substring(i + 1, closeIdx);
                // 把 lastIndex 推到 closeIdx+1，避免重复扫描内部
                ANNOTATION_RE.lastIndex = closeIdx + 1;
            } else {
                // 没有匹配的右括号，跳过
                continue;
            }
        } else {
            // 不带括号的注解（不太常见，但仍要记录）
            ANNOTATION_RE.lastIndex = nameEnd;
        }
        const line = lineNumberAt(text, start);
        result.push({
            name,
            argsText,
            attributes: argsText ? parseAttributeList(argsText) : [],
            line,
            raw: text.substring(start, argsText !== undefined ? ANNOTATION_RE.lastIndex : nameEnd)
        });
    }
    return result;
}

/**
 * 查找 Spring 常用注解
 */
function isSpringAnnotation(name: string): boolean {
    const short = name.substring(name.lastIndexOf('.') + 1);
    return (
        short === 'GetMapping' ||
        short === 'PostMapping' ||
        short === 'PutMapping' ||
        short === 'DeleteMapping' ||
        short === 'PatchMapping' ||
        short === 'RequestMapping' ||
        short === 'RequestParam' ||
        short === 'PathVariable' ||
        short === 'RequestBody' ||
        short === 'RequestHeader' ||
        short === 'ApiOperation' ||
        short === 'Api' ||
        short === 'ApiParam'
    );
}

/**
 * 查找 `text[openIdx]` 位置对应的右括号索引。
 * 简单实现：维护括号深度，忽略字符串字面量与单行/块注释。
 */
function findMatchingClose(text: string, openIdx: number): number {
    let depth = 0;
    for (let i = openIdx; i < text.length; i++) {
        const c = text[i];
        if (c === '"' || c === '\'') {
            // 跳过字符串字面量
            const quote = c;
            i++;
            while (i < text.length) {
                if (text[i] === '\\' && i + 1 < text.length) {
                    i += 2;
                    continue;
                }
                if (text[i] === quote) {
                    break;
                }
                i++;
            }
            continue;
        }
        if (c === '/' && text[i + 1] === '/') {
            // 行注释
            while (i < text.length && text[i] !== '\n') {
                i++;
            }
            continue;
        }
        if (c === '/' && text[i + 1] === '*') {
            // 块注释
            i += 2;
            while (i < text.length - 1 && !(text[i] === '*' && text[i + 1] === '/')) {
                i++;
            }
            i++;
            continue;
        }
        if (c === '(') {
            depth++;
        } else if (c === ')') {
            depth--;
            if (depth === 0) {
                return i;
            }
        }
    }
    return -1;
}

/**
 * 解析 `value = "x", name = "y"` 形式的注解属性列表
 * - 支持字符串字面量
 * - 支持枚举/类引用（视为 token）
 * - 支持数组 `{ "a", "b" }`
 */
export function parseAttributeList(text: string): AnnotationAttribute[] {
    const out: AnnotationAttribute[] = [];
    let i = 0;
    const n = text.length;
    while (i < n) {
        // 跳过空白与逗号
        while (i < n && /[\s,]/.test(text[i])) {
            i++;
        }
        if (i >= n) {
            break;
        }
        // 读取 key
        const startKey = i;
        // 如果以 `}` 开头则跳过（防御性）
        if (text[i] === '}') {
            i++;
            continue;
        }
        // 读取 key
        let key: string | undefined;
        // 形如 `xxx =` 时为显式 key
        // 先找到下一个 `=` 符号（不在字符串/括号内）
        const eqIdx = findUnnestedChar(text, i, '=');
        // 判断 key 与 = 之间是否仅含空白
        if (eqIdx > i) {
            const between = text.substring(i, eqIdx);
            if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(between.trim())) {
                key = between.trim();
                i = eqIdx + 1;
            }
        }
        // 跳过空白
        while (i < n && /\s/.test(text[i])) {
            i++;
        }
        if (i >= n) {
            break;
        }
        // 读取 value
        const value = readValue(text, i);
        i = value.next;
        out.push({ key, value: value.text });
        if (startKey === i) {
            // 防止死循环
            break;
        }
    }
    return out;
}

/**
 * 在 `text[start..]` 范围内寻找第一个不在嵌套括号/字符串中的 `ch`。
 */
function findUnnestedChar(text: string, start: number, ch: string): number {
    let depth = 0;
    for (let i = start; i < text.length; i++) {
        const c = text[i];
        if (c === '"' || c === '\'') {
            const quote = c;
            i++;
            while (i < text.length) {
                if (text[i] === '\\' && i + 1 < text.length) {
                    i += 2;
                    continue;
                }
                if (text[i] === quote) {
                    break;
                }
                i++;
            }
            continue;
        }
        if (c === '{' || c === '(' || c === '[') {
            depth++;
        } else if (c === '}' || c === ')' || c === ']') {
            depth--;
        } else if (c === ch && depth === 0) {
            return i;
        }
    }
    return -1;
}

/** 读取一个属性值：字符串、数组、token */
function readValue(text: string, start: number): { text: string; next: number } {
    const c = text[start];
    if (c === '"' || c === '\'') {
        // 字符串字面量
        const quote = c;
        let i = start + 1;
        let buf = '';
        while (i < text.length) {
            const ch = text[i];
            if (ch === '\\' && i + 1 < text.length) {
                buf += text[i + 1];
                i += 2;
                continue;
            }
            if (ch === quote) {
                return { text: buf, next: i + 1 };
            }
            buf += ch;
            i++;
        }
        return { text: buf, next: i };
    }
    if (c === '{') {
        // 数组
        const end = findUnnestedChar(text, start, '}');
        if (end < 0) {
            return { text: text.substring(start), next: text.length };
        }
        return { text: text.substring(start, end + 1), next: end + 1 };
    }
    // 通用 token（枚举/数字/类引用/方法引用）
    let i = start;
    while (i < text.length && /[A-Za-z0-9_.\-]/.test(text[i])) {
        i++;
    }
    return { text: text.substring(start, i), next: i };
}

/**
 * 1-based 行号：返回 `text[pos]` 所在行号
 */
function lineNumberAt(text: string, pos: number): number {
    let line = 1;
    for (let i = 0; i < pos && i < text.length; i++) {
        if (text[i] === '\n') {
            line++;
        }
    }
    return line;
}

/**
 * 推断 HTTP 方法
 * - 注解名直接决定
 * - @RequestMapping 需要解析 method 属性
 */
export function resolveHttpMethod(ann: ParsedAnnotation): HttpMethod | undefined {
    switch (ann.name) {
        case 'GetMapping':
            return 'GET';
        case 'PostMapping':
            return 'POST';
        case 'PutMapping':
            return 'PUT';
        case 'DeleteMapping':
            return 'DELETE';
        case 'PatchMapping':
            return 'PATCH';
        case 'RequestMapping': {
            const m = ann.attributes.find(a => a.key === 'method' || a.key === undefined);
            if (m) {
                const upper = m.value.toUpperCase();
                if (upper.endsWith('.GET')) {
                    return 'GET';
                }
                if (upper.endsWith('.POST')) {
                    return 'POST';
                }
                if (upper.endsWith('.PUT')) {
                    return 'PUT';
                }
                if (upper.endsWith('.DELETE')) {
                    return 'DELETE';
                }
                if (upper.endsWith('.PATCH')) {
                    return 'PATCH';
                }
            }
            return undefined;
        }
        default:
            return undefined;
    }
}

/**
 * 从注解中抽取路径数组
 * - 优先 key 为 `value` 或 `path` 的属性
 * - 如果没有显式 key 的属性（单值注解如 @GetMapping("/xxx")），也视为路径
 * - 支持字符串字面量与字符串数组 `{ "a", "b" }`
 */
export function extractPaths(ann: ParsedAnnotation): string[] {
    // 优先查找 key 为 value 或 path 的属性
    const attr = ann.attributes.find(a => a.key === 'value' || a.key === 'path');
    if (attr) {
        return parseStringList(attr.value);
    }
    // 兜底：查找无显式 key 的属性（单值注解形式）
    const noKeyAttr = ann.attributes.find(a => a.key === undefined);
    if (noKeyAttr) {
        return parseStringList(noKeyAttr.value);
    }
    return [];
}

/**
 * 解析 `path` 字符串或 `{ "a", "b" }` 数组为字符串列表
 */
export function parseStringList(raw: string): string[] {
    const t = raw.trim();
    if (t.length === 0) {
        return [];
    }
    if (t.startsWith('{') && t.endsWith('}')) {
        // 数组形式
        const inner = t.substring(1, t.length - 1);
        return extractQuotedStrings(inner);
    }
    // 单值形式：可能是字符串或路径常量
    if (t.startsWith('"') && t.endsWith('"')) {
        return [unquote(t)];
    }
    return [t];
}

/** 提取 `"x", "y", "z"` 中的所有字符串 */
function extractQuotedStrings(text: string): string[] {
    const out: string[] = [];
    let i = 0;
    const n = text.length;
    while (i < n) {
        const c = text[i];
        if (c === '"' || c === '\'') {
            const quote = c;
            let j = i + 1;
            let buf = '';
            while (j < n) {
                const ch = text[j];
                if (ch === '\\' && j + 1 < n) {
                    buf += text[j + 1];
                    j += 2;
                    continue;
                }
                if (ch === quote) {
                    break;
                }
                buf += ch;
                j++;
            }
            out.push(buf);
            i = j + 1;
        } else {
            i++;
        }
    }
    return out;
}

/** 去掉首尾的引号（仅当匹配时） */
function unquote(s: string): string {
    if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith('\'') && s.endsWith('\''))) {
        return s.substring(1, s.length - 1);
    }
    return s;
}

/**
 * 合并类级路径前缀与方法级路径：
 * - 去掉尾部/头部的 `/`
 * - 保证以 `/` 开头
 * - 多个候选路径时按笛卡尔积组合
 */
export function joinPaths(classPrefix: string | undefined, methodPaths: string[]): string {
    const cls = normalizePrefix(classPrefix);
    if (methodPaths.length === 0) {
        return cls || '/';
    }
    // 取第一个 method 路径作为主路径（兼容多个值时只取首条）
    const m = methodPaths[0] ?? '';
    if (cls.length === 0) {
        return ensureLeadingSlash(m || '/');
    }
    if (m.length === 0) {
        return cls;
    }
    return cls + ensureLeadingSlash(m);
}

/**
 * 规范化前缀：去除尾部 `/`
 */
function normalizePrefix(prefix: string | undefined): string {
    if (!prefix) {
        return '';
    }
    let p = prefix;
    if (p.startsWith('/')) {
        p = p.substring(1);
    }
    if (p.endsWith('/')) {
        p = p.substring(0, p.length - 1);
    }
    return p.length > 0 ? '/' + p : '';
}

/** 确保路径以 `/` 开头 */
function ensureLeadingSlash(p: string): string {
    if (p.length === 0) {
        return '/';
    }
    if (p.startsWith('/')) {
        return p;
    }
    return '/' + p;
}
