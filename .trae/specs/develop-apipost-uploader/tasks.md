# Tasks

- [x] Task 1: 初始化 VSCode 扩展项目骨架
  - [x] SubTask 1.1: 使用 TypeScript 模板创建 `package.json`、`tsconfig.json`、`.vscodeignore`、入口 `src/extension.ts`
  - [x] SubTask 1.2: 配置 `contributes.commands`（目录/类/方法三种上传命令）和 `contributes.menus`（资源管理器右键菜单、编辑器右键菜单）
  - [x] SubTask 1.3: 在 `contributes.configuration` 中声明 Apipost 凭据配置项（`apipost.accessToken`、`apipost.baseUrl`，默认 V8 地址 `https://open.apipost.net`）

- [x] Task 2: 实现 Java 接口解析器
  - [x] SubTask 2.1: 实现 Java 源码读取与预处理（去除单行/多行注释、字符串字面量）
  - [x] SubTask 2.2: 正则匹配类上的 `@RequestMapping` 以及方法上的 6 种 Mapping 注解
  - [x] SubTask 2.3: 抽取方法签名中的 `@RequestParam`、`@PathVariable`、`@RequestBody`、普通参数与返回类型
  - [x] SubTask 2.4: 抽取方法上方的 JavaDoc 注释作为接口描述
  - [x] SubTask 2.5: 提供 `parseFile(filePath)`、`parseMethod(filePath, lineNumber)`、`parseDirectory(dirPath)` 三个入口

- [x] Task 3: 实现 Apipost 客户端
  - [x] SubTask 3.1: 封装基于 `vscode` 内置 `fetch`（Node 18+）的 HTTP 客户端
  - [x] SubTask 3.2: 实现「获取项目列表」、「获取目录树」、「创建/更新接口」三个 API 封装
  - [x] SubTask 3.3: 读取 VSCode 配置项，处理缺失/非法配置

- [x] Task 4: 实现「选择项目 / 目录」弹窗
  - [x] SubTask 4.1: 使用 `vscode.window.showQuickPick` 展示项目列表（带搜索），支持取消
  - [x] SubTask 4.2: 使用 `vscode.window.showQuickPick` 展示目录树（按层级缩进），包含「根目录 / 不分类」选项，支持取消
  - [x] SubTask 4.3: 处理拉取失败场景，提示错误并中止

- [x] Task 5: 注册并实现三种粒度的上传命令
  - [x] SubTask 5.1: 实现 `apipost.uploadClass` 命令（接收一个或多个 Uri）→ 弹窗 → 解析 → 上传
  - [x] SubTask 5.2: 实现 `apipost.uploadDirectory` 命令（接收一个或多个 Uri，递归遍历 `.java` 文件）→ 弹窗 → 解析 → 上传
  - [x] SubTask 5.3: 实现 `apipost.uploadMethod` 命令（基于当前编辑器光标定位方法）→ 弹窗 → 解析 → 上传
  - [x] SubTask 5.4: 在 `activate` 中通过 `registerCommand` 与 `registerTextEditorCommand` 注册并订阅 `onDidChangeConfiguration` 重新读取配置

- [x] Task 6: 反馈与日志
  - [x] SubTask 6.1: 使用 `vscode.window.showInformationMessage` / `showErrorMessage` 展示成功/失败结果
  - [x] SubTask 6.2: 使用 OutputChannel 输出详细日志，便于排查
  - [x] SubTask 6.3: 成功时提供「去调试」与「去分享」的可点击按钮

- [x] Task 7: 验证与文档
  - [x] SubTask 7.1: 编写 `README.md`，说明配置项、菜单、弹窗流程与使用方法
  - [x] SubTask 7.2: 在 `samples/` 目录下放置一个示例 SpringBoot Controller 用于手工验证
  - [x] SubTask 7.3: 使用 `vsce package` 打包验证（无需实际发布）

# Task Dependencies
- [Task 2] 依赖 [Task 1]
- [Task 3] 依赖 [Task 1]
- [Task 4] 依赖 [Task 3]
- [Task 5] 依赖 [Task 2]、[Task 3] 与 [Task 4]
- [Task 6] 依赖 [Task 5]
- [Task 7] 依赖 [Task 6]
