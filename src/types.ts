// 模块间共享的类型定义

/** HTTP 方法 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';

/** 参数位置 */
export type ParamIn = 'query' | 'path' | 'body' | 'header';

/** 解析出的接口参数 */
export interface ApiParam {
    /** 参数名（不含类名前缀） */
    name: string;
    /** 参数类型（原始字符串） */
    type: string;
    /** 是否必填 */
    required: boolean;
    /** 默认值字符串（可空） */
    defaultValue?: string;
    /** 描述（来自 JavaDoc @param 等） */
    description?: string;
    /** 参数位置 */
    in: ParamIn;
    /** 是否为 @RequestBody 修饰 */
    isBody?: boolean;
}

/** 解析出的接口 */
export interface ApiEndpoint {
    /** HTTP 方法 */
    method: HttpMethod;
    /** 完整路径（已合并类与方法上的注解） */
    path: string;
    /** 接口名称（来自方法注释 / @ApiOperation） */
    summary?: string;
    /** 接口描述（来自方法注释） */
    description?: string;
    /** 标签/分类 */
    tags?: string[];
    /** 所在类名（短名） */
    className: string;
    /** 所在方法名 */
    methodName: string;
    /** 方法参数列表 */
    parameters: ApiParam[];
    /** @RequestBody 类型字符串 */
    requestBodyType?: string;
    /** 方法返回类型 */
    returnType?: string;
    /** 响应 DTO 展开后的字段列表 */
    responseFields?: ApiParam[];
    /** 由 @module/@menu/@Api/类注释第一行 解析出的类目录名 */
    classDirName?: string;
    /** 由 Maven/Gradle 模块名或目录相对路径解析出的 module 名称（autoModuleAndClassDir 使用） */
    moduleName?: string;
}

/** 解析出的 Java 源文件（一个文件可能含多个类，这里只关心顶层类） */
export interface ParsedJavaFile {
    /** 文件绝对路径 */
    filePath: string;
    /** 顶层类名（不含包名） */
    className: string;
    /** 类级别的路径前缀（来自类上的 @RequestMapping） */
    classPathPrefix?: string;
    /** 解析出的接口列表 */
    endpoints: ApiEndpoint[];
    /** 类的 JavaDoc 注释（未取第一行） */
    classComment?: string;
    /** 类 JavaDoc 注释的第一行（去除 * 之后） */
    classCommentFirstLine?: string;
}

/** Apipost 项目 */
export interface ApipostProject {
    /** 项目 ID（字符串） */
    id: string;
    /** 项目名称（用于展示） */
    name: string;
}

/** Apipost 目录节点（树形结构） */
export interface ApipostDirectory {
    /** 目录 ID（字符串） */
    id: string;
    /** 目录名称 */
    name: string;
    /** 父目录 ID，根目录为空 */
    parentId?: string;
    /** 子目录（按需展开） */
    children?: ApipostDirectory[];
}

/** 上传成功后 Apipost 返回的引用信息 */
export interface ApipostUploadResult {
    /** 成功数量 */
    success: number;
    /** 失败数量 */
    failed: number;
    /** 失败原因列表 */
    errors: string[];
    /** Apipost 调试台链接（可空） */
    debugUrl?: string;
    /** Apipost 分享链接（可空） */
    shareUrl?: string;
}
