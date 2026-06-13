* [x] VSCode 扩展项目骨架已创建（含 `package.json`、`tsconfig.json`、`src/extension.ts`）

* [x] `contributes.commands` 中注册了类、目录、方法三种粒度的上传命令

* [x] `contributes.menus` 中资源管理器右键菜单与编辑器右键菜单已正确绑定命令

* [x] `contributes.configuration` 中声明了 `apipost.accessToken` 等凭据配置项

* [x] Java 解析器能正确识别类与方法上的 Spring/SpringBoot 接口注解

* [x] Java 解析器能正确提取 `@RequestParam` / `@PathVariable` / `@RequestBody` / 普通参数 / 返回类型

* [x] Java 解析器能正确抽取方法上方的 JavaDoc 注释

* [x] `parseFile` / `parseMethod` / `parseDirectory` 三个解析入口可用

* [x] Apipost 客户端能正确读取 VSCode 配置

* [x] Apipost 客户端提供「获取项目列表」、「获取目录树」、「创建/更新接口」三个 API 封装

* [x] 「选择项目」弹窗使用 `showQuickPick` 展示项目列表，支持搜索与取消

* [x] 「选择目录」弹窗按层级缩进展示目录树，包含「根目录 / 不分类」选项，支持搜索与取消

* [x] 项目或目录拉取失败时给出明确错误提示并中止

* [x] `apipost.uploadClass` 命令可对单个 `.java` 文件执行：弹窗 → 解析 → 上传

* [x] `apipost.uploadDirectory` 命令可递归遍历目录并执行：弹窗 → 解析 → 上传

* [x] `apipost.uploadMethod` 命令能基于光标定位方法并执行：弹窗 → 解析 → 上传

* [x] 用户在弹窗中取消时不会发起任何 Apipost 写入请求

* [x] 配置缺失时给出友好提示并跳转至设置

* [x] 上传成功/失败均有 VSCode 通知反馈

* [x] OutputChannel 中输出可排查的详细日志

* [x] 成功通知中提供「在 Apipost 中查看」的可点击按钮

* [x] `README.md` 中说明了配置项、菜单、弹窗流程与使用方法

* [x] `samples/` 目录下提供可手工验证的 SpringBoot Controller 示例

