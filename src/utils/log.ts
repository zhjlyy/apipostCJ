// 统一的日志封装，使用 VSCode OutputChannel 输出详细信息
import * as vscode from 'vscode';

let channel: vscode.OutputChannel | undefined;

/**
 * 获取（或懒加载）全局 OutputChannel
 */
export function getChannel(): vscode.OutputChannel {
    if (!channel) {
        channel = vscode.window.createOutputChannel('Apipost Uploader');
    }
    return channel;
}

/**
 * 输出信息级别日志
 */
export function info(message: string, err?: unknown): void {
    getChannel().appendLine(formatLine('INFO', message, err));
}

/**
 * 输出警告级别日志
 */
export function warn(message: string, err?: unknown): void {
    getChannel().appendLine(formatLine('WARN', message, err));
}

/**
 * 输出错误级别日志
 */
export function error(message: string, err?: unknown): void {
    getChannel().appendLine(formatLine('ERROR', message, err));
}

/**
 * 内部：拼接一行日志，附带错误堆栈
 */
function formatLine(level: string, message: string, err?: unknown): string {
    if (err === undefined) {
        return `[${level} ${now()}] ${message}`;
    }
    const detail = err instanceof Error ? `${err.message}\n${err.stack ?? ''}` : String(err);
    return `[${level} ${now()}] ${message}\n${detail}`;
}

/**
 * 释放底层通道
 */
export function dispose(): void {
    channel?.dispose();
    channel = undefined;
}

/**
 * 内部：生成 yyyy-MM-dd HH:mm:ss 格式的时间戳
 */
function now(): string {
    const d = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}
