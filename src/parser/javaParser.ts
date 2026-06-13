// Java 源文件解析器
// 负责读取 .java 文件并提取其中的 API 接口元数据，输出 ParsedJavaFile
// 仅使用正则匹配实现，无外部 Java 解析依赖

import * as fs from 'fs';

import { ApiEndpoint, ApiParam, ParamIn, ParsedJavaFile } from '../types';
import { collectJavaFiles } from '../utils/fs';
import { findJavadocAbove, findCustomTag, parseJavadoc, stripStringsAndComments } from './commentExtractor';
import {
    extractPaths,
    findAnnotations,
    joinPaths,
    ParsedAnnotation,
    resolveHttpMethod
} from './annotationMatcher';

/**
 * 解析一个 .java 文件，提取其中的 API 接口列表
 * - 若文件不存在或不合法，返回 endpoints 为空的结果
 *
 * @param filePath .java 文件的绝对路径
 */
export function parseFile(filePath: string): ParsedJavaFile {
    let source: string;
    try {
        source = fs.readFileSync(filePath, 'utf8');
    } catch {
        return { filePath, className: '', endpoints: [] };
    }
    return parseSource(filePath, source);
}

/**
 * 解析指定行号所在的方法（1-based）。
 * - 用于编辑器右键「上传当前方法」
 * - 实现：直接扫描源码，找到签名行号 <= lineNumber 中最大者对应的方法
 *
 * @param filePath  .java 文件路径
 * @param lineNumber 1-based 行号（编辑器中光标所在行）
 */
export function parseMethod(filePath: string, lineNumber: number): ApiEndpoint | undefined {
    let source: string;
    try {
        source = fs.readFileSync(filePath, 'utf8');
    } catch {
        return undefined;
    }
    // 1. 在 stripped 视图中扫描方法签名
    const stripped = stripStringsAndComments(source);
    const classInfo = findTopLevelClass(stripped, stripped.split(/\r?\n/));
    if (!classInfo) {
        return undefined;
    }
    // 2. 找到签名行号 <= lineNumber 中最大者
    let target: MethodSpan | undefined;
    for (const m of classInfo.methods) {
        if (m.line <= lineNumber && (!target || m.line > target.line)) {
            target = m;
        }
    }
    if (!target) {
        return undefined;
    }
    // 3. 复用 parseSource 的方法级解析
    const file = parseSource(filePath, source);
    return file.endpoints.find(ep => ep.methodName === target.name) ?? undefined;
}

/**
 * 解析目录下所有 .java 文件
 *
 * @param dirPath 目录绝对路径
 */
export function parseDirectory(dirPath: string): ParsedJavaFile[] {
    const files = collectJavaFiles(dirPath);
    return files.map(f => parseFile(f));
}

/**
 * 内部：从源码字符串中解析出 ParsedJavaFile
 * - 该函数被 `parseFile` 与 `parseSourceAt` 复用
 */
function parseSource(filePath: string, source: string): ParsedJavaFile {
    // 1. 剥离字符串与注释，得到可用于正则匹配的“代码”视图
    const stripped = stripStringsAndComments(source);
    const lines = stripped.split(/\r?\n/);
    // 2. 找到顶层类/接口/枚举的声明
    const classInfo = findTopLevelClass(stripped, lines);
    if (!classInfo) {
        return { filePath, className: '', endpoints: [] };
    }
    // 3. 类级别注解：向上寻找 @RequestMapping
    const classAnnotations = findAnnotationsAbove(source, stripped, classInfo.declLine);
    const classRequestMapping = classAnnotations.find(a => shortName(a.name) === 'RequestMapping');
    const classPrefix = classRequestMapping ? extractPaths(classRequestMapping) : [];
    const classPathPrefix = classPrefix.length > 0 ? classPrefix[0] : undefined;
    // 4. 类级 JavaDoc（使用原始源码，因为 stripped 后 JavaDoc 被替换为空格）
    const classJavadoc = findJavadocAbove(source, classInfo.declLine);
    const classCommentParsed = classJavadoc ? parseJavadoc(classJavadoc.body) : undefined;
    const classComment = classCommentParsed ? (classCommentParsed.summary + (classCommentParsed.description ? '\n' + classCommentParsed.description : '')) : undefined;
    const classCommentFirstLine = classCommentParsed?.summary || undefined;
    // 5. 类级 Swagger @Api
    const classApi = classAnnotations.find(a => shortName(a.name) === 'Api');
    const swaggerApiName = classApi ? (classApi.attributes.find(a => a.key === 'tags')?.value || classApi.attributes.find(a => a.key === 'value')?.value) : undefined;
    // 6. 解析类内每个方法
    const endpoints: ApiEndpoint[] = [];
    for (const method of classInfo.methods) {
        const ep = parseMethodFromSource(stripped, source, classInfo.className, classPathPrefix, method, classComment);
        if (ep) {
            // 7. 填充分类（tags）：@Api > @ApiOperation
            if (swaggerApiName) {
                const cleaned = swaggerApiName.replace(/^\[|\]$/g, '').replace(/"/g, '').trim();
                if (cleaned) {
                    ep.tags = [cleaned];
                }
            }
            // 8. 解析 module / classDirName
            const classCommentText = classJavadoc?.body;
            ep.classDirName = resolveClassDirName(classCommentText, swaggerApiName);
            ep.moduleName = resolveModuleName(filePath);
            endpoints.push(ep);
        }
    }
    return {
        filePath,
        className: classInfo.className,
        classPathPrefix,
        endpoints,
        classComment,
        classCommentFirstLine
    };
}

/** 取注解短名（去掉包路径） */
function shortName(name: string): string {
    const idx = name.lastIndexOf('.');
    return idx >= 0 ? name.substring(idx + 1) : name;
}

/** 转义正则元字符 */
function escapeRegExp(s: string): string {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * 在源码中查找顶层类/接口/枚举的声明。
 * 简化策略：扫描 `^\s*(public\s+)?(abstract\s+|final\s+)?(class|interface|enum)\s+Name`
 * 同时记录其大括号范围与内部方法声明。
 */
interface ClassInfo {
    className: string;
    declLine: number;       // 1-based
    bodyStart: number;      // { 的 0-based 索引
    bodyEnd: number;        // 匹配的 } 的 0-based 索引
    methods: MethodSpan[];
}

/** 方法在大括号内的位置信息 */
interface MethodSpan {
    name: string;
    startIdx: number;       // 方法签名起点（含修饰符/注解）的 0-based 索引
    declIdx: number;        // 包含注解的完整声明起点（向上回溯若干行后）
    openParenIdx: number;   // `(` 索引
    closeParenIdx: number;  // `)` 索引
    bodyStart: number;      // `{` of method body
    bodyEnd: number;        // `}` of method body
    returnType: string;     // 含泛型
    line: number;           // 1-based 签名所在行
}

function findTopLevelClass(text: string, lines: string[]): ClassInfo | undefined {
    // 匹配顶层类/接口/枚举
    // - 不匹配内部类
    // - 修饰符：public/protected/private、static、abstract、final
    const classRe = /^[ \t]*((?:public|protected|private|static|abstract|final)\s+)*(class|interface|enum)\s+([A-Za-z_][A-Za-z0-9_]*)/gm;
    let m: RegExpExecArray | null;
    while ((m = classRe.exec(text)) !== null) {
        const declLine = lineNumberAt(text, m.index);
        // 找到紧跟其后的 `{`
        const openBraceIdx = findNextChar(text, m.index + m[0].length, '{');
        if (openBraceIdx < 0) {
            continue;
        }
        // 找到匹配的 `}`
        const closeBraceIdx = findMatchingBrace(text, openBraceIdx);
        if (closeBraceIdx < 0) {
            continue;
        }
        // 在 [openBraceIdx, closeBraceIdx] 之间查找方法
        const methods = findMethodsInside(text, openBraceIdx, closeBraceIdx);
        return {
            className: m[3],
            declLine,
            bodyStart: openBraceIdx,
            bodyEnd: closeBraceIdx,
            methods
        };
    }
    // 抑制未使用变量
    void lines;
    return undefined;
}

/** 寻找 fromIdx 之后首个未在字符串/注释中的 `target` */
function findNextChar(text: string, fromIdx: number, target: string): number {
    for (let i = fromIdx; i < text.length; i++) {
        const c = text[i];
        if (c === '"' || c === '\'') {
            i = skipStringLiteral(text, i);
            continue;
        }
        if (c === '/' && text[i + 1] === '/') {
            while (i < text.length && text[i] !== '\n') {
                i++;
            }
            continue;
        }
        if (c === '/' && text[i + 1] === '*') {
            i += 2;
            while (i < text.length - 1 && !(text[i] === '*' && text[i + 1] === '/')) {
                i++;
            }
            i++;
            continue;
        }
        if (c === target) {
            return i;
        }
    }
    return -1;
}

/** 跳过一段字符串字面量（从开引号开始），返回闭引号后的索引 */
function skipStringLiteral(text: string, openIdx: number): number {
    const quote = text[openIdx];
    let i = openIdx + 1;
    while (i < text.length) {
        if (text[i] === '\\' && i + 1 < text.length) {
            i += 2;
            continue;
        }
        if (text[i] === quote) {
            return i + 1;
        }
        i++;
    }
    return i;
}

/** 匹配 text[openIdx] 处的 `{` 所对应的 `}` */
function findMatchingBrace(text: string, openIdx: number): number {
    let depth = 0;
    for (let i = openIdx; i < text.length; i++) {
        const c = text[i];
        if (c === '"' || c === '\'') {
            i = skipStringLiteral(text, i) - 1;
            continue;
        }
        if (c === '/' && text[i + 1] === '/') {
            while (i < text.length && text[i] !== '\n') {
                i++;
            }
            continue;
        }
        if (c === '/' && text[i + 1] === '*') {
            i += 2;
            while (i < text.length - 1 && !(text[i] === '*' && text[i + 1] === '/')) {
                i++;
            }
            i++;
            continue;
        }
        if (c === '{') {
            depth++;
        } else if (c === '}') {
            depth--;
            if (depth === 0) {
                return i;
            }
        }
    }
    return -1;
}

/**
 * 在类体范围内查找所有方法声明（含注解）。
 * 一个“方法”需满足：
 *   - 顶层（即不在任何更深的 { ... } 内；类体内允许嵌套类/匿名类）
 *   - 形式：修饰符 + 返回类型 + 方法名 + (
 *   - 紧跟 ( ... )，再跟随 { 或 ;
 */
function findMethodsInside(text: string, classOpen: number, classClose: number): MethodSpan[] {
    const out: MethodSpan[] = [];
    // 在类体内逐行扫描
    let i = classOpen + 1;
    while (i < classClose) {
        // 跳过空白
        while (i < classClose && /[ \t\r\n]/.test(text[i])) {
            i++;
        }
        if (i >= classClose) {
            break;
        }
        // 跳过 JavaDoc 注释
        if (text[i] === '/' && text[i + 1] === '*' && text[i + 2] === '*') {
            // 找匹配的 */
            const closeStar = text.indexOf('*/', i + 3);
            i = closeStar >= 0 && closeStar < classClose ? closeStar + 2 : i + 3;
            continue;
        }
        // 跳过行注释
        if (text[i] === '/' && text[i + 1] === '/') {
            while (i < classClose && text[i] !== '\n') {
                i++;
            }
            continue;
        }
        // 跳过注解行（含跨行注解到匹配的 `)`）
        if (text[i] === '@') {
            // 移动到标识符末尾
            i++;
            while (i < classClose && /[A-Za-z0-9_.]/.test(text[i])) {
                i++;
            }
            // 跳过空白
            while (i < classClose && /[ \t\r\n]/.test(text[i])) {
                i++;
            }
            // 是否有 `(...)` 参数列表
            if (text[i] === '(') {
                const close = findMatchingParen(text, i);
                if (close < 0) {
                    break;
                }
                i = close + 1;
            }
            // 继续
            continue;
        }
        // 跳过 `static { ... }` 静态块
        if (text[i] === '{') {
            const close = findMatchingBrace(text, i);
            i = close + 1;
            continue;
        }
        // 尝试匹配方法签名：修饰符 + 返回类型 + 标识符 + (
        // 先记录当前行首，再扫描到 `(` 之前的最后标识符
        const declIdx = startOfLine(text, i);
        if (declIdx >= classClose) {
            break;
        }
        // 扫描到 `(` 之前的位置（不跨注释/字符串）
        const openParen = findNextChar(text, i, '(');
        if (openParen < 0 || openParen > classClose) {
            // 没有 `(`，当作字段/嵌套类声明，跳过该行
            const nl = text.indexOf('\n', i);
            i = nl < 0 || nl > classClose ? classClose : nl + 1;
            continue;
        }
        // 抽取签名文本（从行首到 `(`）
        const sig = text.substring(declIdx, openParen);
        // 解析方法名与返回类型
        const parsed = parseMethodSignature(sig);
        if (!parsed) {
            const nl = text.indexOf('\n', i);
            i = nl < 0 || nl > classClose ? classClose : nl + 1;
            continue;
        }
        const closeParen = findMatchingParen(text, openParen);
        if (closeParen < 0) {
            break;
        }
        // 方法体起点：跳到 closeParen 之后的 `{` 或 `;`（接口/抽象方法）
        let j = closeParen + 1;
        while (j < classClose && /[ \t\r\n]/.test(text[j])) {
            j++;
        }
        let bodyStart = -1;
        let bodyEnd = -1;
        if (text[j] === '{') {
            bodyStart = j;
            bodyEnd = findMatchingBrace(text, j);
            i = bodyEnd >= 0 ? bodyEnd + 1 : j + 1;
        } else {
            i = j;
        }
        out.push({
            name: parsed.name,
            startIdx: declIdx,
            declIdx,
            openParenIdx: openParen,
            closeParenIdx: closeParen,
            bodyStart,
            bodyEnd,
            returnType: parsed.returnType,
            line: lineNumberAt(text, declIdx)
        });
    }
    return out;
}

/**
 * 找到 text 中位置 i 所在行的行首索引
 */
function startOfLine(text: string, i: number): number {
    let start = i;
    while (start > 0 && text[start - 1] !== '\n') {
        start--;
    }
    return start;
}

/** 匹配括号 */
function findMatchingParen(text: string, openIdx: number): number {
    let depth = 0;
    for (let i = openIdx; i < text.length; i++) {
        const c = text[i];
        if (c === '"' || c === '\'') {
            i = skipStringLiteral(text, i) - 1;
            continue;
        }
        if (c === '/' && text[i + 1] === '/') {
            while (i < text.length && text[i] !== '\n') {
                i++;
            }
            continue;
        }
        if (c === '/' && text[i + 1] === '*') {
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

/** 解析方法签名片段 `修饰符 返回类型 方法名`，不含括号 */
function parseMethodSignature(sig: string): { name: string; returnType: string } | undefined {
    // 1. 去掉末尾 `(` 之前的内容
    const s = sig.trim();
    // 2. 抽取最后一个标识符（方法名）
    const tokens = tokenizeSignature(s);
    if (tokens.length < 2) {
        return undefined;
    }
    const name = tokens[tokens.length - 1];
    if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) {
        return undefined;
    }
    // 3. 返回类型是除最后一个以外的所有 token，但需过滤掉访问修饰符
    const returnTypeTokens = tokens.slice(0, tokens.length - 1).filter(t => !isAccessModifier(t));
    const returnType = returnTypeTokens.join(' ').trim();
    return { name, returnType };
}

/** 判断一个 token 是否为 Java 访问修饰符或其他非类型修饰符 */
function isAccessModifier(token: string): boolean {
    return token === 'public' || token === 'protected' || token === 'private' ||
        token === 'static' || token === 'abstract' || token === 'final' ||
        token === 'synchronized' || token === 'native' || token === 'strictfp' ||
        token === 'default';
}

/** 简易分词：按空白与 `,` 拆，并合并 `<...>` 为一个 token */
function tokenizeSignature(s: string): string[] {
    const out: string[] = [];
    let buf = '';
    let angleDepth = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === '<') {
            angleDepth++;
            buf += c;
            continue;
        }
        if (c === '>') {
            angleDepth = Math.max(0, angleDepth - 1);
            buf += c;
            continue;
        }
        if (angleDepth === 0 && /[\s,()]/.test(c)) {
            if (buf.length > 0) {
                out.push(buf);
                buf = '';
            }
            continue;
        }
        buf += c;
    }
    if (buf.length > 0) {
        out.push(buf);
    }
    return out;
}

/**
 * 在源码中，从 startLine 向上回溯，抽取所有注解。
 * - 跳过 JavaDoc 注释（从 "星号斜线" 一直回溯到 "斜线星号星号"）
 * - 跳过真正的空行
 * - 遇到真正的代码行（非注解延续、非空、非 JavaDoc）即停止
 *
 * 注意：startLine 是 1-based 的目标行（类/方法签名所在行），
 *       本函数从目标行的上一行开始向上扫描。
 *
 * 使用原始源码来收集注解文本（因为 stripped 后字符串参数被替换为空格），
 * 但使用 stripped 视图来判断行类型（@ 开头、延续行等）。
 */
function findAnnotationsAbove(
    original: string,
    stripped: string,
    startLine: number
): ParsedAnnotation[] {
    const origLines = original.split(/\r?\n/);
    const strippedLines = stripped.split(/\r?\n/);
    const start = Math.max(1, Math.min(startLine, origLines.length));
    const block: string[] = [];
    // 状态：false=不在 JavaDoc 内；true=在 JavaDoc 内（遇到星号斜线后切到 true）
    let inJavadoc = false;
    // 从 startLine 之上一行开始 (0-indexed: start - 2)
    for (let i = start - 2; i >= 0; i--) {
        const origTrimmed = origLines[i].trim();
        const strippedTrimmed = strippedLines[i]?.trim() ?? '';
        if (inJavadoc) {
            // 在 JavaDoc 内继续向上，找到 斜线星号星号 才退出
            block.unshift(origLines[i] ?? '');
            if (origTrimmed.startsWith('/' + '**')) {
                inJavadoc = false;
            }
            continue;
        }
        if (origTrimmed === '') {
            // 真正的空行不打断，停止收集
            break;
        }
        if (origTrimmed.endsWith('*' + '/')) {
            // 进入 JavaDoc
            block.unshift(origLines[i] ?? '');
            inJavadoc = true;
            continue;
        }
        // 注解行：必以 @ 开头
        if (strippedTrimmed.startsWith('@')) {
            block.unshift(origLines[i] ?? '');
            continue;
        }
        // 多行注解的延续行：以 `)` `,` `(` `;` `=` 等结尾或出现在注解括号内
        if (isAnnotationContinuation(strippedTrimmed)) {
            block.unshift(origLines[i] ?? '');
            continue;
        }
        // 其它行（如上一段代码）：停止
        break;
    }
    if (block.length === 0) {
        return [];
    }
    return findAnnotations(block.join('\n'));
}

/**
 * 判断是否为注解延续行
 * - 上一行是 `@xxx(` 起始的跨行注解
 * - 该行可能为属性 `key = value`、`, value`、单独的 `)` 等
 */
function isAnnotationContinuation(trimmed: string): boolean {
    if (trimmed.length === 0) {
        return false;
    }
    // 不应是 JavaDoc 注释行
    if (trimmed.startsWith('*')) {
        return false;
    }
    // 常见模式：value = "..."，method = RequestMethod.POST
    if (/^"?[A-Za-z_][A-Za-z0-9_]*"?\s*=/.test(trimmed)) {
        return true;
    }
    // 以 `,` `(` `)` `[` `]` `;` `{` `}` 结尾
    if (/[,(;{})\]]$/.test(trimmed)) {
        return true;
    }
    // 数组 `{ "a", "b" }` 整行
    if (trimmed.startsWith('{') || trimmed.endsWith('}')) {
        return true;
    }
    return false;
}

/**
 * 从方法片段中构建 ApiEndpoint
 */
function parseMethodFromSource(
    stripped: string,
    originalSource: string,
    className: string,
    classPathPrefix: string | undefined,
    method: MethodSpan,
    classComment: string | undefined
): ApiEndpoint | undefined {
    void classComment;
    // 1. 取方法签名之上的注解（需原始源码识别 JavaDoc 边界）
    const annotations = findAnnotationsAbove(originalSource, stripped, method.line);
    // 2. 找出 HTTP 方法注解
    const httpAnn = annotations.find(a => {
        const n = shortName(a.name);
        return n === 'GetMapping' || n === 'PostMapping' || n === 'PutMapping' ||
            n === 'DeleteMapping' || n === 'PatchMapping' || n === 'RequestMapping';
    });
    if (!httpAnn) {
        return undefined;
    }
    const method_ = resolveHttpMethod(httpAnn);
    if (!method_) {
        return undefined;
    }
    // 3. 解析路径
    const methodPaths = extractPaths(httpAnn);
    const path = joinPaths(classPathPrefix, methodPaths);
    // 4. 解析参数列表
    const paramsText = stripped.substring(method.openParenIdx + 1, method.closeParenIdx);
    const parameters = parseParameterList(paramsText, stripped, method.openParenIdx);
    // 5. @ApiOperation
    const opAnn = annotations.find(a => shortName(a.name) === 'ApiOperation');
    const opValue = opAnn ? (opAnn.attributes.find(a => a.key === 'value' || a.key === undefined)?.value) : undefined;
    // 6. 方法 JavaDoc
    const jd = findJavadocAbove(originalSource, method.line);
    const parsed = jd ? parseJavadoc(jd.body) : undefined;
    const summary = (opValue ? unquoteSmart(opValue) : parsed?.summary) || undefined;
    const description = parsed?.description || undefined;
    // 7. 关联 @param 到参数
    if (parsed) {
        for (const p of parameters) {
            const match = parsed.params.find(pp => pp.name === p.name);
            if (match && match.description) {
                p.description = match.description;
            }
        }
    }
    // 8. requestBodyType
    const bodyParam = parameters.find(p => p.isBody);
    const endpoint: ApiEndpoint = {
        method: method_,
        path,
        summary,
        description,
        className,
        methodName: method.name,
        parameters,
        requestBodyType: bodyParam?.type,
        returnType: method.returnType
    };
    return endpoint;
}

/** 解析 Java 方法的形参列表 */
function parseParameterList(paramsText: string, fullText: string, parenIdx: number): ApiParam[] {
    const out: ApiParam[] = [];
    // 1. 在形参文本中按顶层逗号切分（需考虑泛型、注解、嵌套括号）
    const parts = splitTopLevelCommas(paramsText);
    for (const part of parts) {
        const trimmed = part.trim();
        if (trimmed.length === 0) {
            continue;
        }
        const param = parseSingleParameter(trimmed, fullText, parenIdx);
        if (param) {
            out.push(param);
        }
    }
    return out;
}

/** 按顶层逗号切分文本（括号/泛型内的逗号不切） */
function splitTopLevelCommas(text: string): string[] {
    const out: string[] = [];
    let depth = 0;
    let angleDepth = 0;
    let buf = '';
    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (c === '"' || c === '\'') {
            const quote = c;
            buf += c;
            i++;
            while (i < text.length) {
                buf += text[i];
                if (text[i] === '\\' && i + 1 < text.length) {
                    buf += text[i + 1];
                    i += 2;
                    continue;
                }
                if (text[i] === quote) {
                    i++;
                    break;
                }
                i++;
            }
            continue;
        }
        if (c === '(' || c === '[' || c === '{') {
            depth++;
            buf += c;
            continue;
        }
        if (c === ')' || c === ']' || c === '}') {
            depth--;
            buf += c;
            continue;
        }
        if (c === '<') {
            angleDepth++;
            buf += c;
            continue;
        }
        if (c === '>') {
            angleDepth = Math.max(0, angleDepth - 1);
            buf += c;
            continue;
        }
        if (c === ',' && depth === 0 && angleDepth === 0) {
            out.push(buf);
            buf = '';
            continue;
        }
        buf += c;
    }
    if (buf.length > 0) {
        out.push(buf);
    }
    return out;
}

/** 解析单个形如 `@Anno(...) Type name` 或 `final Type name` 的参数 */
function parseSingleParameter(text: string, _fullText: string, _parenIdx: number): ApiParam | undefined {
    void _fullText;
    void _parenIdx;
    // 1. 抽取注解块（可能跨多个 @xxx(...)）
    let i = 0;
    const annotations: ParsedAnnotation[] = [];
    while (i < text.length) {
        // 跳过空白
        while (i < text.length && /\s/.test(text[i])) {
            i++;
        }
        if (text[i] !== '@') {
            break;
        }
        const before = i;
        const anns = findAnnotations(text.substring(before));
        if (anns.length === 0) {
            break;
        }
        // 取第一个（理论上单个参数前可能有多个注解）
        const ann = anns[0];
        // 计算其在 text 中的位置
        const annRaw = ann.raw;
        i = before + annRaw.length;
        annotations.push(ann);
    }
    // 2. 跳过 `final` 等修饰符
    while (i < text.length) {
        // 跳过空白
        while (i < text.length && /\s/.test(text[i])) {
            i++;
        }
        if (text.substring(i).startsWith('final')) {
            i += 'final'.length;
            continue;
        }
        break;
    }
    // 3. 读取类型（可能含泛型 `Map<String, Integer>` 与数组 `[]`）
    const typeStart = i;
    let depth = 0;
    let angleDepth = 0;
    while (i < text.length) {
        const c = text[i];
        if (c === '<' || c === '>' || c === '(' || c === ')' || c === '[' || c === ']') {
            if (c === '<') {
                angleDepth++;
            } else if (c === '>') {
                angleDepth = Math.max(0, angleDepth - 1);
            } else if (c === '(' || c === '[') {
                depth++;
            } else if (c === ')' || c === ']') {
                depth = Math.max(0, depth - 1);
            }
            i++;
            continue;
        }
        if (/\s/.test(c) && angleDepth === 0 && depth === 0) {
            break;
        }
        i++;
    }
    const typeRaw = text.substring(typeStart, i).trim();
    const type = stripGenerics(typeRaw);
    if (!type) {
        return undefined;
    }
    // 4. 跳过空白
    while (i < text.length && /\s/.test(text[i])) {
        i++;
    }
    // 5. 读取参数名
    const nameStart = i;
    while (i < text.length && /[A-Za-z0-9_]/.test(text[i])) {
        i++;
    }
    const name = text.substring(nameStart, i).trim();
    if (!name) {
        return undefined;
    }
    // 6. 推断 in 位置与 required、defaultValue
    const requestParam = annotations.find(a => shortName(a.name) === 'RequestParam');
    const pathVar = annotations.find(a => shortName(a.name) === 'PathVariable');
    const requestBody = annotations.find(a => shortName(a.name) === 'RequestBody');
    const requestHeader = annotations.find(a => shortName(a.name) === 'RequestHeader');
    let inLoc: ParamIn = 'query';
    let required = true;
    let defaultValue: string | undefined;
    let isBody = false;
    if (requestBody) {
        inLoc = 'body';
        isBody = true;
        required = !requestBody.attributes.some(a => a.key === 'required' && a.value === 'false');
    } else if (pathVar) {
        inLoc = 'path';
        required = !pathVar.attributes.some(a => a.key === 'required' && a.value === 'false');
    } else if (requestHeader) {
        inLoc = 'header';
        required = !requestHeader.attributes.some(a => a.key === 'required' && a.value === 'false');
        // 名字可来自 value
        const headerName = requestHeader.attributes.find(a => a.key === 'value' || a.key === 'name')?.value;
        if (headerName) {
            return {
                name: unquoteSmart(headerName),
                type,
                required,
                in: inLoc
            };
        }
    } else if (requestParam) {
        // name 可能来自 value/name
        const paramNameAttr = requestParam.attributes.find(a => a.key === 'value' || a.key === 'name')?.value;
        const paramName = paramNameAttr ? unquoteSmart(paramNameAttr) : name;
        const dv = requestParam.attributes.find(a => a.key === 'defaultValue')?.value;
        defaultValue = dv ? unquoteSmart(dv) : undefined;
        required = !requestParam.attributes.some(a => a.key === 'required' && a.value === 'false');
        // 如果 defaultValue 存在则视为非必填
        if (defaultValue !== undefined) {
            required = false;
        }
        return {
            name: paramName,
            type,
            required,
            defaultValue,
            in: 'query'
        };
    } else {
        // 无注解
        // - 简单类型默认 query
        // - MultipartFile 默认 query
        // - POJO 默认 body（更友好的猜测）
        if (isLikelyBodyType(type)) {
            inLoc = 'body';
            isBody = true;
        } else {
            inLoc = 'query';
        }
    }
    return {
        name,
        type,
        required,
        in: inLoc,
        isBody,
        defaultValue
    };
}

/** 去除类型泛型，例如 `List<String>` -> `List`、`Map<String, Integer>` -> `Map` */
function stripGenerics(t: string): string {
    const idx = t.indexOf('<');
    if (idx < 0) {
        return t.trim();
    }
    return t.substring(0, idx).trim();
}

/** 粗略判断：参数类型是否更像请求体（POJO / 自定义类） */
function isLikelyBodyType(type: string): boolean {
    if (!type) {
        return false;
    }
    const lower = type.toLowerCase();
    if (lower === 'string' || lower === 'integer' || lower === 'int' || lower === 'long' || lower === 'short' || lower === 'byte' ||
        lower === 'float' || lower === 'double' || lower === 'boolean' || lower === 'char' || lower === 'bigdecimal' || lower === 'biginteger' ||
        lower === 'date' || lower === 'localdate' || lower === 'localdatetime' || lower === 'localtime' || lower === 'instant' || lower === 'uuid' ||
        lower === 'multipartfile' || lower === 'httpheaders' || lower === 'httpentity' || lower === 'responseentity' || lower === 'servletrequest' ||
        lower === 'servletresponse' || lower === 'httpservletrequest' || lower === 'httpservletresponse' || lower === 'bindingresult' ||
        lower === 'model' || lower === 'modelmap' || lower === 'map' || lower === 'list' || lower === 'set' || lower === 'collection' ||
        lower === 'object' || lower === 'void' || lower === 'principal' || lower === 'authentication' || lower === 'pageable' || lower === 'page') {
        return false;
    }
    return true;
}

/** 去掉首尾的 `"` 或 `'` */
function unquoteSmart(s: string): string {
    const t = s.trim();
    if (t.length >= 2 && ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith('\'') && t.endsWith('\'')))) {
        return t.substring(1, t.length - 1);
    }
    return t;
}

/**
 * 解析类目录名（用于 Apipost 目录层级）
 * 优先级：@module > @menu > @Api（Swagger）> 类注释第一行
 */
export function resolveClassDirName(classComment: string | undefined, swaggerApi: string | undefined): string | undefined {
    if (classComment) {
        const moduleTag = findCustomTag(classComment, 'module');
        if (moduleTag) {
            return moduleTag;
        }
        const menuTag = findCustomTag(classComment, 'menu');
        if (menuTag) {
            return menuTag;
        }
        // 兜底：取 JavaDoc 第一行
        const firstLine = classComment.split(/\r?\n/)[0]?.replace(/^\s*\*\s?/, '').trim();
        if (firstLine) {
            return firstLine;
        }
    }
    if (swaggerApi) {
        const t = swaggerApi.replace(/^\[|\]$/g, '').split(',')[0]?.trim().replace(/"/g, '');
        if (t) {
            return t;
        }
    }
    return undefined;
}

/**
 * 从源文件路径解析 module 名
 * - 优先取 `src/main/java/` 之后的第一个目录
 * - 否则取 `src/` 之后
 * - 否则取最末层目录
 */
export function resolveModuleName(filePath: string): string | undefined {
    if (!filePath) {
        return undefined;
    }
    const norm = filePath.replace(/\\/g, '/');
    const segments = norm.split('/').filter(Boolean);
    // 1. 找 `src/main/java/`
    const idx1 = segments.lastIndexOf('java');
    if (idx1 > 0 && segments[idx1 - 1] === 'main' && segments[idx1 - 2] === 'src') {
        // 在 java 之后取首个非空目录
        const after = segments[idx1 + 1];
        if (after) {
            return after;
        }
    }
    // 2. 找 `src/`
    const idx2 = segments.lastIndexOf('src');
    if (idx2 >= 0 && idx2 < segments.length - 1) {
        const after = segments[idx2 + 1];
        if (after && after !== 'main' && after !== 'java') {
            return after;
        }
        // 如果 src 之后是 main/java，尝试 main 之后再下一层
        if (after === 'main' && segments[idx2 + 2] === 'java') {
            const next = segments[idx2 + 3];
            if (next) {
                return next;
            }
        }
    }
    // 3. 取上一级目录
    if (segments.length >= 2) {
        return segments[segments.length - 2];
    }
    return undefined;
}

/**
 * 内部工具命名空间，供测试模块使用
 */
export const __internal = {
    escapeRegExp,
    lineNumberAt,
    shortName,
    stripGenerics,
    isLikelyBodyType,
    tokenizeSignature
};

/** 计算源码中 pos 处的 1-based 行号（暴露给测试） */
function lineNumberAt(text: string, pos: number): number {
    let line = 1;
    for (let i = 0; i < pos && i < text.length; i++) {
        if (text[i] === '\n') {
            line++;
        }
    }
    return line;
}

/** 由原始 .java 字符串直接解析（便于测试） */
export function parseSourceString(filePath: string, source: string): ParsedJavaFile {
    return parseSource(filePath, source);
}

/** 取 path 段的工具（暴露给测试） */
export const __pathUtils = {
    joinPaths,
    extractPaths,
    resolveHttpMethod
};
