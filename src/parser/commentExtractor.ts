// JavaDoc 注释抽取工具
// 提供从 Java 源文件中抽取类/方法级 JavaDoc 注释以及将其解析为摘要、描述、@param 等结构的能力

/**
 * 表示解析后的 JavaDoc 注释
 */
export interface ExtractedComment {
    /** 原始注释正文（已去除 `*` 行前缀与首尾空行） */
    raw: string;
    /** 摘要：第一段非空文本 */
    summary: string;
    /** 描述：summary 之后的所有剩余正文（已去除空行） */
    description: string;
    /** 形如 `@param xxx 描述` 的参数说明，按出现顺序排列 */
    params: CommentParam[];
    /** 形如 `@return xxx` 的返回值说明 */
    returnDesc?: string;
}

/** @param 标签解析结果 */
export interface CommentParam {
    /** 参数名（不含 @param 前缀） */
    name: string;
    /** 描述文本（多行已合并为单行） */
    description: string;
}

// 匹配一个 JavaDoc 块：以 /** 开头、以 */ 结束（不区分单行/多行）
const JAVADOC_BLOCK = /\/\*\*([\s\S]*?)\*\//g;

/** 匹配单行 `//` 注释，在剥离字符串/块注释后用 */
const LINE_COMMENT = /\/\/.*$/gm;

/** 匹配多行 `/* ... *\/` 块注释（非 JavaDoc） */
const BLOCK_COMMENT = /\/\*[\s\S]*?\*\//g;

/**
 * 在指定源文本中，定位从 `fromLine`（含）开始向上回溯，找到与该行关联的 JavaDoc 注释块。
 * 空白行与其它注解行会被跳过；遇到非 JavaDoc 内容即停止。
 *
 * @param source 完整源文件
 * @param fromLine 起始行号（1-based，从该行向上回溯查找）
 * @returns 找到则返回匹配区间 `{ start, end }`（均为 1-based 闭区间），否则返回 `undefined`
 */
export function findJavadocAbove(source: string, fromLine: number): { start: number; end: number; body: string } | undefined {
    // 1. 将全文拆为行（保留 1-based 索引）
    const lines = source.split(/\r?\n/);
    if (lines.length === 0) {
        return undefined;
    }
    // 2. 从 fromLine 之上一行开始向上逐行扫描
    //    - 行号合法性保护
    const start = Math.max(1, Math.min(fromLine, lines.length));
    // 3. 反向收集属于同一段 JavaDoc 的行
    const collected: string[] = [];
    // 从 fromLine 的上一行开始 (0-indexed: start - 2)
    for (let i = start - 2; i >= 0; i--) {
        const trimmed = lines[i].trim();
        if (trimmed.endsWith('*/')) {
            // 可能是 JavaDoc 或块注释的结尾
            collected.unshift(lines[i]);
            // 继续向上直到遇到 `/**`
            let j = i - 1;
            for (; j >= 0; j--) {
                collected.unshift(lines[j]);
                if (lines[j].trim().startsWith('/**')) {
                    // 必须是 JavaDoc 注释（第二字符为 `*`）
                    break;
                }
                // 如果中途碰到普通代码行则放弃
                if (!isCommentContinuation(lines[j])) {
                    collected.length = 0;
                    break;
                }
            }
            if (collected.length > 0 && collected[0].trim().startsWith('/**')) {
                // 4. 确认整段都被收集，且内部不夹杂注解或代码
                const startLine = i - (collected.length - 1) + 1; // 1-based
                const endLine = i + 1;                              // 1-based
                return {
                    start: startLine,
                    end: endLine,
                    body: collected.join('\n')
                };
            }
            collected.length = 0;
            continue;
        }
        // 空白行 / 注解行可以跳过
        if (trimmed === '' || trimmed.startsWith('@')) {
            continue;
        }
        // 其它代码行：停止扫描
        break;
    }
    return undefined;
}

/**
 * 判断一行内容是否属于“注释延续行”，用于多行 JavaDoc 回溯扫描。
 * - 以 `*` 开头（被剥离前缀 `*`）
 * - 仅包含 `*`、`/`、空白
 */
function isCommentContinuation(line: string): boolean {
    const t = line.trim();
    return t === '*' || t.startsWith('* ') || t === '/*' || t === '/**' || t.endsWith('*/');
}

/**
 * 从 JavaDoc 原始文本中提取出 `ExtractedComment` 结构
 * - 自动合并多行
 * - 自动识别 `@param name description`
 * - 自动识别 `@return description`
 */
export function parseJavadoc(raw: string): ExtractedComment {
    // 1. 去掉首尾的 `/**` 与 `*/`
    let body = raw.trim();
    if (body.startsWith('/**')) {
        body = body.substring(3);
    }
    if (body.endsWith('*/')) {
        body = body.substring(0, body.length - 2);
    }
    // 2. 去掉每行开头的 ` * `、`  *`、单行 `*`
    const cleanedLines = body
        .split(/\r?\n/)
        .map(line => line.replace(/^\s*\*\s?/, ''));
    // 3. 逐行处理：识别 @param / @return 标签，支持多行续行
    //    注意：不能按段落合并后再提取标签，否则多个连续 @param 会被合并为一个段落
    const textParagraphs: string[] = [];
    const params: CommentParam[] = [];
    let returnDesc: string | undefined;
    let textBuffer: string[] = [];
    // 记录上一个标签类型，用于多行续行归属
    let lastTagType: 'param' | 'return' | null = null;

    for (const line of cleanedLines) {
        const trimmed = line.trim();
        if (trimmed === '') {
            // 空行：结束当前文本段落
            if (textBuffer.length > 0) {
                textParagraphs.push(textBuffer.join(' ').trim());
                textBuffer = [];
            }
            lastTagType = null;
            continue;
        }
        if (trimmed.startsWith('@param')) {
            // 先 flush 文本缓冲
            if (textBuffer.length > 0) {
                textParagraphs.push(textBuffer.join(' ').trim());
                textBuffer = [];
            }
            // 解析 @param name description
            const stripped = trimmed.replace(/^@param\s+/, '').trim();
            const spaceIdx = stripped.search(/\s/);
            if (spaceIdx > 0) {
                params.push({
                    name: stripped.substring(0, spaceIdx).trim(),
                    description: stripped.substring(spaceIdx + 1).trim()
                });
            } else if (stripped.length > 0) {
                params.push({ name: stripped, description: '' });
            }
            lastTagType = 'param';
        } else if (trimmed.startsWith('@return')) {
            // 先 flush 文本缓冲
            if (textBuffer.length > 0) {
                textParagraphs.push(textBuffer.join(' ').trim());
                textBuffer = [];
            }
            returnDesc = trimmed.replace(/^@return\s*/, '').trim();
            lastTagType = 'return';
        } else if (lastTagType === 'param' && params.length > 0) {
            // 多行 @param 描述的续行，追加到上一个参数的 description
            params[params.length - 1].description += ' ' + trimmed;
        } else if (lastTagType === 'return' && returnDesc !== undefined) {
            // 多行 @return 描述的续行
            returnDesc += ' ' + trimmed;
        } else {
            // 普通文本行
            textBuffer.push(trimmed);
            lastTagType = null;
        }
    }
    // flush 剩余文本缓冲
    if (textBuffer.length > 0) {
        textParagraphs.push(textBuffer.join(' ').trim());
    }
    // 4. summary = 首段非空文本；description = 剩余正文
    const summary = textParagraphs.shift() ?? '';
    const description = textParagraphs.join('\n').trim();
    return {
        raw,
        summary,
        description,
        params,
        returnDesc
    };
}

/**
 * 抽取整个源文件中所有 JavaDoc 块的位置（不解析其内容）。
 * 用于在无法定位具体行号时扫描所有块。
 */
export function findAllJavadocs(source: string): { start: number; end: number; body: string }[] {
    const out: { start: number; end: number; body: string }[] = [];
    JAVADOC_BLOCK.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = JAVADOC_BLOCK.exec(source)) !== null) {
        // 计算匹配起止在第几行
        const before = source.substring(0, m.index);
        const startLine = (before.match(/\n/g)?.length ?? 0) + 1;
        const matchedText = m[0];
        const endLine = startLine + (matchedText.match(/\n/g)?.length ?? 0);
        out.push({ start: startLine, end: endLine, body: matchedText });
    }
    return out;
}

/**
 * 将 Java 源文件中的字符串字面量与各种注释替换为等长的空白，
 * 以避免注解/方法签名被字符串中的 `//`、`@xxx` 等干扰。
 *
 * 该函数不会修改源文件本身，仅供解析器在扫描阶段临时使用。
 */
export function stripStringsAndComments(source: string): string {
    let out = source;
    // 1. 先剥离块注释（含 JavaDoc），保留换行
    out = out.replace(BLOCK_COMMENT, m => m.replace(/[^\n]/g, ' '));
    // 2. 再剥离行注释，保留换行
    out = out.replace(LINE_COMMENT, m => m.replace(/[^\n]/g, ' '));
    // 3. 字符串字面量：用空白填充
    out = stripStringLiterals(out);
    return out;
}

/**
 * 将 Java 字符串字面量替换为等长空白（保留换行）
 * - 支持单引号字符与双引号字符串
 * - 支持 `\"`、`\\` 等转义
 */
function stripStringLiterals(source: string): string {
    const out = source.split('');
    let i = 0;
    const n = out.length;
    while (i < n) {
        const ch = out[i];
        if (ch === '"' || ch === '\'') {
            const quote = ch;
            out[i] = ' ';
            i++;
            while (i < n) {
                const c = out[i];
                if (c === '\\' && i + 1 < n) {
                    out[i] = ' ';
                    out[i + 1] = ' ';
                    i += 2;
                    continue;
                }
                out[i] = ' ';
                if (c === quote) {
                    i++;
                    break;
                }
                i++;
            }
        } else {
            i++;
        }
    }
    return out.join('');
}

/**
 * 工具函数：从 JavaDoc 文本中按出现顺序抽取 `@module xxx` / `@menu xxx` / `@ApiOperation xxx` 等自定义 tag。
 * 返回首个匹配值。
 */
export function findCustomTag(javadoc: string, tag: string): string | undefined {
    // 先去除首尾的 /** 和 */，避免折叠时残留 /
    let body = javadoc.trim();
    if (body.startsWith('/**')) {
        body = body.substring(3);
    }
    if (body.endsWith('*/')) {
        body = body.substring(0, body.length - 2);
    }
    // 匹配 `@tag` 后的非空内容；多行场景下需合并
    const collapsed = body.replace(/\r?\n\s*\*\s?/g, ' ');
    const re = new RegExp(`@${tag}\\s+([^@\\n]+)`, 'i');
    const m = collapsed.match(re);
    if (!m) {
        return undefined;
    }
    return m[1].trim();
}
