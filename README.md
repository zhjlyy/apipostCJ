# Apipost Uploader

一个 VSCode 扩展，用于将 Java Spring/SpringBoot Controller 中的接口一键上传到 [Apipost](https://apipost.cn) V8 平台。

## 功能概览

- 自动解析 Spring 注解（`@RequestMapping`、`@GetMapping`、`@PostMapping`、`@PutMapping`、`@DeleteMapping`、`@PatchMapping`）
- 支持 Swagger 3.0 注解（`@Api`、`@ApiOperation`、`@ApiModelProperty`）
- 解析方法参数（`@RequestParam`、`@PathVariable`、`@RequestBody`）并按位置归类
- 解析 JavaDoc 注释作为接口描述和参数说明
- 三种粒度上传：**目录** / **类** / **方法**
- 上传前弹窗选择目标项目和目录（支持搜索、记忆上次选择）
- 自动从 `application.yml` / `application.properties` 解析 Host
- 三种上传模式：手动选目录 / 按类注释自动建目录 / 按 module + 类注释自动建目录

## 快速开始

### 1. 安装

打包插件 `.vsix` 文件，然后在 VSCode 中：

- `Ctrl+Shift+P` → `Extensions: Install from VSIX...` → 选择 `.vsix` 文件

### 2. 配置 Token

在 VSCode 设置中搜索 `Apipost`，填入 `accessToken`。

获取方式：Apipost 客户端 → 项目设置 → OpenAPI → 复制访问令牌。

### 3. 上传接口

| 操作 | 入口 |
|------|------|
| 上传整个类 | 资源管理器中右键 `.java` 文件 → **Apipost: 上传该类的接口** |
| 上传整个目录 | 资源管理器中右键目录 → **Apipost: 上传该目录的接口** |
| 上传单个方法 | 光标放在方法上 → 右键 → **Apipost: 上传当前方法的接口** |

### 4. 上传流程

1. 插件自动解析所选范围内的 Spring 接口
2. 弹窗选择目标项目（带搜索，默认记忆上次选择）
3. 弹窗选择目标目录（树形展示，含「根目录」选项）
4. 自动从配置文件解析 Host
5. 上传完成，右下角通知显示结果，可点击跳转 Apipost

## 配置项

| 配置项 | 说明 | 默认值 |
|--------|------|--------|
| `apipost.accessToken` | Apipost V8 OpenAPI 访问令牌 | 空 |
| `apipost.baseUrl` | 云端地址 | `https://open.apipost.net` |
| `apipost.uploadMode` | 上传模式：`manual` / `autoClassDir` / `autoModuleAndClassDir` | `manual` |
| `apipost.host` | 手动覆盖 Host，留空则自动解析 | 空 |

## 目录命名规则

当上传模式为 `autoClassDir` 或 `autoModuleAndClassDir` 时，类目录名按以下优先级解析：

`@module` > `@menu` > `@Api`（Swagger）> 类注释第一行

```java
/**
 * 用户管理接口
 * @module 用户中心
 */
@RestController
@RequestMapping("/api/v1/users")
public class UserController {
}
```

- `autoClassDir`：上传到 `<项目>/用户中心/`
- `autoModuleAndClassDir`：根据 Maven/Gradle module 路径推断父级目录，再创建 `用户中心`

## 项目结构

```
src/
├── extension.ts          # 扩展入口，编排上传流程
├── types.ts              # 共享类型定义
├── config/               # 配置读取
├── parser/               # Java 源码解析器
│   ├── javaParser.ts     # 主解析器
│   ├── annotationMatcher.ts  # 注解匹配与路径提取
│   └── commentExtractor.ts   # JavaDoc 提取
├── apipost/              # Apipost V8 REST 客户端
│   ├── client.ts         # HTTP 客户端
│   ├── projects.ts       # 项目/目录 API
│   ├── endpoints.ts      # 接口上传 API
│   └── hostResolver.ts   # Host 解析
├── ui/                   # QuickPick 弹窗
├── storage/              # 上次选择记忆
└── utils/                # 日志、文件工具
```

## 开发

```bash
# 安装依赖
npm install

# 编译
npm run compile

# 监听模式
npm run watch

# 打包
npm run package
```

## License

MIT
