# Apipost 接口上传 VSCode 插件 Spec

## Why
在日常后端开发中，开发者经常需要将 Java 代码中编写的 REST 接口信息（如 Controller 中的 `@RequestMapping`、`@GetMapping` 等注解）手动同步到 Apipost 平台进行接口文档管理和测试。手动同步效率低、易出错。本插件参考 Apipost 官方 IDEA 插件（v2.0）的实现方式，在 VSCode 中提供同等体验：解析 Spring/SpringBoot Controller，按目录/类/方法粒度上传，并在上传前通过弹窗选择目标项目与目录。

## What Changes
- 新增一个 VSCode 扩展，支持对 Java 源文件（`.java`）进行解析
- 解析 Spring/SpringBoot 常用接口注解：`@RequestMapping`、`@GetMapping`、`@PostMapping`、`@PutMapping`、`@DeleteMapping`、`@PatchMapping`
- 提取接口的：HTTP 方法、类/方法路径合并、参数（`@RequestParam`、`@PathVariable`、`@RequestBody`）、返回类型、方法 JavaDoc 注释
- 支持 Swagger 3.0 注解：`@Api`、`@ApiOperation`、`@ApiModelProperty`、`@ApiModel`
- 目录命名规则（参考 IDEA 插件）：`@module` > `@menu` > `@Api`（swagger）> 文档注释第一行
- 在 VSCode 资源管理器中：
  - 右键点击 Java 类文件 → 「上传该类的所有接口到 Apipost」
  - 右键点击目录（package） → 「上传该目录下所有 Java 文件的接口到 Apipost」
  - 在编辑器内光标位于方法上 → 「上传该方法对应的接口到 Apipost」
- **每次触发上传时，先弹出选择对话框**：
  - 第一步：选择 Apipost 目标项目（团队/项目列表，带搜索）
  - 第二步：选择目标项目下的目录（树形展示，支持搜索，可选「根目录 / 不分类」）
  - 支持用户在任意一步取消
  - **记忆上次选择**：在 VSCode 工作区级别记忆上次的「项目+目录」组合，下次默认填入
- **V7 / V8 双版本支持**（参考官方 IDEA 插件）：
  - V7 云端地址：`https://sync-project-ide.apipost.cn`
  - V8 云端地址：`https://open.apipost.net`
  - 在设置中提供 `apipost.version`（`v7` / `v8`），凭据 `accessToken` 跟随版本
- **三种上传模式**（参考官方 IDEA 插件）：
  - `manual`（默认）：手动选择项目下目录上传
  - `autoClassDir`：上传时根据类注释自动创建目录（命名规则见上）
  - `autoModuleAndClassDir`：上传时自动创建 module 父级目录与类注释子目录
- **Host 配置**：从 `application.yml` / `application.properties` 中读取 `server.port` 与 `server.servlet.context-path`，可在设置中手动覆盖
- 提供上传结果反馈（成功/失败提示、跳转到 Apipost 调试/分享链接）

## Impact
- Affected specs: 新增功能模块
- Affected code: 新增 VSCode 扩展项目（TypeScript/JavaScript），无对现有项目代码的修改

## ADDED Requirements

### Requirement: 接口注解解析
系统 SHALL 解析 Java 源文件中的 Spring/SpringBoot 与 Swagger 3.0 接口注解，提取 HTTP 方法、路径、参数、注释信息。

#### Scenario: 解析类与方法注解
- **WHEN** 用户触发对 Java 文件的解析
- **THEN** 系统识别类上的 `@RequestMapping`（可选）以及方法上的 `@GetMapping`/`@PostMapping`/`@PutMapping`/`@DeleteMapping`/`@PatchMapping`/`@RequestMapping`，合并出完整路径

#### Scenario: 提取参数与返回值
- **WHEN** 解析一个方法时
- **THEN** 系统提取方法签名中的参数（`@RequestParam`、`@PathVariable`、`@RequestBody`、普通参数）以及返回类型

#### Scenario: 提取方法与字段注释
- **WHEN** 解析一个方法或类的字段时
- **THEN** 系统从 JavaDoc 注释中提取接口/字段描述，并支持 Swagger 的 `@ApiOperation`、`@ApiModelProperty`

#### Scenario: 解析类注释用于目录命名
- **WHEN** 上传模式为 `autoClassDir` 或 `autoModuleAndClassDir` 时
- **THEN** 系统按 `@module` > `@menu` > `@Api` > 文档注释第一行 的优先级解析出目录名

### Requirement: 多层级上传入口
系统 SHALL 提供目录、类、方法三种粒度的上传入口。每种入口触发后都必须先进入「选择项目 / 目录」弹窗流程。

#### Scenario: 目录级上传
- **WHEN** 用户在资源管理器中右键点击目录并选择「上传该目录的接口到 Apipost」
- **THEN** 系统弹出「选择项目 → 选择目录」弹窗；用户确认后系统递归收集该目录下所有 `.java` 文件中的接口，批量上传

#### Scenario: 类级上传
- **WHEN** 用户在资源管理器中右键点击 `.java` 文件并选择「上传该类的接口到 Apipost」
- **THEN** 系统弹出「选择项目 → 选择目录」弹窗；用户确认后系统解析该类中的所有接口并批量上传

#### Scenario: 方法级上传
- **WHEN** 用户在编辑器中光标位于某个方法上并选择「上传当前方法接口到 Apipost」
- **THEN** 系统弹出「选择项目 → 选择目录」弹窗；用户确认后系统仅提取并上传当前光标所对应方法的接口

### Requirement: 上传前选择目标项目与目录
系统 SHALL 在每次上传前弹出对话框，让用户选择 Apipost 中的目标项目与目录。

#### Scenario: 选择项目
- **WHEN** 接口提取完成、即将上传时
- **THEN** 系统调用 Apipost 团队/项目列表接口，展示可访问的项目（带搜索），用户必须从列表中选择一个项目，或选择「取消」

#### Scenario: 选择目录
- **WHEN** 用户选择了目标项目后
- **THEN** 系统调用 Apipost 目录树接口，渲染该项目的目录树（含「根目录 / 不分类」选项），用户必须选择一个目录，或选择「取消」

#### Scenario: 用户取消
- **WHEN** 用户在「选择项目」或「选择目录」步骤中点击「取消」或关闭弹窗
- **THEN** 系统中止本次上传，不发起任何 Apipost 写入请求

#### Scenario: 项目/目录加载失败
- **WHEN** 拉取项目或目录列表失败（网络/权限/配置错误）
- **THEN** 系统提示具体错误原因并中止本次上传

#### Scenario: 记忆上次选择
- **WHEN** 用户确认完成一次上传
- **THEN** 系统在工作区级别保存「项目+目录」组合；下次上传时弹窗默认填入该组合，用户可一键确认

### Requirement: V8 版本支持
系统 SHALL 面向 Apipost V8 版本（云端地址 `https://open.apipost.net`）实现。

#### Scenario: 默认云端地址
- **WHEN** 用户未自定义 `apipost.baseUrl`
- **THEN** 系统使用 V8 默认地址 `https://open.apipost.net`

#### Scenario: 凭据校验
- **WHEN** 用户保存了 `accessToken`
- **THEN** 系统进行基本非空校验，必要时在拉取列表前提示用户确认

### Requirement: Apipost 配置
系统 SHALL 提供 Apipost 凭据、上传模式、Host 等配置项。

#### Scenario: 配置缺失
- **WHEN** 用户触发上传且未配置 `accessToken` 等必要信息
- **THEN** 系统提示用户打开设置进行配置，并跳转到对应配置项

#### Scenario: 上传模式
- **WHEN** 用户在设置中切换 `apipost.uploadMode`
- **THEN** 系统按 `manual` / `autoClassDir` / `autoModuleAndClassDir` 的行为执行后续上传

#### Scenario: Host 解析
- **WHEN** 解析出的接口需要带上 host
- **THEN** 系统优先使用设置中 `apipost.host` 覆盖值；否则从工作区内的 `application.yml` / `application.properties` 中读取 `server.port` 与 `server.servlet.context-path`；若仍为空则只上传相对路径

### Requirement: 上传执行与结果反馈
系统 SHALL 在用户确认目标项目与目录后，调用 Apipost 开放接口完成上传，并反馈结果。

#### Scenario: 成功上传
- **WHEN** 至少一个接口成功上传到 Apipost
- **THEN** 系统在右下角通知中显示成功数量，并提供「去调试」与「去分享」的可点击链接

#### Scenario: 失败重试
- **WHEN** 上传过程中出现网络或 API 错误
- **THEN** 系统显示错误原因，允许用户重试

## MODIFIED Requirements
无（全新功能模块）

## REMOVED Requirements
无
