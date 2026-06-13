# Apipost 接口上传 VSCode 扩展

将选定的目录、类或方法中的所有接口上传到 Apipost V8 云端。
参考 [Apipost 官方 IDEA 插件 v2.0](https://wiki.apipost.cn/docs/idea/helper_old) 实现。

## 特性

- 解析 Spring/SpringBoot Controller 中的接口注解（`@RequestMapping` / `@GetMapping` / `@PostMapping` / `@PutMapping` / `@DeleteMapping` / `@PatchMapping`）
- 支持 Swagger 3.0 注解（`@ApiOperation` / `@Api` / `@ApiModelProperty`）
- 解析方法参数（`@RequestParam` / `@PathVariable` / `@RequestBody` / 普通参数）并按位置归类
- 解析 JavaDoc 注释、返回类型与类注释
- 三种粒度的上传入口：目录、类、方法
- **每次上传前弹出选择对话框**：选择项目 → 选择目录（支持搜索、记忆上次选择）
- 三种上传模式：手动选择目录 / 按类注释自动建目录 / 按 module+类注释自动建目录
- Host 自动从 `application.yml` / `application.properties` 解析

## 准备

- VSCode >= 1.85
- 在 Apipost V8 客户端「项目设置 → OpenAPI」中获取 `accessToken`

## 配置

打开 VSCode 设置，搜索 `Apipost`：

| 配置项 | 说明 |
|--------|------|
| `apipost.accessToken` | V8 项目的 OpenAPI 访问令牌 |
| `apipost.baseUrl` | 云端地址，默认 `https://open.apipost.net`（V8） |
| `apipost.uploadMode` | `manual`（默认）/ `autoClassDir` / `autoModuleAndClassDir` |
| `apipost.host` | 可选：手动覆盖 host，留空则从 `application.yml/properties` 解析 |

## 使用

### 1. 上传某个 Java 类的所有接口
在资源管理器中右键点击一个 `.java` 文件 → `Apipost: 上传该类的接口`

### 2. 上传某个目录下的所有接口
在资源管理器中右键点击一个目录 → `Apipost: 上传该目录的接口`

### 3. 上传当前方法
在 Java 文件中将光标放在某个方法上 → 右键 → `Apipost: 上传当前方法的接口`，或通过命令面板执行

### 4. 上传流程
1. 插件解析所选范围内的所有接口
2. 弹出「选择项目」对话框（带搜索，默认激活上次的项目）
3. 弹出「选择目录」对话框（树形扁平化展示，含「根目录 / 不分类」选项）
4. 自动按上传模式决定目标目录（自动模式下会按需创建子目录）
5. 自动从 `application.yml/properties` 解析 host
6. 上传完成后右下角显示成功数量，点击「去调试」「去分享」可直接跳转 Apipost

## 目录命名规则

当上传模式为 `autoClassDir` 或 `autoModuleAndClassDir` 时，会按以下优先级解析出类目录名：

`@module` > `@menu` > `@Api`（Swagger）> 类注释第一行

示例：

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

- `autoClassDir` 模式：上传到 `<所选项目>/用户中心/`
- `autoModuleAndClassDir` 模式：根据 Maven/Gradle module 路径推断 module 父级目录，再在其下创建 `用户中心`

## 示例

`./samples/SampleController.java` 是一个完整的 SpringBoot Controller 示例，可用于手工验证。

## 目录结构

```
.
├── package.json            # VSCode 扩展清单
├── tsconfig.json
├── .vscodeignore
├── README.md
├── samples/                # 示例 Controller / DTO
│   ├── SampleController.java
│   ├── UserCreateRequest.java
│   ├── UserUpdateRequest.java
│   └── UserVO.java
└── src/
    ├── extension.ts        # 扩展入口
    ├── types.ts            # 共享类型
    ├── config/             # 配置读取
    ├── parser/             # Java 解析器
    ├── apipost/            # Apipost V8 客户端
    ├── ui/                 # QuickPick 弹窗
    ├── storage/            # 工作区级别上次选择
    └── utils/              # 日志、文件工具
```

## 开发

```bash
# 安装依赖
npm install

# 编译
npm run compile

# 监听模式
npm run watch

# 打包为 .vsix
npm run package
```

## 已知限制

- 鉴权头目前为 `Authorization: Bearer <accessToken>`。如未来 V8 切换为 `X-Apipost-Token`，修改 `src/apipost/client.ts` 中 `buildHeaders` 即可
- 接口对象请求体遵循通用 OpenAPI 风格构造。若 V8 真实字段命名有差异，可调整 `src/apipost/endpoints.ts` 中的 `buildApiRequest`
- 当前仅支持 Java；若需要支持其他语言，可扩展 `src/parser/`
- 自动创建目录模式仅取首个分组的 (moduleName, classDirName) 作为目标目录；多组同时上传到不同子目录的场景留待后续迭代

## License

MIT
