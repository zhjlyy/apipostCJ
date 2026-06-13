// 简单的文件系统工具
import * as fs from 'fs';
import * as path from 'path';

/**
 * 判断一个文件是否存在
 */
export function fileExists(filePath: string): boolean {
    try {
        return fs.statSync(filePath).isFile();
    } catch {
        return false;
    }
}

/**
 * 判断一个目录是否存在
 */
export function dirExists(dirPath: string): boolean {
    try {
        return fs.statSync(dirPath).isDirectory();
    } catch {
        return false;
    }
}

/**
 * 递归收集目录下的所有 .java 文件（按文件名字典序）
 */
export function collectJavaFiles(dirPath: string): string[] {
    const out: string[] = [];
    walk(dirPath, out);
    out.sort();
    return out;
}

/**
 * 内部：广度遍历目录
 */
function walk(dir: string, out: string[]): void {
    let entries: fs.Dirent[];
    try {
        entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
        return;
    }
    for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            // 跳过常见构建/隐藏目录，提升效率
            if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'target' || entry.name === 'build' || entry.name.startsWith('.')) {
                continue;
            }
            walk(full, out);
        } else if (entry.isFile() && entry.name.endsWith('.java')) {
            out.push(full);
        }
    }
}
