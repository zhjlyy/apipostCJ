# 全局公共参数

**全局Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| api-token | {{api_token}} | string | 是 | - |
| project_name | {{project_name}} | string | 是 | - |

**全局Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**全局Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**全局认证方式**

> 无需认证

# 状态码说明

| 状态码 | 中文描述 |
| --- | ---- |
| 16002 | 模型名称已存在（当待入库模型的名称在云端已经存在时） |
| 16003 | 模型不存在或已被删除（当待操作的模型未能查询到时） |
| 16004 | 同一项目下模型名称已重复（当通过模型名称操作模型，查询到多个时） |
| 16005 | 父级模型目录不存在（当父级节点不存在时） |
| 16006 | 父级模型名称已重复（当通过模型名称寻找父级节点，查询到多个时） |

# 说明文档

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2026-05-28 18:33:21

> 更新时间: 2026-05-28 18:33:33

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

## 说明文档（saas版 ）

> 创建人: 周义凯

> 更新人: Stilwell

> 创建时间: 2026-04-08 17:10:35

> 更新时间: 2026-05-28 18:34:11

#### 参数描述

**[object Object]**

**Query**

# 开放接口V2

> 创建人: 周义凯

> 更新人: 周义凯

> 创建时间: 2025-12-18 10:03:42

> 更新时间: 2026-01-27 15:52:42

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

## 用户模块

> 创建人: 周义凯

> 更新人: Stilwell

> 创建时间: 2025-12-22 15:55:15

> 更新时间: 2026-05-28 18:41:53

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

### 获取个人信息

> 创建人: Stilwell

> 更新人: 周义凯

> 创建时间: 2026-03-04 20:46:16

> 更新时间: 2026-04-14 19:05:18

**标签**

> v1.19.0以上

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/user/info

**请求方式**

> GET

**Content-Type**

> none

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {
		"uid": "478d27fd8401000",
		"portrait": "https://img.cdn.apipost.cn/test/default/user/default_profile_photo/Vector-2.png",
		"nick_name": "哈哈哈22222",
		"email": "18810310605@163.com",
		"mobile": "",
		"openid": "",
		"is_admin": -1,
		"created_at": "2025-05-28T00:54:43+08:00",
		"language": "zh-cn"
	},
	"time": "2025-12-18T18:17:25.7137651+08:00",
	"extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| data | - | object | - |
| data.uid | 478d27fd8401000 | string | - |
| data.portrait | https://img.cdn.apipost.cn/test/default/user/default_profile_photo/Vector-2.png | string | - |
| data.nick_name | 哈哈哈22222 | string | - |
| data.email | 18810310605@163.com | string | - |
| data.mobile | - | string | - |
| data.openid | - | string | - |
| data.is_admin | -1 | integer | - |
| data.created_at | 2025-05-28T00:54:43+08:00 | string | - |
| data.language | zh-cn | string | - |
| time | 2025-12-18T18:15:15.1888824+08:00 | string | - |
| extra_err | - | object | - |

* token失效(200)

```javascript
{
	"code": 30001,
	"msg": "api_token错误或已被删除！",
	"data": {},
	"time": "2025-12-18T18:18:15.7311128+08:00",
	"extra_err": {}
}
```

* token未传(200)

```javascript
{
	"code": 30002,
	"msg": "api-token必填",
	"data": {},
	"time": "2025-12-18T18:16:49.8661693+08:00",
	"extra_err": {}
}
```

**Query**

## 团队管理

> 创建人: Stilwell

> 更新人: 周义凯

> 创建时间: 2025-12-23 10:30:10

> 更新时间: 2026-01-09 17:36:00

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

### 我的群组列表

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2025-12-22 15:49:43

> 更新时间: 2026-04-28 14:58:06

**根据openapi token 获得的用户身份，获取与用户相关的团队列表基础信息。**

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/team/list

**请求方式**

> GET

**Content-Type**

> none

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": [
		{
			"team_id": "4381362a5401000",
			"name": "孟常赛的群组",
			"intro": "",
			"logo": "https://img.cdn.apipost.cn/test/default/icon/team/default_logo.png",
			"is_default": 1,
			"created_id": "4381362a1c01000",
			"roles": {
				"is_admin": -1,
				"is_team_admin": -1,
				"is_project_admin": 0,
				"role": 0,
				"role_name": "",
				"permissions": []
			}
		}
	],
	"time": "2025-12-16T17:49:18.303598+08:00",
	"extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| data | - | array | - |
| data.team_id | 4381362a5401000 | string | 团队id |
| data.name | 孟常赛的群组 | string | 团队名称 |
| data.intro | - | string | 团队简介 |
| data.logo | https://img.cdn.apipost.cn/test/default/icon/team/default_logo.png | string | 团队logo |
| data.is_default | 1 | integer | 是否默认团队 1是 -1否 |
| data.created_id | 4381362a1c01000 | string | 创建人id |
| data.roles | - | object | 角色权限 |
| data.roles.is_admin | -1 | integer | 是否企业超管 1：是 -1否 |
| data.roles.is_team_admin | -1 | integer | 是否团队管理者 1：是 -1否 |
| data.roles.is_project_admin | 0 | integer | 是否项目负责人 0表示暂无信息 1 |
| data.roles.role | 0 | integer | 项目角色权限id 0暂无信息 1只读 2读写 其他指定一角色id |
| data.roles.role_name | - | string | 角色名称 |
| data.roles.permissions | - | array | 角色权限标记 |
| time | 2025-12-16T17:49:18.303598+08:00 | string | - |
| extra_err | - | object | - |

* 失败(200)

```javascript
暂无数据
```

* 废弃(200)

```javascript
{
    "data": [
        {
            "team_id": 1,
            "name": "",
            "intro": "",
            "logo": "",
            "is_default": 1,
            "roles": {
                "is_licence": 1,
                "role": 1,
                "role_name": "",
                "is_project_admin": 1,
                "is_admin": 1,
                "is_team_admin": 1
            },
            "project_count": 1,
            "user_count": 1,
            "edited_at": "2025-12-16 18:59:47",
            "users": [
                {
                    "is_licence": 1,
                    "user_id": 1,
                    "nick_name": "",
                    "portrait": "",
                    "is_admin": 1,
                    "role": 1
                }
            ]
        }
    ],
    "code": 1,
    "msg": "",
    "time": "2025-12-16 18:59:47"
}
```

**Query**

## 项目管理

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2025-12-23 10:29:52

> 更新时间: 2025-12-23 14:28:04

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

### 创建项目

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2025-12-22 15:50:16

> 更新时间: 2026-04-16 12:00:03

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/add

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"team_id": "{{team_id}}",
	// "team_code": "{{team_code}}",
	// "project_code": "{{project_code}}",
	"project_code": "fengtt00x",
	"name": "项目名称",
	"intro": "项目描述简介"
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| team_id | {{team_id}} | string | 是 | team_id 和 team_code 传一个即可 |
| team_code | {{team_code}} | string | 否 | - |
| project_code | {{project_code}} | string | 否 | 可选 传入相关联的三方id. 或者不传 因为project_id 系统会自动创建，并在返回中🔙 |
| name | 项目名称 | string | 是 | 项目名称 |
| intro | 项目描述简介 | string | 否 | 项目描述简介 |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {
		"project_id": "22579e2fa001000"
	},
	"time": "2024-02-20T14:51:46.2616565+08:00"
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| data | - | object | - |
| data.project_id | 22579e2fa001000 | string | 项目id |
| time | 2024-02-20T14:51:46.2616565+08:00 | string | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

### 项目详情

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2025-12-22 15:50:47

> 更新时间: 2026-04-28 14:57:18

**标签**

> v1.19.0以上

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/info?project_id={{project_id}}&project_code={{project_code}}

**请求方式**

> GET

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | id 或code传一个即可，如都传如则以id为准。 |
| project_code | {{project_code}} | string | 否 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {
		"team_id": "1bfd2a3823426001",
		"project_id": "1bfd2a779bc26001",
		"project_code": "2016814901334532098",
		"category": "开发工具",
		"name": "openAPI01",
		"intro": "",
		"is_lock": -1,
		"is_default": -1,
		"logo": "https://minio.apipost.cc/apipost-default/default/icon/project/default_logo.png",
		"is_describe_library": 1,
		"main_project_id": "1bfd2a779bc26001",
		"branch_name": "main",
		"branch_intro": "",
		"is_protected": -1
	},
	"time": "2026-04-28T14:57:01.475702+08:00",
	"extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| data | - | object | - |
| data.team_id | 29ed675b4064000 | string | 团队 |
| data.project_id | 29ed675c2464000 | string | 项目 |
| data.category | - | string | 项目类别 |
| data.name | Stilwell个人项目222 | string | 名称 |
| data.intro | 222 | string | 简介 |
| data.is_lock | -1 | integer | 是否锁定 1是 -1否 |
| data.is_default | 1 | integer | 是否为默认项目 1是 -1否 |
| data.logo | https://img.cdn.apipost.cn/test/upload/user/1137/log/a5ae45e5-2b73-4d59-9aa6-02b417f7df88.jpg | string | logo |
| data.is_describe_library | -1 | integer | 是否开启自能 |
| data.main_project_id | 29ed675c2464000 | string | - |
| data.branch_name | main | string | - |
| data.branch_intro | 分支描述 | string | - |
| data.is_protected | 1 | number | - |
| time | 2025-12-22T21:35:05.440739+08:00 | string | - |
| extra_err | - | object | - |

* tok失效(200)

```javascript
{
	"code": 11000,
	"msg": "token已失效",
	"msg_en": "The token has expired",
	"data": {},
	"time": 1704879078
}
```

* tok未传(200)

```javascript
{
	"code": 11090,
	"msg": "token必传",
	"msg_en": "The token must be transmitted",
	"data": {},
	"time": 1704879180
}
```

* tok被替换(404)

```javascript
{
	"code": 11091,
	"msg": "您的账号于2024-01-10 11:47:52在其他设备上登录",
	"msg_en": "Your account is already logged in elsewhere",
	"data": {},
	"time": 1704879227
}
```

**Query**

### 我的项目列表

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2025-12-22 15:50:38

> 更新时间: 2026-04-28 14:57:27

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/list?team_id={{team_id}}&action=0

**请求方式**

> GET

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| team_code | {{team_code}} | string | 是 | team_id 或 team_code 传一个即可，如都传如则以team_id为准。 |
| team_id | {{team_id}} | string | 是 | 团队id |
| action | 0 | string | 是 | 列表分类：0-3 0全部  1我管理的 2我参与的 3回收站 (例如我是项目管理，那么在我参与中就不会出现。我参与是指我在该项目中是普通成员) |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": [
		{
			"project_id": "585b3bf18c01000",
			"project_code": "Stilwell个人项目222",
			"team_id": "29ed675b4064000",
			"name": "项目名称",
			"intro": "项目描述简介",
			"is_lock": -1,
			"is_freeze": -1,
			"logo": "https://img.cdn.apipost.cn/test/default/icon/project/default_logo.png",
			"status": 1,
			"is_default": -1,
			"created_id": "471",
			"deleted_at": null,
			"deleted_user": {},
			"roles": {
				"is_admin": -1,
				"is_team_admin": 1,
				"is_project_admin": 1,
				"role": 2,
				"role_name": "读写",
				"permissions": [
					"apis:branch",
					"apis:branch:cdu",
					"apis:branch:read",
					"apis:generate_code",
					"apis:generate_code:read",
					"apis:load_tests",
					"apis:load_tests:cdu",
					"apis:load_tests:read",
					"apis:run",
					"apis:run:cdu",
					"apis:run:read",
					"apis:sample",
					"apis:sample:cdu",
					"apis:sample:read",
					"branch:branch:apply_read",
					"branch:branch:merge",
					"branch:branch:read",
					"dict:data",
					"dict:data:cdu",
					"dict:data:read",
					"dict:db",
					"dict:db:cdu",
					"dict:db:read",
					"dict:model",
					"dict:model:cdu",
					"dict:model:read",
					"docs:archive",
					"docs:archive:cdu",
					"docs:archive:read",
					"docs:issue",
					"docs:issue:cdu",
					"docs:issue:read",
					"other:history",
					"other:history:curd",
					"other:invite:read",
					"other:invite:write",
					"other:recently",
					"other:recently:curd",
					"other:recycle",
					"other:recycle:cdu",
					"other:recycle:read",
					"res:cookies",
					"res:cookies:curd",
					"res:env",
					"res:env:cdu",
					"res:env:read",
					"res:glob_param",
					"res:glob_param:cdu",
					"res:glob_param:read",
					"res:glob_var",
					"res:glob_var:cdu",
					"res:glob_var:read",
					"setting:basic",
					"setting:basic:read",
					"setting:code_dict:read",
					"setting:custom_attribute:read",
					"setting:custom_func",
					"setting:custom_func:cdu",
					"setting:custom_func:read",
					"setting:custom_mock",
					"setting:custom_mock:cdu",
					"setting:custom_mock:read",
					"setting:import",
					"setting:import:export",
					"setting:import:import",
					"setting:import:sync",
					"setting:mark",
					"setting:mark:cdu",
					"setting:mark:read",
					"setting:mock:read",
					"setting:webhook:read",
					"tests:report",
					"tests:report:cdu",
					"tests:report:read",
					"tests:scheduled",
					"tests:scheduled:cdu",
					"tests:scheduled:read",
					"tests:use_case",
					"tests:use_case:cdu",
					"tests:use_case:read"
				]
			},
			"upgrade_status": 0
		},
		{
			"project_id": "541135e7c401000",
			"team_id": "29ed675b4064000",
			"name": "sort",
			"intro": "",
			"is_lock": -1,
			"is_freeze": -1,
			"logo": "https://img.cdn.apipost.cn/test/default/icon/project/default_logo.png",
			"status": 1,
			"is_default": -1,
			"created_id": "471",
			"deleted_at": null,
			"deleted_user": {},
			"roles": {
				"is_admin": -1,
				"is_team_admin": 1,
				"is_project_admin": 1,
				"role": 2,
				"role_name": "读写",
				"permissions": [
					"apis:branch",
					"apis:branch:cdu",
					"apis:branch:read",
					"apis:generate_code",
					"apis:generate_code:read",
					"apis:load_tests",
					"apis:load_tests:cdu",
					"apis:load_tests:read",
					"apis:run",
					"apis:run:cdu",
					"apis:run:read",
					"apis:sample",
					"apis:sample:cdu",
					"apis:sample:read",
					"branch:branch:apply_read",
					"branch:branch:merge",
					"branch:branch:read",
					"dict:data",
					"dict:data:cdu",
					"dict:data:read",
					"dict:db",
					"dict:db:cdu",
					"dict:db:read",
					"dict:model",
					"dict:model:cdu",
					"dict:model:read",
					"docs:archive",
					"docs:archive:cdu",
					"docs:archive:read",
					"docs:issue",
					"docs:issue:cdu",
					"docs:issue:read",
					"other:history",
					"other:history:curd",
					"other:invite:read",
					"other:invite:write",
					"other:recently",
					"other:recently:curd",
					"other:recycle",
					"other:recycle:cdu",
					"other:recycle:read",
					"res:cookies",
					"res:cookies:curd",
					"res:env",
					"res:env:cdu",
					"res:env:read",
					"res:glob_param",
					"res:glob_param:cdu",
					"res:glob_param:read",
					"res:glob_var",
					"res:glob_var:cdu",
					"res:glob_var:read",
					"setting:basic",
					"setting:basic:read",
					"setting:code_dict:read",
					"setting:custom_attribute:read",
					"setting:custom_func",
					"setting:custom_func:cdu",
					"setting:custom_func:read",
					"setting:custom_mock",
					"setting:custom_mock:cdu",
					"setting:custom_mock:read",
					"setting:import",
					"setting:import:export",
					"setting:import:import",
					"setting:import:sync",
					"setting:mark",
					"setting:mark:cdu",
					"setting:mark:read",
					"setting:mock:read",
					"setting:webhook:read",
					"tests:report",
					"tests:report:cdu",
					"tests:report:read",
					"tests:scheduled",
					"tests:scheduled:cdu",
					"tests:scheduled:read",
					"tests:use_case",
					"tests:use_case:cdu",
					"tests:use_case:read"
				]
			},
			"upgrade_status": 0
		},
		{
			"project_id": "2d0bb063ec64000",
			"team_id": "29ed675b4064000",
			"name": "00x1",
			"intro": "xxx",
			"is_lock": -1,
			"is_freeze": -1,
			"logo": "https://img.cdn.apipost.cn/test/default/icon/project/default_logo.png",
			"status": 1,
			"is_default": -1,
			"created_id": "471",
			"deleted_at": null,
			"deleted_user": {},
			"roles": {
				"is_admin": -1,
				"is_team_admin": 1,
				"is_project_admin": 1,
				"role": 2,
				"role_name": "读写",
				"permissions": [
					"apis:branch",
					"apis:branch:cdu",
					"apis:branch:read",
					"apis:generate_code",
					"apis:generate_code:read",
					"apis:load_tests",
					"apis:load_tests:cdu",
					"apis:load_tests:read",
					"apis:run",
					"apis:run:cdu",
					"apis:run:read",
					"apis:sample",
					"apis:sample:cdu",
					"apis:sample:read",
					"branch:branch:apply_read",
					"branch:branch:merge",
					"branch:branch:read",
					"dict:data",
					"dict:data:cdu",
					"dict:data:read",
					"dict:db",
					"dict:db:cdu",
					"dict:db:read",
					"dict:model",
					"dict:model:cdu",
					"dict:model:read",
					"docs:archive",
					"docs:archive:cdu",
					"docs:archive:read",
					"docs:issue",
					"docs:issue:cdu",
					"docs:issue:read",
					"other:history",
					"other:history:curd",
					"other:invite:read",
					"other:invite:write",
					"other:recently",
					"other:recently:curd",
					"other:recycle",
					"other:recycle:cdu",
					"other:recycle:read",
					"res:cookies",
					"res:cookies:curd",
					"res:env",
					"res:env:cdu",
					"res:env:read",
					"res:glob_param",
					"res:glob_param:cdu",
					"res:glob_param:read",
					"res:glob_var",
					"res:glob_var:cdu",
					"res:glob_var:read",
					"setting:basic",
					"setting:basic:read",
					"setting:code_dict:read",
					"setting:custom_attribute:read",
					"setting:custom_func",
					"setting:custom_func:cdu",
					"setting:custom_func:read",
					"setting:custom_mock",
					"setting:custom_mock:cdu",
					"setting:custom_mock:read",
					"setting:import",
					"setting:import:export",
					"setting:import:import",
					"setting:import:sync",
					"setting:mark",
					"setting:mark:cdu",
					"setting:mark:read",
					"setting:mock:read",
					"setting:webhook:read",
					"tests:report",
					"tests:report:cdu",
					"tests:report:read",
					"tests:scheduled",
					"tests:scheduled:cdu",
					"tests:scheduled:read",
					"tests:use_case",
					"tests:use_case:cdu",
					"tests:use_case:read"
				]
			},
			"upgrade_status": 0
		},
		{
			"project_id": "2d08339f1064000",
			"team_id": "29ed675b4064000",
			"name": "dddd",
			"intro": "",
			"is_lock": -1,
			"is_freeze": -1,
			"logo": "https://img.cdn.apipost.cn/test/default/icon/project/default_logo.png",
			"status": 1,
			"is_default": -1,
			"created_id": "471",
			"deleted_at": null,
			"deleted_user": {},
			"roles": {
				"is_admin": -1,
				"is_team_admin": 1,
				"is_project_admin": 1,
				"role": 2,
				"role_name": "读写",
				"permissions": [
					"apis:branch",
					"apis:branch:cdu",
					"apis:branch:read",
					"apis:generate_code",
					"apis:generate_code:read",
					"apis:load_tests",
					"apis:load_tests:cdu",
					"apis:load_tests:read",
					"apis:run",
					"apis:run:cdu",
					"apis:run:read",
					"apis:sample",
					"apis:sample:cdu",
					"apis:sample:read",
					"branch:branch:apply_read",
					"branch:branch:merge",
					"branch:branch:read",
					"dict:data",
					"dict:data:cdu",
					"dict:data:read",
					"dict:db",
					"dict:db:cdu",
					"dict:db:read",
					"dict:model",
					"dict:model:cdu",
					"dict:model:read",
					"docs:archive",
					"docs:archive:cdu",
					"docs:archive:read",
					"docs:issue",
					"docs:issue:cdu",
					"docs:issue:read",
					"other:history",
					"other:history:curd",
					"other:invite:read",
					"other:invite:write",
					"other:recently",
					"other:recently:curd",
					"other:recycle",
					"other:recycle:cdu",
					"other:recycle:read",
					"res:cookies",
					"res:cookies:curd",
					"res:env",
					"res:env:cdu",
					"res:env:read",
					"res:glob_param",
					"res:glob_param:cdu",
					"res:glob_param:read",
					"res:glob_var",
					"res:glob_var:cdu",
					"res:glob_var:read",
					"setting:basic",
					"setting:basic:read",
					"setting:code_dict:read",
					"setting:custom_attribute:read",
					"setting:custom_func",
					"setting:custom_func:cdu",
					"setting:custom_func:read",
					"setting:custom_mock",
					"setting:custom_mock:cdu",
					"setting:custom_mock:read",
					"setting:import",
					"setting:import:export",
					"setting:import:import",
					"setting:import:sync",
					"setting:mark",
					"setting:mark:cdu",
					"setting:mark:read",
					"setting:mock:read",
					"setting:webhook:read",
					"tests:report",
					"tests:report:cdu",
					"tests:report:read",
					"tests:scheduled",
					"tests:scheduled:cdu",
					"tests:scheduled:read",
					"tests:use_case",
					"tests:use_case:cdu",
					"tests:use_case:read"
				]
			},
			"upgrade_status": 0
		},
		{
			"project_id": "29ed675c2464001",
			"team_id": "29ed675b4064000",
			"name": "OnePiece",
			"intro": "",
			"is_lock": -1,
			"is_freeze": -1,
			"logo": "https://img.cdn.apipost.cn/test/default/icon/project/default_logo.png",
			"status": 1,
			"is_default": -1,
			"created_id": "471",
			"deleted_at": null,
			"deleted_user": {},
			"roles": {
				"is_admin": -1,
				"is_team_admin": 1,
				"is_project_admin": 1,
				"role": 2,
				"role_name": "读写",
				"permissions": [
					"apis:branch",
					"apis:branch:cdu",
					"apis:branch:read",
					"apis:generate_code",
					"apis:generate_code:read",
					"apis:load_tests",
					"apis:load_tests:cdu",
					"apis:load_tests:read",
					"apis:run",
					"apis:run:cdu",
					"apis:run:read",
					"apis:sample",
					"apis:sample:cdu",
					"apis:sample:read",
					"branch:branch:apply_read",
					"branch:branch:merge",
					"branch:branch:read",
					"dict:data",
					"dict:data:cdu",
					"dict:data:read",
					"dict:db",
					"dict:db:cdu",
					"dict:db:read",
					"dict:model",
					"dict:model:cdu",
					"dict:model:read",
					"docs:archive",
					"docs:archive:cdu",
					"docs:archive:read",
					"docs:issue",
					"docs:issue:cdu",
					"docs:issue:read",
					"other:history",
					"other:history:curd",
					"other:invite:read",
					"other:invite:write",
					"other:recently",
					"other:recently:curd",
					"other:recycle",
					"other:recycle:cdu",
					"other:recycle:read",
					"res:cookies",
					"res:cookies:curd",
					"res:env",
					"res:env:cdu",
					"res:env:read",
					"res:glob_param",
					"res:glob_param:cdu",
					"res:glob_param:read",
					"res:glob_var",
					"res:glob_var:cdu",
					"res:glob_var:read",
					"setting:basic",
					"setting:basic:read",
					"setting:code_dict:read",
					"setting:custom_attribute:read",
					"setting:custom_func",
					"setting:custom_func:cdu",
					"setting:custom_func:read",
					"setting:custom_mock",
					"setting:custom_mock:cdu",
					"setting:custom_mock:read",
					"setting:import",
					"setting:import:export",
					"setting:import:import",
					"setting:import:sync",
					"setting:mark",
					"setting:mark:cdu",
					"setting:mark:read",
					"setting:mock:read",
					"setting:webhook:read",
					"tests:report",
					"tests:report:cdu",
					"tests:report:read",
					"tests:scheduled",
					"tests:scheduled:cdu",
					"tests:scheduled:read",
					"tests:use_case",
					"tests:use_case:cdu",
					"tests:use_case:read"
				]
			},
			"upgrade_status": 0
		},
		{
			"project_id": "29ed675c2464000",
			"team_id": "29ed675b4064000",
			"name": "Stilwell个人项目222",
			"intro": "222",
			"is_lock": -1,
			"is_freeze": -1,
			"logo": "https://img.cdn.apipost.cn/test/upload/user/1137/log/a5ae45e5-2b73-4d59-9aa6-02b417f7df88.jpg",
			"status": 1,
			"is_default": 1,
			"created_id": "471",
			"deleted_at": null,
			"deleted_user": {},
			"roles": {
				"is_admin": -1,
				"is_team_admin": 1,
				"is_project_admin": 1,
				"role": 2,
				"role_name": "读写",
				"permissions": [
					"apis:branch",
					"apis:branch:cdu",
					"apis:branch:read",
					"apis:generate_code",
					"apis:generate_code:read",
					"apis:load_tests",
					"apis:load_tests:cdu",
					"apis:load_tests:read",
					"apis:run",
					"apis:run:cdu",
					"apis:run:read",
					"apis:sample",
					"apis:sample:cdu",
					"apis:sample:read",
					"branch:branch:apply_read",
					"branch:branch:merge",
					"branch:branch:read",
					"dict:data",
					"dict:data:cdu",
					"dict:data:read",
					"dict:db",
					"dict:db:cdu",
					"dict:db:read",
					"dict:model",
					"dict:model:cdu",
					"dict:model:read",
					"docs:archive",
					"docs:archive:cdu",
					"docs:archive:read",
					"docs:issue",
					"docs:issue:cdu",
					"docs:issue:read",
					"other:history",
					"other:history:curd",
					"other:invite:read",
					"other:invite:write",
					"other:recently",
					"other:recently:curd",
					"other:recycle",
					"other:recycle:cdu",
					"other:recycle:read",
					"res:cookies",
					"res:cookies:curd",
					"res:env",
					"res:env:cdu",
					"res:env:read",
					"res:glob_param",
					"res:glob_param:cdu",
					"res:glob_param:read",
					"res:glob_var",
					"res:glob_var:cdu",
					"res:glob_var:read",
					"setting:basic",
					"setting:basic:read",
					"setting:code_dict:read",
					"setting:custom_attribute:read",
					"setting:custom_func",
					"setting:custom_func:cdu",
					"setting:custom_func:read",
					"setting:custom_mock",
					"setting:custom_mock:cdu",
					"setting:custom_mock:read",
					"setting:import",
					"setting:import:export",
					"setting:import:import",
					"setting:import:sync",
					"setting:mark",
					"setting:mark:cdu",
					"setting:mark:read",
					"setting:mock:read",
					"setting:webhook:read",
					"tests:report",
					"tests:report:cdu",
					"tests:report:read",
					"tests:scheduled",
					"tests:scheduled:cdu",
					"tests:scheduled:read",
					"tests:use_case",
					"tests:use_case:cdu",
					"tests:use_case:read"
				]
			},
			"upgrade_status": 0
		},
		{
			"project_id": "205bb473fcf464",
			"team_id": "29ed675b4064000",
			"name": "Stilwell个人项目",
			"intro": "",
			"is_lock": -1,
			"is_freeze": -1,
			"logo": "https://img.cdn.apipost.cn/test/default/icon/project/default_logo.png",
			"status": 1,
			"is_default": -1,
			"created_id": "471",
			"deleted_at": null,
			"deleted_user": {},
			"roles": {
				"is_admin": -1,
				"is_team_admin": 1,
				"is_project_admin": 1,
				"role": 2,
				"role_name": "读写",
				"permissions": [
					"apis:branch",
					"apis:branch:cdu",
					"apis:branch:read",
					"apis:generate_code",
					"apis:generate_code:read",
					"apis:load_tests",
					"apis:load_tests:cdu",
					"apis:load_tests:read",
					"apis:run",
					"apis:run:cdu",
					"apis:run:read",
					"apis:sample",
					"apis:sample:cdu",
					"apis:sample:read",
					"branch:branch:apply_read",
					"branch:branch:merge",
					"branch:branch:read",
					"dict:data",
					"dict:data:cdu",
					"dict:data:read",
					"dict:db",
					"dict:db:cdu",
					"dict:db:read",
					"dict:model",
					"dict:model:cdu",
					"dict:model:read",
					"docs:archive",
					"docs:archive:cdu",
					"docs:archive:read",
					"docs:issue",
					"docs:issue:cdu",
					"docs:issue:read",
					"other:history",
					"other:history:curd",
					"other:invite:read",
					"other:invite:write",
					"other:recently",
					"other:recently:curd",
					"other:recycle",
					"other:recycle:cdu",
					"other:recycle:read",
					"res:cookies",
					"res:cookies:curd",
					"res:env",
					"res:env:cdu",
					"res:env:read",
					"res:glob_param",
					"res:glob_param:cdu",
					"res:glob_param:read",
					"res:glob_var",
					"res:glob_var:cdu",
					"res:glob_var:read",
					"setting:basic",
					"setting:basic:read",
					"setting:code_dict:read",
					"setting:custom_attribute:read",
					"setting:custom_func",
					"setting:custom_func:cdu",
					"setting:custom_func:read",
					"setting:custom_mock",
					"setting:custom_mock:cdu",
					"setting:custom_mock:read",
					"setting:import",
					"setting:import:export",
					"setting:import:import",
					"setting:import:sync",
					"setting:mark",
					"setting:mark:cdu",
					"setting:mark:read",
					"setting:mock:read",
					"setting:webhook:read",
					"tests:report",
					"tests:report:cdu",
					"tests:report:read",
					"tests:scheduled",
					"tests:scheduled:cdu",
					"tests:scheduled:read",
					"tests:use_case",
					"tests:use_case:cdu",
					"tests:use_case:read"
				]
			},
			"upgrade_status": 0
		},
		{
			"project_id": "10be9b46b3e0b3",
			"team_id": "29ed675b4064000",
			"name": "Swagger Petstore",
			"intro": "This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.",
			"is_lock": -1,
			"is_freeze": -1,
			"logo": "https://img.cdn.apipost.cn/test/upload/user/1137/log/0821e450-bfbd-4f79-bc09-8cdead2c9690.png",
			"status": 1,
			"is_default": -1,
			"created_id": "471",
			"deleted_at": null,
			"deleted_user": {},
			"roles": {
				"is_admin": -1,
				"is_team_admin": 1,
				"is_project_admin": 1,
				"role": 2,
				"role_name": "读写",
				"permissions": [
					"apis:branch",
					"apis:branch:cdu",
					"apis:branch:read",
					"apis:generate_code",
					"apis:generate_code:read",
					"apis:load_tests",
					"apis:load_tests:cdu",
					"apis:load_tests:read",
					"apis:run",
					"apis:run:cdu",
					"apis:run:read",
					"apis:sample",
					"apis:sample:cdu",
					"apis:sample:read",
					"branch:branch:apply_read",
					"branch:branch:merge",
					"branch:branch:read",
					"dict:data",
					"dict:data:cdu",
					"dict:data:read",
					"dict:db",
					"dict:db:cdu",
					"dict:db:read",
					"dict:model",
					"dict:model:cdu",
					"dict:model:read",
					"docs:archive",
					"docs:archive:cdu",
					"docs:archive:read",
					"docs:issue",
					"docs:issue:cdu",
					"docs:issue:read",
					"other:history",
					"other:history:curd",
					"other:invite:read",
					"other:invite:write",
					"other:recently",
					"other:recently:curd",
					"other:recycle",
					"other:recycle:cdu",
					"other:recycle:read",
					"res:cookies",
					"res:cookies:curd",
					"res:env",
					"res:env:cdu",
					"res:env:read",
					"res:glob_param",
					"res:glob_param:cdu",
					"res:glob_param:read",
					"res:glob_var",
					"res:glob_var:cdu",
					"res:glob_var:read",
					"setting:basic",
					"setting:basic:read",
					"setting:code_dict:read",
					"setting:custom_attribute:read",
					"setting:custom_func",
					"setting:custom_func:cdu",
					"setting:custom_func:read",
					"setting:custom_mock",
					"setting:custom_mock:cdu",
					"setting:custom_mock:read",
					"setting:import",
					"setting:import:export",
					"setting:import:import",
					"setting:import:sync",
					"setting:mark",
					"setting:mark:cdu",
					"setting:mark:read",
					"setting:mock:read",
					"setting:webhook:read",
					"tests:report",
					"tests:report:cdu",
					"tests:report:read",
					"tests:scheduled",
					"tests:scheduled:cdu",
					"tests:scheduled:read",
					"tests:use_case",
					"tests:use_case:cdu",
					"tests:use_case:read"
				]
			},
			"upgrade_status": 0
		}
	],
	"time": "2025-12-23T10:24:45.485245+08:00",
	"extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| data | - | array | - |
| data.project_id | 585b3bf18c01000 | string | 项目 |
| data.project_code | Stilwell个人项目222 | string | - |
| data.team_id | 29ed675b4064000 | string | 团队 |
| data.name | 项目名称 | string | 名称 |
| data.intro | 项目描述简介 | string | 简介 |
| data.is_lock | -1 | integer | 是否锁定 1是 -1否 |
| data.is_freeze | -1 | number | - |
| data.logo | https://img.cdn.apipost.cn/test/default/icon/project/default_logo.png | string | logo |
| data.status | 1 | integer | - |
| data.is_default | -1 | number | 是否为默认项目 1是 -1否 |
| data.created_id | 471 | string | 创建人id |
| data.deleted_at | - | null | - |
| data.deleted_user | - | object | - |
| data.roles | - | object | 角色权限 |
| data.roles.is_admin | -1 | integer | 是否企业超管 1是 -1否 |
| data.roles.is_team_admin | 1 | integer | 是否是团队管理员 1是 -1否 |
| data.roles.is_project_admin | 1 | integer | 是否是项目管理员 1是 -1否 |
| data.roles.role | 2 | integer | 权限角色对象 |
| data.roles.role_name | 读写 | string | 角色名称 |
| data.roles.permissions | - | array | 角色权限标记 |
| data.upgrade_status | 0 | number | - |
| time | 2025-12-23T10:24:45.485245+08:00 | string | - |
| extra_err | - | object | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

### 获取项目成员列表

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2026-03-26 16:07:00

> 更新时间: 2026-04-28 14:57:42

**标签**

> v1.19.0以上

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/user/list?project_id={{project_id}}

**请求方式**

> GET

**Content-Type**

> json

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | 项目id |
| project_code | {{project_code}} | string | 是 | - |

**请求Body参数**

```javascript
暂无数据
```

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
    "code": 0,
    "msg": "成功",
    "data": [
        {
            "role": 2,
            "role_name": "读写",
            "nick_name": "mengchangsai",
            "alias_name": null,
            "email": "mengchangsai@apipost.cn",
            "portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png",
            "is_project_admin": -1,
            "uid": "1bfd286821026001",
            "openid": "mengchangsai@apipost.cn",
            "is_team_admin": 1
        },
        {
            "role": 2,
            "role_name": "读写",
            "nick_name": "fengtaotao",
            "alias_name": null,
            "email": "fengtaotaox@gmail.com",
            "portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png",
            "is_project_admin": -1,
            "uid": "1bfd290991c26002",
            "openid": "fengtaotaox@gmail.com",
            "is_team_admin": 1
        }
    ],
    "time": "2026-04-28T14:57:32.426225+08:00",
    "extra_err": {}
}
```

* 失败(404)

```javascript
暂无数据
```

**Query**

### 全局管理

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2025-12-22 15:51:20

> 更新时间: 2025-12-23 14:27:58

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

#### 全局参数

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2025-12-22 15:51:20

> 更新时间: 2025-12-23 14:27:52

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

##### 详情

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2025-12-22 15:51:20

> 更新时间: 2026-01-09 18:30:31

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/global/param/details?project_id={{project_id}}&project_code={{project_code}}

**请求方式**

> GET

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | id和code 传一个即可 id是当前系统的唯一标记，code是第三方平台的唯一标记。 |
| project_code | {{project_code}} | string | 否 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {
		"global_param": {
			"header": {
				"parameter": [
					{
						"param_id": "239de61b3001000",
						"description": "",
						"field_type": "String",
						"is_checked": 1, /*  */
						"key": "1",
						"value": "2",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "239de61b3001001",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca08535001000",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "123",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca08535001001",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "123",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca08535001002",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"value": "",
						"not_null": 1,
						"sort": 0
					}
				]
			},
			"query": {
				"parameter": [
					{
						"param_id": "239de61b3001002",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca08535001003",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"value": "",
						"not_null": 1,
						"sort": 0
					}
				]
			},
			"body": {
				"parameter": [
					{
						"param_id": "239de61b3001003",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca08535001004",
						"description": "认证令牌",
						"field_type": "String",
						"is_checked": 1,
						"key": "456",
						"value": "456",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca08535001005",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"value": "",
						"not_null": 1,
						"sort": 0
					}
				]
			},
			"cookie": {
				"parameter": [
					{
						"param_id": "23ca08535001006",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "12312",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca08535001007",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "12312312",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca08535001008",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca08535001009",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca0853500100a",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "321",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca0853500100b",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "123321",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca0853500100c",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca0853500100d",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca0853500100e",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca0853500100f",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca08535001010",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "123",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca08535001011",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "123",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca08535001012",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca08535001013",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca08535001014",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca08535001015",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca08535001016",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca08535001017",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca08535001018",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca08535001019",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "cy",
						"value": "123",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca0853500101a",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca0853500101b",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca0853500101c",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"value": "",
						"not_null": 1,
						"sort": 0
					},
					{
						"param_id": "23ca0853500101d",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"value": "",
						"not_null": 1,
						"sort": 0
					}
				]
			},
			"auth": {
				"type": "basic",
				"kv": {
					"key": "",
					"value": ""
				},
				"bearer": {
					"key": ""
				},
				"basic": {
					"username": "231123213",
					"password": ""
				},
				"digest": {
					"username": "",
					"password": "",
					"realm": "",
					"nonce": "",
					"algorithm": "",
					"qop": "",
					"nc": "",
					"cnonce": "",
					"opaque": ""
				},
				"hawk": {
					"authId": "",
					"authKey": "",
					"algorithm": "",
					"user": "",
					"nonce": "",
					"extraData": "",
					"app": "",
					"delegation": "",
					"timestamp": "",
					"includePayloadHash": 0
				},
				"awsv4": {
					"accessKey": "",
					"secretKey": "",
					"region": "",
					"service": "",
					"sessionToken": "",
					"addAuthDataToQuery": 0
				},
				"ntlm": {
					"username": "",
					"password": "",
					"domain": "",
					"workstation": "",
					"disableRetryRequest": 0
				},
				"edgegrid": {
					"accessToken": "",
					"clientToken": "",
					"clientSecret": "",
					"nonce": "",
					"timestamp": "",
					"baseURi": "",
					"headersToSign": ""
				},
				"oauth1": {
					"consumerKey": "",
					"consumerSecret": "",
					"signatureMethod": "",
					"addEmptyParamsToSign": 0,
					"includeBodyHash": 0,
					"addParamsToHeader": 0,
					"realm": "",
					"version": "",
					"nonce": "",
					"timestamp": "",
					"verifier": "",
					"callback": "",
					"tokenSecret": "",
					"token": ""
				}
			},
			"pre_tasks": [
				{
					"id": "20e402921801000",
					"type": "customScript",
					"enabled": 1,
					"data": "/*\n\t// 参考文档：https://v7-wiki.apipost.cn/docs/2112\n\t// 通过 fs.readFileSync(file,charset) 读取本地文件并赋值给变量\n\ttry {\n\tvar data = fs.readFileSync(\"/Users/apipost/bytenode_v2/test-data.csv\", \"utf-8\");\n\tconsole.log(csv2array(data));\n\t// 该csv文件内容如下\n\t\n\t// phone,nickname\n\t// 1,aa\n\t// 2,bb\n\t// 3,cc\n\t// 4,dd\n\t// 5,ece e\n\t\n\tlet arrData = csv2array(data); // 通过内置的 csv2array 函数将 csv 转成数组\n\t\n\tconsole.log(arrData)\n\t\n\t_.forEach(arrData[parseInt(apt.info.iteration)], function (value, key) { // apt.info.iteration 代表自动化测试中正在执行第几次循环，API单接口调试时，该值一直为 0\n\t\tapt.environment.set(key, value); // 当前遍历到的数据赋给环境变量\n\t});\n\t} catch (err) {\n\t// 出错了\n\t}\n*/"
				},
				{
					"id": "2003becfa401000",
					"type": "database",
					"enabled": 1,
					"data": {
						"connectionId": "",
						"isConsoleOutput": -1,
						"query": null,
						"variables": []
					}
				}
			],
			"post_tasks": [
				{
					"id": "20e402921801000",
					"type": "customScript",
					"enabled": 1,
					"data": "/*\n\t// 参考文档：https://v7-wiki.apipost.cn/docs/2112\n\t// 通过 fs.readFileSync(file,charset) 读取本地文件并赋值给变量\n\ttry {\n\tvar data = fs.readFileSync(\"/Users/apipost/bytenode_v2/test-data.csv\", \"utf-8\");\n\tconsole.log(csv2array(data));\n\t// 该csv文件内容如下\n\t\n\t// phone,nickname\n\t// 1,aa\n\t// 2,bb\n\t// 3,cc\n\t// 4,dd\n\t// 5,ece e\n\t\n\tlet arrData = csv2array(data); // 通过内置的 csv2array 函数将 csv 转成数组\n\t\n\tconsole.log(arrData)\n\t\n\t_.forEach(arrData[parseInt(apt.info.iteration)], function (value, key) { // apt.info.iteration 代表自动化测试中正在执行第几次循环，API单接口调试时，该值一直为 0\n\t\tapt.environment.set(key, value); // 当前遍历到的数据赋给环境变量\n\t});\n\t} catch (err) {\n\t// 出错了\n\t}\n*/"
				},
				{
					"id": "2003becfa401000",
					"type": "database",
					"enabled": 1,
					"data": {
						"query": null,
						"variables": [],
						"connectionId": "",
						"isConsoleOutput": -1
					}
				}
			]
		}
	},
	"time": "2024-03-09T14:27:05.3437887+08:00"
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | team_id 或 team_code 传一个即可，如都传如则以team_id为准。 |
| msg | 成功 | string | - |
| data | - | object | - |
| data.global_param | - | object | - |
| data.global_param.header | - | object | - |
| data.global_param.header.parameter | - | array | - |
| data.global_param.header.parameter.param_id | 239de61b3001000 | string | - |
| data.global_param.header.parameter.description | - | string | - |
| data.global_param.header.parameter.field_type | String | string | 类型 |
| data.global_param.header.parameter.is_checked | 1 | integer | - |
| data.global_param.header.parameter.key | 1 | string | 类型: name,intro,logo,default_mark |
| data.global_param.header.parameter.value | 2 | string | 如果是is_describe_library 值是int 1开启 -1关闭 |
| data.global_param.header.parameter.not_null | 1 | integer | - |
| data.global_param.header.parameter.sort | 0 | integer | - |
| data.global_param.query | - | object | - |
| data.global_param.query.parameter | - | array | - |
| data.global_param.query.parameter.param_id | 239de61b3001002 | string | - |
| data.global_param.query.parameter.description | - | string | - |
| data.global_param.query.parameter.field_type | String | string | 类型 |
| data.global_param.query.parameter.is_checked | 1 | integer | - |
| data.global_param.query.parameter.key | - | string | 类型: name,intro,logo,default_mark |
| data.global_param.query.parameter.value | - | string | 如果是is_describe_library 值是int 1开启 -1关闭 |
| data.global_param.query.parameter.not_null | 1 | integer | - |
| data.global_param.query.parameter.sort | 0 | integer | - |
| data.global_param.body | - | object | - |
| data.global_param.body.parameter | - | array | - |
| data.global_param.body.parameter.param_id | 239de61b3001003 | string | - |
| data.global_param.body.parameter.description | - | string | - |
| data.global_param.body.parameter.field_type | String | string | 类型 |
| data.global_param.body.parameter.is_checked | 1 | integer | - |
| data.global_param.body.parameter.key | - | string | 类型: name,intro,logo,default_mark |
| data.global_param.body.parameter.value | - | string | 如果是is_describe_library 值是int 1开启 -1关闭 |
| data.global_param.body.parameter.not_null | 1 | integer | - |
| data.global_param.body.parameter.sort | 0 | integer | - |
| data.global_param.cookie | - | object | - |
| data.global_param.cookie.parameter | - | array | - |
| data.global_param.cookie.parameter.param_id | 23ca08535001006 | string | - |
| data.global_param.cookie.parameter.description | - | string | - |
| data.global_param.cookie.parameter.field_type | String | string | 类型 |
| data.global_param.cookie.parameter.is_checked | 1 | integer | - |
| data.global_param.cookie.parameter.key | 12312 | string | 类型: name,intro,logo,default_mark |
| data.global_param.cookie.parameter.value | - | string | 如果是is_describe_library 值是int 1开启 -1关闭 |
| data.global_param.cookie.parameter.not_null | 1 | integer | - |
| data.global_param.cookie.parameter.sort | 0 | integer | - |
| data.global_param.auth | - | object | - |
| data.global_param.auth.type | basic | string | - |
| data.global_param.auth.kv | - | object | - |
| data.global_param.auth.kv.key | - | string | 类型: name,intro,logo,default_mark |
| data.global_param.auth.kv.value | - | string | 如果是is_describe_library 值是int 1开启 -1关闭 |
| data.global_param.auth.bearer | - | object | - |
| data.global_param.auth.bearer.key | - | string | 类型: name,intro,logo,default_mark |
| data.global_param.auth.basic | - | object | - |
| data.global_param.auth.basic.username | 231123213 | string | - |
| data.global_param.auth.basic.password | - | string | - |
| data.global_param.auth.digest | - | object | - |
| data.global_param.auth.digest.username | - | string | - |
| data.global_param.auth.digest.password | - | string | - |
| data.global_param.auth.digest.realm | - | string | - |
| data.global_param.auth.digest.nonce | - | string | - |
| data.global_param.auth.digest.algorithm | - | string | - |
| data.global_param.auth.digest.qop | - | string | - |
| data.global_param.auth.digest.nc | - | string | - |
| data.global_param.auth.digest.cnonce | - | string | - |
| data.global_param.auth.digest.opaque | - | string | - |
| data.global_param.auth.hawk | - | object | - |
| data.global_param.auth.hawk.authId | - | string | - |
| data.global_param.auth.hawk.authKey | - | string | - |
| data.global_param.auth.hawk.algorithm | - | string | - |
| data.global_param.auth.hawk.user | - | string | - |
| data.global_param.auth.hawk.nonce | - | string | - |
| data.global_param.auth.hawk.extraData | - | string | - |
| data.global_param.auth.hawk.app | - | string | - |
| data.global_param.auth.hawk.delegation | - | string | - |
| data.global_param.auth.hawk.timestamp | - | string | - |
| data.global_param.auth.hawk.includePayloadHash | 0 | integer | - |
| data.global_param.auth.awsv4 | - | object | - |
| data.global_param.auth.awsv4.accessKey | - | string | - |
| data.global_param.auth.awsv4.secretKey | - | string | - |
| data.global_param.auth.awsv4.region | - | string | - |
| data.global_param.auth.awsv4.service | - | string | - |
| data.global_param.auth.awsv4.sessionToken | - | string | - |
| data.global_param.auth.awsv4.addAuthDataToQuery | 0 | integer | - |
| data.global_param.auth.ntlm | - | object | - |
| data.global_param.auth.ntlm.username | - | string | - |
| data.global_param.auth.ntlm.password | - | string | - |
| data.global_param.auth.ntlm.domain | - | string | - |
| data.global_param.auth.ntlm.workstation | - | string | - |
| data.global_param.auth.ntlm.disableRetryRequest | 0 | integer | - |
| data.global_param.auth.edgegrid | - | object | - |
| data.global_param.auth.edgegrid.accessToken | - | string | - |
| data.global_param.auth.edgegrid.clientToken | - | string | - |
| data.global_param.auth.edgegrid.clientSecret | - | string | - |
| data.global_param.auth.edgegrid.nonce | - | string | - |
| data.global_param.auth.edgegrid.timestamp | - | string | - |
| data.global_param.auth.edgegrid.baseURi | - | string | - |
| data.global_param.auth.edgegrid.headersToSign | - | string | - |
| data.global_param.auth.oauth1 | - | object | - |
| data.global_param.auth.oauth1.consumerKey | - | string | - |
| data.global_param.auth.oauth1.consumerSecret | - | string | - |
| data.global_param.auth.oauth1.signatureMethod | - | string | - |
| data.global_param.auth.oauth1.addEmptyParamsToSign | 0 | integer | - |
| data.global_param.auth.oauth1.includeBodyHash | 0 | integer | - |
| data.global_param.auth.oauth1.addParamsToHeader | 0 | integer | - |
| data.global_param.auth.oauth1.realm | - | string | - |
| data.global_param.auth.oauth1.version | - | string | - |
| data.global_param.auth.oauth1.nonce | - | string | - |
| data.global_param.auth.oauth1.timestamp | - | string | - |
| data.global_param.auth.oauth1.verifier | - | string | - |
| data.global_param.auth.oauth1.callback | - | string | - |
| data.global_param.auth.oauth1.tokenSecret | - | string | - |
| data.global_param.auth.oauth1.token | - | string | - |
| data.global_param.pre_tasks | - | array | - |
| data.global_param.pre_tasks.id | 20e402921801000 | string | - |
| data.global_param.pre_tasks.type | customScript | string | - |
| data.global_param.pre_tasks.enabled | 1 | integer | - |
| data.global_param.pre_tasks.data | /*	// 参考文档：https://v7-wiki.apipost.cn/docs/2112	// 通过 fs.readFileSync(file,charset) 读取本地文件并赋值给变量	try {	var data = fs.readFileSync("/Users/apipost/bytenode_v2/test-data.csv", "utf-8");	console.log(csv2array(data));	// 该csv文件内容如下		// phone,nickname	// 1,aa	// 2,bb	// 3,cc	// 4,dd	// 5,ece e		let arrData = csv2array(data); // 通过内置的 csv2array 函数将 csv 转成数组		console.log(arrData)		_.forEach(arrData[parseInt(apt.info.iteration)], function (value, key) { // apt.info.iteration 代表自动化测试中正在执行第几次循环，API单接口调试时，该值一直为 0		apt.environment.set(key, value); // 当前遍历到的数据赋给环境变量	});	} catch (err) {	// 出错了	}*/ | string | - |
| data.global_param.pre_tasks.data.connectionId | - | string | - |
| data.global_param.pre_tasks.data.isConsoleOutput | -1 | number | - |
| data.global_param.pre_tasks.data.query | - | null | - |
| data.global_param.pre_tasks.data.variables | - | array | - |
| data.global_param.post_tasks | - | array | - |
| data.global_param.post_tasks.id | 20e402921801000 | string | - |
| data.global_param.post_tasks.type | customScript | string | - |
| data.global_param.post_tasks.enabled | 1 | integer | - |
| data.global_param.post_tasks.data | /*	// 参考文档：https://v7-wiki.apipost.cn/docs/2112	// 通过 fs.readFileSync(file,charset) 读取本地文件并赋值给变量	try {	var data = fs.readFileSync("/Users/apipost/bytenode_v2/test-data.csv", "utf-8");	console.log(csv2array(data));	// 该csv文件内容如下		// phone,nickname	// 1,aa	// 2,bb	// 3,cc	// 4,dd	// 5,ece e		let arrData = csv2array(data); // 通过内置的 csv2array 函数将 csv 转成数组		console.log(arrData)		_.forEach(arrData[parseInt(apt.info.iteration)], function (value, key) { // apt.info.iteration 代表自动化测试中正在执行第几次循环，API单接口调试时，该值一直为 0		apt.environment.set(key, value); // 当前遍历到的数据赋给环境变量	});	} catch (err) {	// 出错了	}*/ | string | - |
| data.global_param.post_tasks.data.query | - | null | - |
| data.global_param.post_tasks.data.variables | - | array | - |
| data.global_param.post_tasks.data.connectionId | - | string | - |
| data.global_param.post_tasks.data.isConsoleOutput | -1 | number | - |
| time | 2024-03-09T14:27:05.3437887+08:00 | string | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

##### 保存

> 创建人: Stilwell

> 更新人: 周义凯

> 创建时间: 2025-12-22 15:51:20

> 更新时间: 2026-04-10 16:24:59

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/global/param/save

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"project_id": "{{project_id}}",
	"project_code": "{{project_code}}",
	"global_param": {
		"header": {
			"parameter": [
				{
					"description": "",
					"field_type": "String",
					"is_checked": 1,
					"key": "123",
					"value": "",
					"not_null": 1,
					"type": "Text",
					"param_id": "2445c7f638300b" //id可选项，如果是通过获取详情中的数据拿到的 建议保持原样，如果是新增的数据那么建议不填该字段或者补"0" 雪花的十六进制0即可
				}
			]
		},
		"query": {
			"parameter": [
				{
					"description": "",
					"field_type": "String",
					"is_checked": 1,
					"key": "",
					"value": "",
					"not_null": 1,
					"type": "Text",
					"static": true,
					"param_id": "24461661b8300d"
				}
			]
		},
		"body": {
			"parameter": [
				{
					"description": "认证令牌",
					"field_type": "String",
					"is_checked": 1,
					"key": "456",
					"value": "456",
					"not_null": 1,
					"type": "Text",
					"param_id": "2445c8a078300c"
				}
			]
		},
		"cookie": {
			"parameter": [
				{
					"description": "",
					"field_type": "String",
					"is_checked": 1,
					"key": "12312",
					"value": "",
					"not_null": 1,
					"sort": 0
				}
			]
		},
		"auth": {
			"type": "basic",
			"kv": {
				"key": "",
				"value": ""
			},
			"bearer": {
				"key": ""
			},
			"basic": {
				"username": "231123213",
				"password": ""
			},
			"digest": {
				"username": "",
				"password": "",
				"realm": "",
				"nonce": "",
				"algorithm": "",
				"qop": "",
				"nc": "",
				"cnonce": "",
				"opaque": ""
			},
			"hawk": {
				"authId": "",
				"authKey": "",
				"algorithm": "",
				"user": "",
				"nonce": "",
				"extraData": "",
				"app": "",
				"delegation": "",
				"timestamp": "",
				"includePayloadHash": 0
			},
			"awsv4": {
				"accessKey": "",
				"secretKey": "",
				"region": "",
				"service": "",
				"sessionToken": "",
				"addAuthDataToQuery": 0
			},
			"ntlm": {
				"username": "",
				"password": "",
				"domain": "",
				"workstation": "",
				"disableRetryRequest": 0
			},
			"edgegrid": {
				"accessToken": "",
				"clientToken": "",
				"clientSecret": "",
				"nonce": "",
				"timestamp": "",
				"baseURi": "",
				"headersToSign": ""
			},
			"oauth1": {
				"consumerKey": "",
				"consumerSecret": "",
				"signatureMethod": "",
				"addEmptyParamsToSign": 0,
				"includeBodyHash": 0,
				"addParamsToHeader": 0,
				"realm": "",
				"version": "",
				"nonce": "",
				"timestamp": "",
				"verifier": "",
				"callback": "",
				"tokenSecret": "",
				"token": ""
			}
		},
		"pre_tasks": [
			{
				"type": "customScript",
				"name": "自定义脚本",
				"enabled": 1,
				"data": ""
			}
		],
		"post_tasks": [
			{
				"type": "customScript",
				"name": "自定义脚本",
				"enabled": 1,
				"data": ""
			}
		]
	}
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | - |
| project_code | {{project_code}} | string | 是 | id 或 code 传一个即可，如都传如则以id为准。 |
| global_param | - | object | 是 | - |
| global_param.header | - | array | 是 | header对象 |
| global_param.header.parameter | - | array | 否 | - |
| global_param.header.parameter.description | - | string | 是 | 描述 |
| global_param.header.parameter.field_type | String | string | 是 | 类型: |
| global_param.header.parameter.is_checked | 1 | number | 是 | 是否必填 |
| global_param.header.parameter.key | 123 | string | 是 | 参数名 |
| global_param.header.parameter.value | - | string | 是 | 参数值 |
| global_param.header.parameter.not_null | 1 | number | 是 | 是否为空 1是 -1否 |
| global_param.header.parameter.type | Text | string | 是 | 类型 |
| global_param.header.parameter.param_id | 2445c7f638300b | string | 否 | id可选项，如果是通过获取详情中的数据拿到的 建议保持原样，如果是新增的数据那么建议不填该字段或者补"0" 雪花的十六进制0即可 |
| global_param.query | - | array | 是 | - |
| global_param.query.parameter | - | array | 否 | - |
| global_param.query.parameter.description | - | string | 否 | - |
| global_param.query.parameter.field_type | String | string | 否 | - |
| global_param.query.parameter.is_checked | 1 | number | 否 | - |
| global_param.query.parameter.key | - | string | 否 | - |
| global_param.query.parameter.value | - | string | 否 | - |
| global_param.query.parameter.not_null | 1 | number | 否 | - |
| global_param.query.parameter.type | Text | string | 否 | - |
| global_param.query.parameter.static | true | boolean | 否 | - |
| global_param.query.parameter.param_id | 24461661b8300d | string | 否 | id可选项，如果是通过获取详情中的数据拿到的 建议保持原样，如果是新增的数据那么建议不填该字段或者补"0" 雪花的十六进制0即可 |
| global_param.body | - | array | 是 | - |
| global_param.body.parameter | - | array | 否 | - |
| global_param.body.parameter.description | 认证令牌 | string | 是 | 描述 |
| global_param.body.parameter.field_type | String | string | 是 | - |
| global_param.body.parameter.is_checked | 1 | number | 是 | - |
| global_param.body.parameter.key | 456 | string | 是 | - |
| global_param.body.parameter.value | 456 | string | 是 | - |
| global_param.body.parameter.not_null | 1 | number | 是 | - |
| global_param.body.parameter.type | Text | string | 是 | - |
| global_param.body.parameter.param_id | 2445c8a078300c | string | 是 | id可选项，如果是通过获取详情中的数据拿到的 建议保持原样，如果是新增的数据那么建议不填该字段或者补"0" 雪花的十六进制0即可 |
| global_param.cookie | - | array | 是 | - |
| global_param.cookie.parameter | - | array | 否 | - |
| global_param.cookie.parameter.description | - | string | 是 | - |
| global_param.cookie.parameter.field_type | String | string | 是 | - |
| global_param.cookie.parameter.is_checked | 1 | number | 是 | - |
| global_param.cookie.parameter.key | 12312 | string | 是 | - |
| global_param.cookie.parameter.value | - | string | 是 | - |
| global_param.cookie.parameter.not_null | 1 | number | 是 | - |
| global_param.cookie.parameter.sort | 0 | number | 是 | - |
| global_param.auth | - | object | 是 | - |
| global_param.auth.type | basic | string | 是 | - |
| global_param.auth.kv | - | object | 是 | - |
| global_param.auth.kv.key | - | string | 是 | - |
| global_param.auth.kv.value | - | string | 是 | - |
| global_param.auth.bearer | - | object | 是 | - |
| global_param.auth.bearer.key | - | string | 是 | - |
| global_param.auth.basic | - | object | 是 | - |
| global_param.auth.basic.username | 231123213 | string | 是 | - |
| global_param.auth.basic.password | - | string | 是 | - |
| global_param.auth.digest | - | object | 是 | - |
| global_param.auth.digest.username | - | string | 是 | - |
| global_param.auth.digest.password | - | string | 是 | - |
| global_param.auth.digest.realm | - | string | 是 | - |
| global_param.auth.digest.nonce | - | string | 是 | - |
| global_param.auth.digest.algorithm | - | string | 是 | - |
| global_param.auth.digest.qop | - | string | 是 | - |
| global_param.auth.digest.nc | - | string | 是 | - |
| global_param.auth.digest.cnonce | - | string | 是 | - |
| global_param.auth.digest.opaque | - | string | 是 | - |
| global_param.auth.hawk | - | object | 是 | - |
| global_param.auth.hawk.authId | - | string | 是 | - |
| global_param.auth.hawk.authKey | - | string | 是 | - |
| global_param.auth.hawk.algorithm | - | string | 是 | - |
| global_param.auth.hawk.user | - | string | 是 | - |
| global_param.auth.hawk.nonce | - | string | 是 | - |
| global_param.auth.hawk.extraData | - | string | 是 | - |
| global_param.auth.hawk.app | - | string | 是 | - |
| global_param.auth.hawk.delegation | - | string | 是 | - |
| global_param.auth.hawk.timestamp | - | string | 是 | - |
| global_param.auth.hawk.includePayloadHash | 0 | number | 是 | - |
| global_param.auth.awsv4 | - | object | 是 | - |
| global_param.auth.awsv4.accessKey | - | string | 是 | - |
| global_param.auth.awsv4.secretKey | - | string | 是 | - |
| global_param.auth.awsv4.region | - | string | 是 | - |
| global_param.auth.awsv4.service | - | string | 是 | - |
| global_param.auth.awsv4.sessionToken | - | string | 是 | - |
| global_param.auth.awsv4.addAuthDataToQuery | 0 | number | 是 | - |
| global_param.auth.ntlm | - | object | 是 | - |
| global_param.auth.ntlm.username | - | string | 是 | - |
| global_param.auth.ntlm.password | - | string | 是 | - |
| global_param.auth.ntlm.domain | - | string | 是 | - |
| global_param.auth.ntlm.workstation | - | string | 是 | - |
| global_param.auth.ntlm.disableRetryRequest | 0 | number | 是 | - |
| global_param.auth.edgegrid | - | object | 是 | - |
| global_param.auth.edgegrid.accessToken | - | string | 是 | - |
| global_param.auth.edgegrid.clientToken | - | string | 是 | - |
| global_param.auth.edgegrid.clientSecret | - | string | 是 | - |
| global_param.auth.edgegrid.nonce | - | string | 是 | - |
| global_param.auth.edgegrid.timestamp | - | string | 是 | - |
| global_param.auth.edgegrid.baseURi | - | string | 是 | - |
| global_param.auth.edgegrid.headersToSign | - | string | 是 | - |
| global_param.auth.oauth1 | - | object | 是 | - |
| global_param.auth.oauth1.consumerKey | - | string | 是 | - |
| global_param.auth.oauth1.consumerSecret | - | string | 是 | - |
| global_param.auth.oauth1.signatureMethod | - | string | 是 | - |
| global_param.auth.oauth1.addEmptyParamsToSign | 0 | number | 是 | - |
| global_param.auth.oauth1.includeBodyHash | 0 | number | 是 | - |
| global_param.auth.oauth1.addParamsToHeader | 0 | number | 是 | - |
| global_param.auth.oauth1.realm | - | string | 是 | - |
| global_param.auth.oauth1.version | - | string | 是 | - |
| global_param.auth.oauth1.nonce | - | string | 是 | - |
| global_param.auth.oauth1.timestamp | - | string | 是 | - |
| global_param.auth.oauth1.verifier | - | string | 是 | - |
| global_param.auth.oauth1.callback | - | string | 是 | - |
| global_param.auth.oauth1.tokenSecret | - | string | 是 | - |
| global_param.auth.oauth1.token | - | string | 是 | - |
| global_param.pre_tasks | - | array | 否 | 预执行操作 |
| global_param.pre_tasks.type | customScript | string | 是 | - |
| global_param.pre_tasks.name | 自定义脚本 | string | 是 | 脚本名称 |
| global_param.pre_tasks.enabled | 1 | number | 是 | 是否启用 1是 -1否 |
| global_param.pre_tasks.data | - | string | 是 | 类型对象 |
| global_param.post_tasks | - | array | 否 | 后执行操作 |
| global_param.post_tasks.type | customScript | string | 是 | 类型： |
| global_param.post_tasks.name | 自定义脚本 | string | 是 | - |
| global_param.post_tasks.enabled | 1 | number | 是 | - |
| global_param.post_tasks.data | - | string | 是 | 类型数据对象 |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {},
	"time": "2024-03-09T14:25:37.6749641+08:00"
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| data | - | object | - |
| time | 2024-03-09T14:25:37.6749641+08:00 | string | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

### 接口属性管理

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2025-12-22 15:51:32

> 更新时间: 2026-01-12 20:55:59

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

#### 更新

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2025-12-22 15:51:32

> 更新时间: 2026-01-27 20:23:25

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/customattribute/up

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"attribute_id": "586a16419c01000",
	"project_id": "{{project_id}}",
	// "project_code": "{{project_code}}",
	"field_name": "@cname()",
	"field_type": 1,
	"enable": 1,
	"tooltip": "222xxxxxx",
	"sort": 1,
	"extra": [
		{
			"key": "1746779506997202966",
			"label": "",
			"value": "21"
		},
		{
			"key": "1746779506997202977",
			"label": "",
			"value": "222"
		}
	]
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| attribute_id | 141975485998436352 | string | 是 | - |
| project_id | {{project_id}} | string | 是 | - |
| field_name | Shirley Moore | string | 是 | max=64 参数名称不能重复 |
| field_type | 1 | integer | 是 | 类型：1.文本 2.数字 3.单选 4.多选 5.日期 6.链接 7邮箱 |
| enable | 1 | integer | 是 | 开启状态  1.开启  -1关闭 |
| tooltip | 222 | string | 是 | max=128 |
| sort | 1 | integer | 是 | - |
| extra | - | array | 是 | - |
| extra.key | 1746779506997202966 | string | 是 | 类型: name,intro,logo,default_mark |
| extra.label | - | string | 是 | - |
| extra.value | 21 | string | 是 | - |
| open_api_field | - | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"msg_en": "success",
	"time": 1704682174
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| time | 1704682174 | integer | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

#### 创建

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2025-12-22 15:51:32

> 更新时间: 2026-01-27 20:23:28

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/customattribute/add

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
    "project_id": "{{project_id}}", //project_id 或 project_code 一个即可
    // "project_code": "{{project_code}}", 
    "field_name": "@name()",
    "field_type": 1,
    "tooltip": "222",
    "sort": 1,
    "enable": 1,
    // "extra": [],
    "extra": [
        {
            "label": "",
            "value": "21",
            "key": "1746779506997202966"
        },
        {
            "label": "",
            "value": "222",
            "key": "1746779506997202977"
        }
    ]
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| field_name | xxxxddcc2222 | string | 是 | max=64 |
| field_type | 1 | integer | 是 | 类型：1.文本 2.数字 3.单选 4.多选 5.日期 6.链接 7邮箱 |
| tooltip | 222 | string | 是 | max=128 |
| sort | 1 | number | 是 | - |
| enable | 1 | integer | 是 | 开启状态  1.开启  -1关闭 |
| open_api_field | - | string | 是 | - |
| extra | - | array | 是 | - |
| extra.label | - | string | 是 | - |
| extra.value | 21 | string | 是 | - |
| extra.key | 1746779506997202966 | string | 是 | 类型: name,intro,logo,default_mark |
| project_id | {{project_id}} | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {
		"attribute_id": "586a16419c01000",
		"project_id": "29ed675c2464000",
		"field_name": "@name()",
		"field_type": 1,
		"enable": 1,
		"tooltip": "222",
		"sort": 1,
		"extra": [
			{
				"label": "",
				"value": "21",
				"key": "1746779506997202966"
			},
			{
				"label": "",
				"value": "222",
				"key": "1746779506997202977"
			}
		],
		"open_api_field": ""
	},
	"time": "2025-12-23T14:30:29.506239+08:00",
	"extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| data | - | object | - |
| data.attribute_id | 141975485998436352 | string | - |
| data.project_id | 1746779506997202944 | string | - |
| data.field_name | Shirley Moore | string | max=64 |
| data.field_type | 1 | integer | 类型：1.文本 2.数字 3.单选 4.多选 5.日期 6.链接 7邮箱 |
| data.enable | 1 | integer | 开启状态  1.开启  -1关闭 |
| data.tooltip | 222 | string | max=128 |
| data.sort | 1 | integer | - |
| data.extra | - | array | - |
| data.extra.key | 1746779506997202966 | string | 类型: name,intro,logo,default_mark |
| data.extra.label | - | string | - |
| data.extra.value | 21 | string | - |
| data.open_api_field | - | string | - |
| time | 1705386781 | integer | - |

* 失败(404)

```javascript
{
	"code": 10001,
	"msg": "参数错误:记录已存在",
	"msg_en": "parameter error the record already exists",
	"data": {},
	"time": 1705385398
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 10001 | integer | - |
| msg | 参数错误:记录已存在 | string | - |
| msg_en | parameter error the record already exists | string | - |
| data | - | object | - |
| time | 1705385398 | integer | - |

**Query**

#### 列表

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2025-12-22 15:51:32

> 更新时间: 2026-01-27 20:23:34

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/customattribute/list?project_id={{project_id}}

**请求方式**

> GET

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | - |
| project_code | {{project_code}} | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": [
		{
			"attribute_id": "47850ac5c401000",
			"project_id": "29ed675c2464000",
			"field_name": "2",
			"field_type": 6,
			"enable": 1,
			"tooltip": "2",
			"sort": 1,
			"extra": []
		},
		{
			"attribute_id": "586a16419c01000",
			"project_id": "29ed675c2464000",
			"field_name": "@name()",
			"field_type": 1,
			"enable": 1,
			"tooltip": "222",
			"sort": 1,
			"extra": [
				{
					"key": "1746779506997202966",
					"label": "",
					"value": "21"
				},
				{
					"key": "1746779506997202977",
					"label": "",
					"value": "222"
				}
			],
			"open_api_field": ""
		},
		{
			"attribute_id": "5869d976bc01000",
			"project_id": "29ed675c2464000",
			"field_name": "222",
			"field_type": 3,
			"enable": -1,
			"tooltip": "33",
			"sort": 2,
			"extra": [
				{
					"key": "69d76153d9009",
					"label": "",
					"value": "33"
				},
				{
					"key": "69d76153d900a",
					"label": "",
					"value": "44"
				},
				{
					"key": "69d7a03bd900b",
					"label": "",
					"value": "222"
				}
			],
			"open_api_field": ""
		}
	],
	"time": "2025-12-23T14:51:33.200216+08:00",
	"extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| data | - | array | - |
| data.attribute_id | 141969651293753344 | string | - |
| data.project_id | 1746779506997202944 | string | - |
| data.field_name | xxxxddcc2222 | string | - |
| data.field_type | 1 | integer | - |
| data.enable | 1 | integer | - |
| data.tooltip | 222 | string | - |
| data.sort | 1 | integer | - |
| data.extra | - | array | - |
| data.extra.key | 1746779506997202966 | string | - |
| data.extra.label | - | string | - |
| data.extra.value | 21 | string | - |
| data.open_api_field | - | string | - |
| time | 1705388629 | integer | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

#### 详情

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2025-12-22 15:51:32

> 更新时间: 2026-01-27 20:23:42

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/customattribute/details?project_id={{project_id}}&attribute_id=586a16419c01000

**请求方式**

> GET

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | - |
| project_code | {{project_code}} | string | 是 | - |
| attribute_id | 586a16419c01000 | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"msg_en": "success",
	"data": {
		"attribute_id": "141969651293753344",
		"project_id": "1746779506997202944",
		"field_name": "xxxxddcc2222",
		"field_type": 1,
		"enable": 1,
		"tooltip": "222",
		"sort": 1,
		"extra": [
			{
				"key": "1746779506997202966",
				"label": "",
				"value": "21"
			},
			{
				"key": "1746779506997202977",
				"label": "",
				"value": "222"
			}
		]
	},
	"time": 1705388775
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| data | - | object | - |
| data.attribute_id | 141969651293753344 | string | - |
| data.project_id | 1746779506997202944 | string | - |
| data.field_name | xxxxddcc2222 | string | - |
| data.field_type | 1 | integer | - |
| data.enable | 1 | integer | - |
| data.tooltip | 222 | string | - |
| data.sort | 1 | integer | - |
| data.extra | - | array | - |
| data.extra.key | 1746779506997202966 | string | - |
| data.extra.label | - | string | - |
| data.extra.value | 21 | string | - |
| data.open_api_field | - | string | - |
| time | 1705388775 | integer | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

#### 删除

> 创建人: Stilwell

> 更新人: 周义凯

> 创建时间: 2025-12-22 15:51:32

> 更新时间: 2026-04-16 14:19:44

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/customattribute/del

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"project_id": "{{project_id}}",
	// "project_code": "{{project_code}}",
	"attribute_id": "586a16419c01000"
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | - |
| attribute_id | 586a16419c01000 | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"msg_en": "success",
	"time": 1704682174
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| time | 1704682174 | integer | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

### 环境管理

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2026-01-30 17:42:26

> 更新时间: 2026-01-30 17:42:26

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

#### 服务管理

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2026-01-30 17:42:26

> 更新时间: 2026-01-30 17:42:26

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

##### 删除

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2026-01-30 17:42:26

> 更新时间: 2026-01-30 17:42:26

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/env/server/del

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"project_id": "{{project_id}}",
	"project_code": "{{project_code}}",
	"server_id": "5b7b66710039000"
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | - |
| server_id | 143414356640534528 | string | 是 | 服务id |
| name | 贾丽 | string | 是 | 服务名称 |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"msg_en": "success",
	"data": null,
	"time": 1706088482
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| data | null | null | - |
| time | 1706088482 | integer | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

##### 列表

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2026-01-30 17:42:26

> 更新时间: 2026-01-30 17:42:26

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/env/server/list?project_id={{project_id}}

**请求方式**

> GET

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | - |
| project_code | {{project_code}} | string | 否 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": [
		{
			"server_id": "1",
			"name": "默认服务",
			"sort": 1000
		},
		{
			"server_id": "5b7b66710039000",
			"name": "@cname()22222",
			"sort": 2000
		}
	],
	"time": "2026-01-30T17:29:27.885194+08:00",
	"extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | number | 状态码返回方式 1-success(200 默认), 2-expect(跟随期望响应码) ... |
| msg | 成功 | string | 返回文字描述 |
| data | - | array | 0为根节点 |
| data.server_id | 1 | string | 返回数据 |
| data.name | 蒋杰 | string | 返回数据 |
| data.sort | 1000 | number | 返回数据 |
| time | 2024-06-21T15:22:44.8385052+08:00 | string | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

##### 详情

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2026-01-30 17:42:26

> 更新时间: 2026-01-30 17:42:26

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/env/server/details?project_id={{project_id}}&server_id=5b7b66710039000

**请求方式**

> GET

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | - |
| server_id | 5b7b66710039000 | string | 是 | - |
| project_code | {{project_code}} | string | 否 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {
		"server_id": "5b7b66710039000",
		"name": "@cname()22222",
		"sort": 2000
	},
	"time": "2026-01-30T17:29:12.290301+08:00",
	"extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | number | 状态码返回方式 1-success(200 默认), 2-expect(跟随期望响应码) ... |
| msg | 成功 | string | 返回文字描述 |
| data | - | object | 0为根节点 |
| data.server_id | 1 | string | 返回数据 |
| data.name | 蒋杰 | string | 返回数据 |
| data.sort | 1000 | number | 返回数据 |
| time | 2024-06-21T15:24:29.7766941+08:00 | string | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

##### 新增服务

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2026-01-30 17:42:26

> 更新时间: 2026-01-30 17:42:26

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/env/server/add

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"project_id": "{{project_id}}",
	"project_code": "{{project_code}}",
	"name": "@cname()"
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | - |
| project_code | {{project_code}} | string | 否 | - |
| name | @cname() | string | 是 | 服务名称 |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {
		"server_id": "2c2781905401000",
		"name": "乔军",
		"project_id": "2717cba1e001000",
		"sort": 7000
	},
	"time": "2024-06-21T13:25:29.0075223+08:00"
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | number | 状态码返回方式 1-success(200 默认), 2-expect(跟随期望响应码) ... |
| msg | 成功 | string | 返回文字描述 |
| data | - | object | 0为根节点 |
| data.server_id | 2c2781905401000 | string | 返回数据 |
| data.name | 乔军 | string | 返回数据 |
| data.project_id | 2717cba1e001000 | string | 返回数据 |
| data.sort | 7000 | number | 返回数据 |
| time | 2024-06-21T13:25:29.0075223+08:00 | string | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

##### 编辑

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2026-01-30 17:42:26

> 更新时间: 2026-01-30 17:42:26

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/env/server/up

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"project_id": "{{project_id}}",
	"project_code": "{{project_code}}",
	"server_id": "5b7b66710039000",
	"name": "@cname()22222"
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | - |
| project_code | {{project_code}} | string | 否 | - |
| server_id | 5b7b66710039000 | string | 是 | 服务id |
| name | @cname()22222 | string | 是 | 服务名称 |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {},
	"time": "2026-01-30T17:28:25.511804+08:00",
	"extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| data | null | null | - |
| time | 1706088475 | integer | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

##### 移动（无需传递子节点)

> 创建人: Stilwell

> 更新人: 周义凯

> 创建时间: 2026-01-30 17:42:26

> 更新时间: 2026-04-17 11:41:41

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/env/server/multi_move

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"project_id": "{{project_id}}",
	"project_code": "{{project_code}}",
	"server_ids": [
		"5b7b6d59f439000"  
	],
	"after_id": "5b7901131839000", //将目标放在after_id（环境id）的前面，与before_id二选一
	"before_id": "0" //将目标放在before_id（环境id）的后面，与after_id二选一
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | - |
| project_code | {{project_code}} | string | 否 | - |
| server_ids | - | array | 是 | 选中的移动服务id |
| after_id | 5b7901131839000 | string | 是 | 将目标放在after_id（环境id）的前面，与before_id二选一 |
| before_id | 0 | string | 否 | 将目标放在before_id（环境id）的后面，与after_id二选一 |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {
		"list": [
			{
				"server_id": "5b7b6d59f439000",
				"sort": 2000,
				"updated_at": "2026-01-30T17:31:30.903501+08:00",
				"updated_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				}
			}
		]
	},
	"time": "2026-01-30T17:31:31.065846+08:00",
	"extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| data | - | object | - |
| data.list | - | array | 当目标目录中排序间隙不足时，会触发目录下全部节点刷新排序，此时会返回所以刷新的节点 |
| data.list.target_id | 0001423696538711 | string | 节点id |
| data.list.parent_id | 001f9cc910780100 | string | 0为根节点 |
| data.list.sort | 3333 | integer | 正序排序 |
| data.list.version | 53 | integer | 版本 |
| data.list.updated_at | 2024-01-29T17:22:52.5135403+08:00 | string | - |
| data.list.updated_user | - | object | - |
| data.list.updated_user.uid | 01f9cc90dac01000 | string | - |
| data.list.updated_user.nick_name | 周凯3 | string | - |
| time | 1706520172 | integer | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

#### 添加

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2026-01-30 17:42:26

> 更新时间: 2026-04-13 14:59:05

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/env/add

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"project_id": "{{project_id}}",
	"project_code": "{{project_code}}",
	"name": "xxxxx11",
	"is_private": -1,
	"server_list": [
		{
			"server_id": "225a8bd0dc01000",
			"uri": "@domain()"
		}
	],
	"env_var_list": {
		"xx": {
			"value": "xx",
			"description": ""
		}
	}
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | - |
| project_code | {{project_code}} | string | 否 | - |
| name | xxxxx11 | string | 是 | 环境名称 |
| is_private | -1 | integer | 是 | 是否私有环境 1是 -1否 默认-1 |
| server_list | - | array | 否 | 服务列表 |
| server_list.server_id | 225a8bd0dc01000 | string | 是 | 服务id |
| server_list.uri | @domain() | string | 是 | 服务当前环境下的值 |
| env_var_list | - | object | 否 | 环境变量列表 |
| env_var_list.xx | - | object | 是 | 环境变量名 |
| env_var_list.xx.value | xx | string | 是 | 环境变量云端值 |
| env_var_list.xx.description | - | string | 是 | 环境变量描述 |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {
		"env_id": "5b792eb85839000",
		"name": "xxxxx11",
		"is_private": -1,
		"sort": 5000
	},
	"time": "2026-01-30T14:52:51.262049+08:00",
	"extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| data | - | object | - |
| data.env_id | 020196d5b8c01000 | string | - |
| time | 1706003575 | integer | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

#### 更新

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2026-01-30 17:42:26

> 更新时间: 2026-04-13 14:59:18

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/env/up

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"env_id": "5b7901131839000",
	"project_id": "{{project_id}}",
	"project_code": "{{project_code}}",
	"name": "cddd",
	"is_private": -1, //这里有一个场景问题就是在修改时,私有环境可以变更为公开环境，但是公开环境无法在私有化。所以这里需要标注
	"server_list": [
		{
			"server_id": "225a8bd0dc01000",
			"uri": "@domain()"
		},
		{
			"server_id": "01fd824d5dc01000",
			"uri": "@domain()"
		}
	],
	"env_var_list": {
		"xx": {
			"value": "xx",
			"description": ""
		}
	}
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| env_id | 2c2a44de4801000 | string | 是 | 环境id |
| project_id | {{project_id}} | string | 是 | - |
| project_code | {{project_code}} | string | 是 | - |
| name | cddd | string | 是 | 服务名称 |
| is_private | -1 | integer | 是 | 这里有一个场景问题就是在修改时,私有环境可以变更为公开环境，但是公开环境无法在私有化。所以这里需要标注 |
| server_list | - | object | 是 | 服务列表 |
| server_list.server_id | 225a8bd0dc01000 | string | 是 | 服务id |
| server_list.uri | @domain() | string | 是 | 服务当前环境下的值 |
| env_var_list | - | object | 是 | 环境变量列表 |
| env_var_list.xx | - | object | 是 | 环境变量名 |
| env_var_list.xx.value | xx | string | 是 | 环境变量云端值 |
| env_var_list.xx.description | - | string | 是 | 环境变量描述 |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"msg_en": "success",
	"data": null,
	"time": 1706023681
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| data | null | null | - |
| time | 1706023681 | integer | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

#### 删除

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2026-01-30 17:42:26

> 更新时间: 2026-04-13 14:57:29

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/env/del

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"project_id": "{{project_id}}",
	"project_code": "{{project_code}}",
	"env_id": "2c2a3cefa801000"
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | - |
| project_code | {{project_code}} | string | 是 | - |
| env_id | 2c2a3cefa801000 | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"msg_en": "success",
	"data": null,
	"time": 1706003575
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| data | - | object | - |
| data.env_id | 020196d5b8c01000 | string | - |
| time | 1706003575 | integer | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

#### 列表

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2026-01-30 17:42:26

> 更新时间: 2026-04-16 12:00:01

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/env/list?project_code=fengtt00x

**请求方式**

> GET

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | - |
| project_code | fengtt00x | string | 否 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": [
		{
			"env_id": "1",
			"name": "默认环境",
			"is_private": -1,
			"sort": 1000,
			"server_list": [
				{
					"server_id": "1",
					"name": "默认服务",
					"sort": 1000,
					"uri": "galois-server-in.haiercash.work"
				}
			],
			"env_var_list": {
				"222": {
					"value": "333",
					"current_value": null,
					"description": ""
				}
			}
		},
		{
			"env_id": "2",
			"name": "Mock环境",
			"is_private": -1,
			"sort": 2000,
			"server_list": [
				{
					"server_id": "1",
					"name": "默认服务",
					"sort": 1000,
					"uri": "https://ee.apipost.cc/mock/1bfd2a779bc26001"
				}
			],
			"env_var_list": {}
		},
		{
			"env_id": "1bfe44b2e4025001",
			"name": "新建环境2",
			"is_private": -1,
			"sort": 3000,
			"server_list": [
				{
					"server_id": "1",
					"name": "默认服务",
					"sort": 1000,
					"uri": ""
				}
			],
			"env_var_list": {}
		},
		{
			"env_id": "1bfe44b300425001",
			"name": "新建环境2",
			"is_private": -1,
			"sort": 3000,
			"server_list": [
				{
					"server_id": "1",
					"name": "默认服务",
					"sort": 1000,
					"uri": ""
				}
			],
			"env_var_list": {}
		},
		{
			"env_id": "5b7901131839000",
			"name": "cddd",
			"is_private": -1,
			"sort": 4000,
			"server_list": [
				{
					"server_id": "1",
					"name": "默认服务",
					"sort": 1000,
					"uri": ""
				}
			],
			"env_var_list": {
				"xx": {
					"value": "xx",
					"current_value": null,
					"description": ""
				}
			}
		},
		{
			"env_id": "5b792eb85839000",
			"name": "xxxxx11",
			"is_private": -1,
			"sort": 5000,
			"server_list": [
				{
					"server_id": "1",
					"name": "默认服务",
					"sort": 1000,
					"uri": ""
				}
			],
			"env_var_list": {
				"xx": {
					"value": "xx",
					"current_value": null,
					"description": ""
				}
			}
		}
	],
	"time": "2026-01-30T15:46:21.099432+08:00",
	"extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | number | 状态码返回方式 1-success(200 默认), 2-expect(跟随期望响应码) ... |
| msg | 成功 | string | 返回文字描述 |
| data | - | array | 0为根节点 |
| data.env_id | 1 | string | 返回数据 |
| data.name | default_env | string | 返回数据 |
| data.is_private | -1 | number | 返回数据 |
| data.sort | 0 | number | 返回数据 |
| data.server_list | - | array | 返回数据 |
| data.server_list.server_id | 1 | string | 返回数据 |
| data.server_list.name | 蒋杰 | string | 返回数据 |
| data.server_list.sort | 1000 | number | 返回数据 |
| data.server_list.uri | - | string | 返回数据 |
| data.env_var_list | - | object | 返回数据 |
| data.env_var_list.xx | - | object | 返回数据 |
| data.env_var_list.xx.value | xx | string | 如果是is_describe_library 值是int 1开启 -1关闭 |
| data.env_var_list.xx.current_value | xx2222 | string | 如果是is_describe_library 值是int 1开启 -1关闭 |
| data.env_var_list.xx.description | - | string | 返回数据 |
| time | 2024-06-21T16:53:14.5631333+08:00 | string | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

#### 移动（无需传递子节点)

> 创建人: Stilwell

> 更新人: 周义凯

> 创建时间: 2026-01-30 17:42:26

> 更新时间: 2026-04-17 11:41:49

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/env/multi_move

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"project_id": "{{project_id}}",
	"project_code": "{{project_code}}",
	"env_ids": [
		"1bfe44b2e4025001"
	],
	"after_id": "5b7901131839000", //将目标放在after_id（环境id）的前面，与before_id二选一
	"before_id": "0" //将目标放在before_id（环境id）的后面，与after_id二选一
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | - |
| project_code | {{project_code}} | string | 是 | - |
| env_ids | - | array | 是 | 选中的环境id |
| after_id | 5b7901131839000 | string | 是 | 将目标放在after_id（环境id）的前面，与before_id二选一 |
| before_id | 0 | string | 否 | 将目标放在before_id（环境id）的后面，与after_id二选一 |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"msg_en": "success",
	"data": {
		"list": [ //当目标目录中排序间隙不足时，会触发目录下全部节点刷新排序，此时会返回所以刷新的节点
			{
				"target_id": "0001423696538711",
				"parent_id": "001f9cc910780100",
				"sort": 3333,
				"version": 53,
				"updated_at": "2024-01-29T17:22:52.5135403+08:00",
				"updated_user": {
					"uid": "01f9cc90dac01000",
					"nick_name": "周凯3"
				}
			},
			{
				"target_id": "0014236965387111",
				"parent_id": "001f9cc910780100",
				"sort": 3666,
				"version": 53,
				"updated_at": "2024-01-29T17:22:52.514078+08:00",
				"updated_user": {
					"uid": "01f9cc90dac01000",
					"nick_name": "周凯3"
				}
			},
			{
				"target_id": "0142369650703871",
				"parent_id": "001f9cc910780100",
				"sort": 4000,
				"version": 52,
				"updated_at": "2024-01-29T17:22:52.514078+08:00",
				"updated_user": {
					"uid": "01f9cc90dac01000",
					"nick_name": "周凯3"
				}
			},
			{
				"target_id": "1423697865070387",
				"parent_id": "001f9cc910780100",
				"sort": 3000,
				"version": 52,
				"updated_at": "2024-01-29T17:22:52.514078+08:00",
				"updated_user": {
					"uid": "01f9cc90dac01000",
					"nick_name": "周凯3"
				}
			}
		]
	},
	"time": 1706520172
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| data | - | object | - |
| data.list | - | array | 当目标目录中排序间隙不足时，会触发目录下全部节点刷新排序，此时会返回所以刷新的节点 |
| data.list.target_id | 0001423696538711 | string | 节点id |
| data.list.parent_id | 001f9cc910780100 | string | 0为根节点 |
| data.list.sort | 3333 | integer | 正序排序 |
| data.list.version | 53 | integer | 版本 |
| data.list.updated_at | 2024-01-29T17:22:52.5135403+08:00 | string | - |
| data.list.updated_user | - | object | - |
| data.list.updated_user.uid | 01f9cc90dac01000 | string | - |
| data.list.updated_user.nick_name | 周凯3 | string | - |
| time | 1706520172 | integer | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

#### 详情

> 创建人: Stilwell

> 更新人: 周义凯

> 创建时间: 2026-01-30 17:42:26

> 更新时间: 2026-04-14 15:46:02

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/env/details?project_id={{project_id}}&env_id=5b7901131839000

**请求方式**

> GET

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | - |
| env_id | 5b7901131839000 | string | 是 | - |
| project_code | - | string | 否 | - |

**认证方式**


**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {
		"env_id": "5b7901131839000",
		"name": "cddd",
		"is_private": -1,
		"sort": 4000,
		"server_list": [
			{
				"server_id": "1",
				"name": "默认服务",
				"sort": 1000,
				"uri": ""
			}
		],
		"env_var_list": {
			"xx": {
				"value": "xx",
				"current_value": null,
				"description": ""
			}
		}
	},
	"time": "2026-01-30T15:49:09.85112+08:00",
	"extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | number | 状态码返回方式 1-success(200 默认), 2-expect(跟随期望响应码) ... |
| msg | 成功 | string | 返回文字描述 |
| data | - | object | 0为根节点 |
| data.env_id | 5b7901131839000 | string | 返回数据 |
| data.name | cddd | string | 返回数据 |
| data.is_private | -1 | number | 返回数据 |
| data.sort | 4000 | number | 返回数据 |
| data.server_list | - | array | 返回数据 |
| data.server_list.server_id | 1 | string | 返回数据 |
| data.server_list.name | 默认服务 | string | 返回数据 |
| data.server_list.sort | 1000 | number | 返回数据 |
| data.server_list.uri | - | string | 返回数据 |
| data.env_var_list | - | object | 返回数据 |
| data.env_var_list.xx | - | object | - |
| data.env_var_list.xx.value | xx | string | - |
| data.env_var_list.xx.current_value | - | null | 固定为null |
| data.env_var_list.xx.description | - | string | - |
| time | 2026-01-30T15:49:09.85112+08:00 | string | - |
| extra_err | - | object | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

### 接口状态管理

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2026-03-17 17:29:57

> 更新时间: 2026-03-17 17:30:13

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

#### 更新

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2026-03-17 17:29:57

> 更新时间: 2026-03-17 18:13:12

**标签**

> v1.19.0以上

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/mark/up

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
    "project_id": "{{project_id}}", //project_id 或 project_code 一个即可
    // "project_code": "{{project_code}}", 
	"mark_id": "5f2f72760c19000",
    "name": "222xxxx222",
    "color": "#ff7600"
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | project_id 或 project_code 一个即可 |
| mark_id | 5f2f72760c19000 | string | 是 | - |
| name | 222xxxx222 | string | 是 | - |
| color | #ff7600 | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"msg_en": "success",
	"time": 1704682174
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| time | 1704682174 | integer | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

#### 创建

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2026-03-17 17:29:57

> 更新时间: 2026-06-03 18:48:37

**标签**

> v1.19.0以上

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/mark/add

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
    "project_id": "{{project_id}}", //project_id 或 project_code 一个即可
    // "project_code": "{{project_code}}", 
    "name": "222xxxx",
    "color": "#ff7600"
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | project_id 或 project_code 一个即可 |
| name | 222xxxx | string | 是 | - |
| color | #ff7600 | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {
		"project_id": "1bfd2a779bc26001",
		"project_code": "2016814901334532098",
		"mark_id": "5f2f72760c19000",
		"name": "222xxxx",
		"color": "#ff7600",
		"is_sys_default": -1,
		"is_default_mark": -1
	},
	"time": "2026-03-17T18:01:09.729404+08:00",
	"extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| data | - | object | - |
| data.attribute_id | 141975485998436352 | string | - |
| data.project_id | 1746779506997202944 | string | - |
| data.field_name | Shirley Moore | string | max=64 |
| data.field_type | 1 | integer | 类型：1.文本 2.数字 3.单选 4.多选 5.日期 6.链接 7邮箱 |
| data.enable | 1 | integer | 开启状态  1.开启  -1关闭 |
| data.tooltip | 222 | string | max=128 |
| data.sort | 1 | integer | - |
| data.extra | - | array | - |
| data.extra.key | 1746779506997202966 | string | 类型: name,intro,logo,default_mark |
| data.extra.label | - | string | - |
| data.extra.value | 21 | string | - |
| data.open_api_field | - | string | - |
| time | 1705386781 | integer | - |

* 失败(404)

```javascript
{
	"code": 10001,
	"msg": "参数错误:记录已存在",
	"msg_en": "parameter error the record already exists",
	"data": {},
	"time": 1705385398
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 10001 | integer | - |
| msg | 参数错误:记录已存在 | string | - |
| msg_en | parameter error the record already exists | string | - |
| data | - | object | - |
| time | 1705385398 | integer | - |

**Query**

#### 列表

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2026-03-17 17:29:57

> 更新时间: 2026-03-17 18:13:11

**标签**

> v1.19.0以上

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/mark/list?project_id={{project_id}}

**请求方式**

> GET

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_code | {{project_code}} | string | 是 | - |
| project_id | {{project_id}} | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": [
		{
			"mark_id": "1",
			"project_id": "0",
			"name": "开发中",
			"color": "#2857FF",
			"is_sys_default": 1,
			"is_default_mark": 1
		},
		{
			"mark_id": "2",
			"project_id": "0",
			"name": "已完成",
			"color": "#26CEA4",
			"is_sys_default": 1,
			"is_default_mark": -1
		},
		{
			"mark_id": "3",
			"project_id": "0",
			"name": "需修改",
			"color": "#FFC01E",
			"is_sys_default": 1,
			"is_default_mark": -1
		},
		{
			"mark_id": "4",
			"project_id": "0",
			"name": "已废弃",
			"color": "#FF2200",
			"is_sys_default": 1,
			"is_default_mark": -1
		},
		{
			"mark_id": "5f2f72760c19000",
			"project_id": "1bfd2a779bc26001",
			"project_code": "2016814901334532098",
			"name": "222xxxx222",
			"color": "#ff7600",
			"is_sys_default": -1,
			"is_default_mark": -1
		},
		{
			"mark_id": "1c39ac1962420001",
			"project_id": "1bfd2a779bc26001",
			"project_code": "2016814901334532098",
			"name": "222",
			"color": "#ff7600",
			"is_sys_default": -1,
			"is_default_mark": -1
		}
	],
	"time": "2026-03-17T18:02:14.684032+08:00",
	"extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| data | - | array | - |
| data.attribute_id | 141969651293753344 | string | - |
| data.project_id | 1746779506997202944 | string | - |
| data.field_name | xxxxddcc2222 | string | - |
| data.field_type | 1 | integer | - |
| data.enable | 1 | integer | - |
| data.tooltip | 222 | string | - |
| data.sort | 1 | integer | - |
| data.extra | - | array | - |
| data.extra.key | 1746779506997202966 | string | - |
| data.extra.label | - | string | - |
| data.extra.value | 21 | string | - |
| data.open_api_field | - | string | - |
| time | 1705388629 | integer | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

#### 删除

> 创建人: Stilwell

> 更新人: 周义凯

> 创建时间: 2026-03-17 17:29:57

> 更新时间: 2026-04-16 14:19:26

**标签**

> v1.19.0以上

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/mark/del

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"project_id": "{{project_id}}",
	// "project_code": "{{project_code}}",
	"mark_id": "5f2f72760c19000"
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | - |
| mark_id | 5f2f72760c19000 | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {},
	"time": "2026-03-17T18:02:32.056326+08:00",
	"extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| time | 1704682174 | integer | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

#### 设置默认状态

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2026-03-17 18:08:23

> 更新时间: 2026-06-04 15:12:24

**标签**

> v1.19.0以上

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/project/mark/set_default

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
    "project_id": "{{project_id}}", //project_id 或 project_code 一个即可
    // "project_code": "{{project_code}}", 
    "field": "default_mark", //固定标记,标识设置默认接口状态
    "value": "2" //传入mark_id
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | project_id 或 project_code 一个即可 |
| field | default_mark | string | 是 | 固定标记,标识设置默认接口状态 |
| value | 2 | string | 是 | 传入mark_id |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {},
	"time": "2026-03-17T18:11:08.171586+08:00",
	"extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| data | - | object | - |
| data.attribute_id | 141975485998436352 | string | - |
| data.project_id | 1746779506997202944 | string | - |
| data.field_name | Shirley Moore | string | max=64 |
| data.field_type | 1 | integer | 类型：1.文本 2.数字 3.单选 4.多选 5.日期 6.链接 7邮箱 |
| data.enable | 1 | integer | 开启状态  1.开启  -1关闭 |
| data.tooltip | 222 | string | max=128 |
| data.sort | 1 | integer | - |
| data.extra | - | array | - |
| data.extra.key | 1746779506997202966 | string | 类型: name,intro,logo,default_mark |
| data.extra.label | - | string | - |
| data.extra.value | 21 | string | - |
| data.open_api_field | - | string | - |
| time | 1705386781 | integer | - |

* 失败(404)

```javascript
暂无数据
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 10001 | integer | - |
| msg | 参数错误:记录已存在 | string | - |
| msg_en | parameter error the record already exists | string | - |
| data | - | object | - |
| time | 1705385398 | integer | - |

**Query**

## 接口模块

> 创建人: 周义凯

> 更新人: 周义凯

> 创建时间: 2025-12-23 11:40:56

> 更新时间: 2025-12-23 11:40:56

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

### 接口列表（简约结构）

> 创建人: 周义凯

> 更新人: 周义凯

> 创建时间: 2025-12-29 16:55:18

> 更新时间: 2026-05-22 19:07:31

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/apis/list?project_id={{project_id}}&project_code={{project_code}}

**请求方式**

> GET

**Content-Type**

> json

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | 项目ID（16进制雪花） |
| project_code | {{project_code}} | string | 是 | 项目Code，project_id和project_code二选一即可. 优先project_id |

**请求Body参数**

```javascript
{
    "name":"a"
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| name | a | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 失败(404)

```javascript
{
    "code": 0,
    "msg": "成功",
    "data": {
        "list": [
            {
                "target_id": "2d08cf1b0069000",
                "target_type": "folder",
                "parent_id": "2d08cf199869000",
                "name": "目录Role",
                "version": 8,
                "method": "",
                "url": "",
                "mark_id": "1",
                "sort": 1000,
                "is_exampled": -1
            },
            {
				"target_id": "3245f66b4001000",
				"target_type": "api",
				"parent_id": "0",
				"name": "发送短信验证码",
				"version": 163,
				"method": "POST",
				"url": "/sso/phone/sms/send?phone=",
				"mark_id": "1",
				"sort": 1000,
				"is_exampled": -1
			},
        ]
    },
    "time": "2024-09-09T15:10:35.599190272+08:00",
    "extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | number | - |
| msg | 成功 | string | - |
| data | - | object | - |
| data.list | - | array | - |
| data.list.target_id | 2d08cf1b0069000 | string | 接口ID（16进制雪花） |
| data.list.target_type | api | string | 类型 api-http接口 folder-目录 3doc-Markdown文档 sse  graphql  websocket2 socketio socket-TCP客户端 socket_method-TCP方法 |
| data.list.parent_id | 2d08cf199869000 | string | 父目录ID（16进制雪花）默认根目录 |
| data.list.name | 目录Role | string | 名称 |
| data.list.version | 8 | number | 版本号 |
| data.list.method | - | string | - |
| data.list.url | - | string | - |
| data.list.mark_id | 1 | string | 接口状态ID（16进制雪花） |
| data.list.sort | 1000 | number | 正序排序 |
| time | 2024-09-09T15:10:35.599190272+08:00 | string | - |
| extra_err | - | object | - |

* 失败(200)

```javascript
暂无数据
```

**Query**

### 创建接口（HTTP类型）

> 创建人: 周义凯

> 更新人: Stilwell

> 创建时间: 2025-12-29 16:55:02

> 更新时间: 2026-04-16 17:57:03

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/apis/create

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"project_id": "{{project_id}}",
	"project_code": "{{project_code}}",
	"target_type": "api",
	"parent_id": "0",
	"name": "新建接口",
	"mark_id": "1",
	"method": "GET", //请求方式
	"url": "", //请求地址
	"protocol": "http/1.1",
	"description": "",
	"request": {
		"auth": {
			"type": "noauth",
			"kv": {
				"key": "",
				"value": ""
			},
			"bearer": {
				"key": ""
			},
			"basic": {
				"username": "",
				"password": ""
			},
			"digest": {
				"username": "",
				"password": "",
				"realm": "",
				"nonce": "",
				"algorithm": "",
				"qop": "",
				"nc": "",
				"cnonce": "",
				"opaque": ""
			},
			"hawk": {
				"authId": "",
				"authKey": "",
				"algorithm": "",
				"user": "",
				"nonce": "",
				"extraData": "",
				"app": "",
				"delegation": "",
				"timestamp": "",
				"includePayloadHash": 0
			},
			"awsv4": {
				"accessKey": "",
				"secretKey": "",
				"region": "",
				"service": "",
				"sessionToken": "",
				"addAuthDataToQuery": 0
			},
			"ntlm": {
				"username": "",
				"password": "",
				"domain": "",
				"workstation": "",
				"disableRetryRequest": 0
			},
			"edgegrid": {
				"accessToken": "",
				"clientToken": "",
				"clientSecret": "",
				"nonce": "",
				"timestamp": "",
				"baseURi": "",
				"headersToSign": ""
			},
			"oauth1": {
				"consumerKey": "",
				"consumerSecret": "",
				"signatureMethod": "",
				"addEmptyParamsToSign": 0,
				"includeBodyHash": 0,
				"addParamsToHeader": 0,
				"realm": "",
				"version": "",
				"nonce": "",
				"timestamp": "",
				"verifier": "",
				"callback": "",
				"tokenSecret": "",
				"token": ""
			},
			"oauth2": {
				"addTokenTo": "header",
				"access_token": "123",
				"headerPrefix": "Bearer",
				"grant_type": "authorization_code",
				"redirect_uri": "",
				"authUrl": "",
				"accessTokenUrl": "",
				"clientId": "",
				"clientSecret": "",
				"challengeAlgorithm": "S256",
				"scope": "",
				"state": "",
				"client_authentication": "header",
				"refreshTokenUrl": "",
				"authRequestParams": null,
				"tokenRequestParams": null,
				"refreshRequestParams": null
			}
		},
		"body": {
			"mode": "none",
			"parameter": [],
			"raw": "",
			"raw_parameter": [],
			"raw_schema": {
				"type": "object"
			},
			"binary": null
		},
		"pre_tasks": [],
		"post_tasks": [],
		"header": {
			"parameter": [
				{
					"param_id": "26d3caf4f83001",
					"description": "",
					"field_type": "string",
					"is_checked": 1,
					"key": "",
					"not_null": 1,
					"value": ""
				}
			]
		},
		"query": {
			"parameter": []
		},
		"cookie": {
			"parameter": []
		},
		"restful": {
			"parameter": []
		}
	},
	"response": {
		"example": [
			{
				"example_id": "1",
				"raw": "",
				"raw_parameter": [],
				"expect": {
					"name": "成功",
					"is_default": 1,
					"code": "200",
					"content_type": "json",
					"verify_type": "schema",
					"mock": "",
					"schema": {}
				}
			},
			{
				"example_id": "2",
				"raw": "",
				"raw_parameter": [],
				"expect": {
					"name": "失败",
					"is_default": -1,
					"code": "404",
					"content_type": "json",
					"verify_type": "schema",
					"mock": "",
					"schema": {}
				}
			}
		],
		"is_check_result": 1
	},
	"attribute_info": {},
	"tags": [
		"pipi",
		"pizi1",
		"pizi2",
		"pizi3"
	]
}
```

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {
		"target_id": "26d3cab4f8300",
		"project_id": "23a7b4f26c01000",
		"parent_id": "0",
		"target_type": "api",
		"name": "新建接口2",
		"version": 10,
		"sort": 3000,
		"method": "GET",
		"url": "",
		"protocol": "http/1.1",
		"mark_id": "1",
		"description": "",
		"request": {
			"auth": {
				"type": "noauth",
				"kv": {
					"key": "",
					"value": ""
				},
				"bearer": {
					"key": ""
				},
				"basic": {
					"username": "",
					"password": ""
				},
				"digest": {
					"username": "",
					"password": "",
					"realm": "",
					"nonce": "",
					"algorithm": "",
					"qop": "",
					"nc": "",
					"cnonce": "",
					"opaque": ""
				},
				"hawk": {
					"authId": "",
					"authKey": "",
					"algorithm": "",
					"user": "",
					"nonce": "",
					"extraData": "",
					"app": "",
					"delegation": "",
					"timestamp": "",
					"includePayloadHash": 0
				},
				"awsv4": {
					"accessKey": "",
					"secretKey": "",
					"region": "",
					"service": "",
					"sessionToken": "",
					"addAuthDataToQuery": 0
				},
				"ntlm": {
					"username": "",
					"password": "",
					"domain": "",
					"workstation": "",
					"disableRetryRequest": 0
				},
				"edgegrid": {
					"accessToken": "",
					"clientToken": "",
					"clientSecret": "",
					"nonce": "",
					"timestamp": "",
					"baseURi": "",
					"headersToSign": ""
				},
				"oauth1": {
					"consumerKey": "",
					"consumerSecret": "",
					"signatureMethod": "",
					"addEmptyParamsToSign": 0,
					"includeBodyHash": 0,
					"addParamsToHeader": 0,
					"realm": "",
					"version": "",
					"nonce": "",
					"timestamp": "",
					"verifier": "",
					"callback": "",
					"tokenSecret": "",
					"token": ""
				}
			},
			"body": {
				"mode": "none",
				"parameter": [],
				"raw": "",
				"raw_parameter": [],
				"raw_schema": {
					"type": "object"
				}
			},
			"pre_tasks": [],
			"post_tasks": [],
			"header": {
				"parameter": [
					{
						"param_id": "26d3caf4f83001",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					},
					{
						"param_id": "26da7c2e383002",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					},
					{
						"param_id": "2706f725f8302b",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					},
					{
						"param_id": "2713d2d6383005",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					},
					{
						"param_id": "27168867f8300e",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					},
					{
						"param_id": "2716a0f0783009",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					},
					{
						"param_id": "2717b0b9783004",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					}
				]
			},
			"query": {
				"parameter": []
			},
			"cookie": {
				"parameter": []
			},
			"resful": {
				"parameter": []
			}
		},
		"response": {
			"example": [
				{
					"example_id": "1",
					"raw": "",
					"raw_parameter": [],
					"expect": {
						"name": "成功",
						"isDefault": 1,
						"code": "200",
						"contentType": "json",
						"verifyType": "schema",
						"mock": "",
						"schema": {
							"type": "object"
						}
					}
				},
				{
					"example_id": "2",
					"raw": "",
					"raw_parameter": [],
					"expect": {
						"name": "失败",
						"isDefault": -1,
						"code": "404",
						"contentType": "json",
						"verifyType": "schema",
						"mock": "",
						"schema": {
							"type": "object"
						}
					}
				}
			],
			"is_check_result": 1
		},
		"attribute_info": {},
		"tags": [
			"pipi",
			"pizi1",
			"pizi2",
			"pizi3"
		],
		"created_at": "2024-03-09T01:18:07+08:00",
		"created_user": {
			"uid": "22acd167bc01000",
			"nick_name": "周义凯",
			"portrait": "https://img.cdn.apipost.cn/user/default_profile_photo/Vector-5.png"
		},
		"updated_at": "2024-03-09T01:18:07+08:00",
		"updated_user": {
			"uid": "22acd167bc01000",
			"nick_name": "周义凯",
			"portrait": "https://img.cdn.apipost.cn/user/default_profile_photo/Vector-5.png"
		},
		"status": 1,
		"is_locked": -1
	},
	"time": "2024-03-09T01:18:08.3417933+08:00"
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | number | - |
| msg | 成功 | string | - |
| data | - | object | 接口信息 |
| data.target_id | 26d3cab4f8300 | string | - |
| data.project_id | 23a7b4f26c01000 | string | - |
| data.parent_id | 0 | string | - |
| data.target_type | api | string | - |
| data.name | 新建接口2 | string | - |
| data.version | 10 | number | - |
| data.sort | 3000 | number | - |
| data.method | GET | string | - |
| data.url | - | string | - |
| data.protocol | http/1.1 | string | - |
| data.mark_id | 1 | string | - |
| data.description | - | string | - |
| data.request | - | object | - |
| data.request.auth | - | object | - |
| data.request.auth.type | noauth | string | - |
| data.request.auth.kv | - | object | - |
| data.request.auth.kv.key | - | string | - |
| data.request.auth.kv.value | - | string | - |
| data.request.auth.bearer | - | object | - |
| data.request.auth.bearer.key | - | string | - |
| data.request.auth.basic | - | object | - |
| data.request.auth.basic.username | - | string | - |
| data.request.auth.basic.password | - | string | - |
| data.request.auth.digest | - | object | - |
| data.request.auth.digest.username | - | string | - |
| data.request.auth.digest.password | - | string | - |
| data.request.auth.digest.realm | - | string | - |
| data.request.auth.digest.nonce | - | string | - |
| data.request.auth.digest.algorithm | - | string | - |
| data.request.auth.digest.qop | - | string | - |
| data.request.auth.digest.nc | - | string | - |
| data.request.auth.digest.cnonce | - | string | - |
| data.request.auth.digest.opaque | - | string | - |
| data.request.auth.hawk | - | object | - |
| data.request.auth.hawk.authId | - | string | - |
| data.request.auth.hawk.authKey | - | string | - |
| data.request.auth.hawk.algorithm | - | string | - |
| data.request.auth.hawk.user | - | string | - |
| data.request.auth.hawk.nonce | - | string | - |
| data.request.auth.hawk.extraData | - | string | - |
| data.request.auth.hawk.app | - | string | - |
| data.request.auth.hawk.delegation | - | string | - |
| data.request.auth.hawk.timestamp | - | string | - |
| data.request.auth.hawk.includePayloadHash | 0 | number | - |
| data.request.auth.awsv4 | - | object | - |
| data.request.auth.awsv4.accessKey | - | string | - |
| data.request.auth.awsv4.secretKey | - | string | - |
| data.request.auth.awsv4.region | - | string | - |
| data.request.auth.awsv4.service | - | string | - |
| data.request.auth.awsv4.sessionToken | - | string | - |
| data.request.auth.awsv4.addAuthDataToQuery | 0 | number | - |
| data.request.auth.ntlm | - | object | - |
| data.request.auth.ntlm.username | - | string | - |
| data.request.auth.ntlm.password | - | string | - |
| data.request.auth.ntlm.domain | - | string | - |
| data.request.auth.ntlm.workstation | - | string | - |
| data.request.auth.ntlm.disableRetryRequest | 0 | number | - |
| data.request.auth.edgegrid | - | object | - |
| data.request.auth.edgegrid.accessToken | - | string | - |
| data.request.auth.edgegrid.clientToken | - | string | - |
| data.request.auth.edgegrid.clientSecret | - | string | - |
| data.request.auth.edgegrid.nonce | - | string | - |
| data.request.auth.edgegrid.timestamp | - | string | - |
| data.request.auth.edgegrid.baseURi | - | string | - |
| data.request.auth.edgegrid.headersToSign | - | string | - |
| data.request.auth.oauth1 | - | object | - |
| data.request.auth.oauth1.consumerKey | - | string | - |
| data.request.auth.oauth1.consumerSecret | - | string | - |
| data.request.auth.oauth1.signatureMethod | - | string | - |
| data.request.auth.oauth1.addEmptyParamsToSign | 0 | number | - |
| data.request.auth.oauth1.includeBodyHash | 0 | number | - |
| data.request.auth.oauth1.addParamsToHeader | 0 | number | - |
| data.request.auth.oauth1.realm | - | string | - |
| data.request.auth.oauth1.version | - | string | - |
| data.request.auth.oauth1.nonce | - | string | - |
| data.request.auth.oauth1.timestamp | - | string | - |
| data.request.auth.oauth1.verifier | - | string | - |
| data.request.auth.oauth1.callback | - | string | - |
| data.request.auth.oauth1.tokenSecret | - | string | - |
| data.request.auth.oauth1.token | - | string | - |
| data.request.body | - | object | - |
| data.request.body.mode | none | string | - |
| data.request.body.parameter | - | array | - |
| data.request.body.raw | - | string | - |
| data.request.body.raw_parameter | - | array | - |
| data.request.body.raw_schema | - | object | - |
| data.request.body.raw_schema.type | object | string | - |
| data.request.pre_tasks | - | array | - |
| data.request.post_tasks | - | array | - |
| data.request.header | - | object | - |
| data.request.header.parameter | - | array | - |
| data.request.header.parameter.param_id | 26d3caf4f83001 | string | - |
| data.request.header.parameter.description | - | string | - |
| data.request.header.parameter.field_type | String | string | - |
| data.request.header.parameter.is_checked | 1 | number | - |
| data.request.header.parameter.key | - | string | - |
| data.request.header.parameter.not_null | 1 | number | - |
| data.request.header.parameter.value | - | string | - |
| data.request.query | - | object | - |
| data.request.query.parameter | - | array | - |
| data.request.cookie | - | object | - |
| data.request.cookie.parameter | - | array | - |
| data.request.resful | - | object | - |
| data.request.resful.parameter | - | array | - |
| data.response | - | object | - |
| data.response.example | - | array | - |
| data.response.example.example_id | 1 | string | - |
| data.response.example.raw | - | string | - |
| data.response.example.raw_parameter | - | array | - |
| data.response.example.expect | - | object | - |
| data.response.example.expect.name | 成功 | string | - |
| data.response.example.expect.isDefault | 1 | number | - |
| data.response.example.expect.code | 200 | string | - |
| data.response.example.expect.contentType | json | string | - |
| data.response.example.expect.verifyType | schema | string | - |
| data.response.example.expect.mock | - | string | - |
| data.response.example.expect.schema | - | object | - |
| data.response.example.expect.schema.type | object | string | - |
| data.response.is_check_result | 1 | number | - |
| data.attribute_info | - | object | - |
| data.tags | - | array | - |
| data.created_at | 2024-03-09T01:18:07+08:00 | string | - |
| data.created_user | - | object | - |
| data.created_user.uid | 22acd167bc01000 | string | - |
| data.created_user.nick_name | 周义凯 | string | - |
| data.created_user.portrait | https://img.cdn.apipost.cn/user/default_profile_photo/Vector-5.png | string | - |
| data.updated_at | 2024-03-09T01:18:07+08:00 | string | - |
| data.updated_user | - | object | - |
| data.updated_user.uid | 22acd167bc01000 | string | - |
| data.updated_user.nick_name | 周义凯 | string | - |
| data.updated_user.portrait | https://img.cdn.apipost.cn/user/default_profile_photo/Vector-5.png | string | - |
| data.status | 1 | number | - |
| data.is_locked | -1 | number | - |
| time | 2024-03-09T01:18:08.3417933+08:00 | string | - |

* id冲突(200)

```javascript
{
	"code": 14004,
	"msg": "target_id冲突",
	"msg_en": "Target ID conflict",
	"data": {},
	"time": 1706079638
}
```

* 项目已锁定(200)

```javascript
{
	"code": 13002,
	"msg": "该项目已被项目管理员或团队超管锁定，无法进行此操作",
	"data": {},
	"time": 1706673551
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 14003 | integer | - |
| msg | 接口已被周凯3锁定 | string | - |
| data | - | object | - |
| time | 1706673551 | integer | - |

**Query**

### 创建接口（目录类型）

> 创建人: 周义凯

> 更新人: Stilwell

> 创建时间: 2025-12-29 16:54:48

> 更新时间: 2026-04-16 17:56:54

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/apis/create

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
  "project_id": "{{project_id}}",
  "project_code": "{{project_code}}",
  "parent_id": "0",
  "target_type": "folder",
  "name": "目录",
  "server_id": "1",
  "description": "",
  "request": {
    "header": {
      "parameter": [
        {
          "description": "",
          "field_type": "string",
          "is_checked": 1,
          "key": "key1",
          "not_null": 1,
          "value": "",
          "schema": {
            "type": "string"
          }
        }
      ]
    },
    "query": {
      "parameter": []
    },
    "body": {
      "parameter": []
    },
    "cookie": {
      "parameter": []
    },
    "auth": {
      "type": "inherit",
      "kv": {
        "key": "",
        "value": "",
        "in": "header"
      },
      "bearer": {
        "key": ""
      },
      "basic": {
        "username": "",
        "password": ""
      },
      "digest": {
        "username": "",
        "password": "",
        "realm": "",
        "nonce": "",
        "algorithm": "MD5",
        "qop": "",
        "nc": "",
        "cnonce": "",
        "opaque": "",
        "disableRetryRequest": false
      },
      "oauth1": {
        "consumerKey": "",
        "consumerSecret": "",
        "signatureMethod": "HMAC-SHA1",
        "addEmptyParamsToSign": true,
        "includeBodyHash": true,
        "addParamsToHeader": false,
        "realm": "",
        "version": "1.0",
        "nonce": "",
        "timestamp": "",
        "verifier": "",
        "callback": "",
        "tokenSecret": "",
        "token": "",
        "disableHeaderEncoding": false
      },
      "hawk": {
        "authId": "",
        "authKey": "",
        "algorithm": "",
        "user": "",
        "nonce": "",
        "extraData": "",
        "app": "",
        "delegation": "",
        "timestamp": "",
        "includePayloadHash": false
      },
      "awsv4": {
        "accessKey": "",
        "secretKey": "",
        "region": "",
        "service": "",
        "sessionToken": "",
        "addAuthDataToQuery": false
      },
      "ntlm": {
        "username": "",
        "password": "",
        "domain": "",
        "workstation": "",
        "disableRetryRequest": false
      },
      "edgegrid": {
        "accessToken": "",
        "clientToken": "",
        "clientSecret": "",
        "nonce": "",
        "timestamp": "",
        "baseURi": "",
        "headersToSign": ""
      },
      "noauth": {},
      "jwt": {
        "addTokenTo": "header",
        "algorithm": "HS256",
        "secret": "",
        "isSecretBase64Encoded": false,
        "payload": "",
        "headerPrefix": "Bearer",
        "queryParamKey": "token",
        "header": ""
      },
      "asap": {
        "alg": "HS256",
        "iss": "",
        "aud": "",
        "kid": "",
        "privateKey": "",
        "sub": "",
        "claims": "",
        "exp": ""
      }
    },
    "pre_tasks": [
      {
        "type": "customScript",
        "enabled": 1,
        "data": "apt.environment.set(\"key\", \"value\");",
        "name": "自定义脚本"
      }
    ],
    "post_tasks": []
  }
}
```

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {
		"target_id": "26d3cab4f8300",
		"project_id": "23a7b4f26c01000",
		"parent_id": "0",
		"target_type": "api",
		"name": "新建接口2",
		"version": 10,
		"sort": 3000,
		"method": "GET",
		"url": "",
		"protocol": "http/1.1",
		"mark_id": "1",
		"description": "",
		"request": {
			"auth": {
				"type": "noauth",
				"kv": {
					"key": "",
					"value": ""
				},
				"bearer": {
					"key": ""
				},
				"basic": {
					"username": "",
					"password": ""
				},
				"digest": {
					"username": "",
					"password": "",
					"realm": "",
					"nonce": "",
					"algorithm": "",
					"qop": "",
					"nc": "",
					"cnonce": "",
					"opaque": ""
				},
				"hawk": {
					"authId": "",
					"authKey": "",
					"algorithm": "",
					"user": "",
					"nonce": "",
					"extraData": "",
					"app": "",
					"delegation": "",
					"timestamp": "",
					"includePayloadHash": 0
				},
				"awsv4": {
					"accessKey": "",
					"secretKey": "",
					"region": "",
					"service": "",
					"sessionToken": "",
					"addAuthDataToQuery": 0
				},
				"ntlm": {
					"username": "",
					"password": "",
					"domain": "",
					"workstation": "",
					"disableRetryRequest": 0
				},
				"edgegrid": {
					"accessToken": "",
					"clientToken": "",
					"clientSecret": "",
					"nonce": "",
					"timestamp": "",
					"baseURi": "",
					"headersToSign": ""
				},
				"oauth1": {
					"consumerKey": "",
					"consumerSecret": "",
					"signatureMethod": "",
					"addEmptyParamsToSign": 0,
					"includeBodyHash": 0,
					"addParamsToHeader": 0,
					"realm": "",
					"version": "",
					"nonce": "",
					"timestamp": "",
					"verifier": "",
					"callback": "",
					"tokenSecret": "",
					"token": ""
				}
			},
			"body": {
				"mode": "none",
				"parameter": [],
				"raw": "",
				"raw_parameter": [],
				"raw_schema": {
					"type": "object"
				}
			},
			"pre_tasks": [],
			"post_tasks": [],
			"header": {
				"parameter": [
					{
						"param_id": "26d3caf4f83001",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					},
					{
						"param_id": "26da7c2e383002",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					},
					{
						"param_id": "2706f725f8302b",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					},
					{
						"param_id": "2713d2d6383005",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					},
					{
						"param_id": "27168867f8300e",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					},
					{
						"param_id": "2716a0f0783009",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					},
					{
						"param_id": "2717b0b9783004",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					}
				]
			},
			"query": {
				"parameter": []
			},
			"cookie": {
				"parameter": []
			},
			"resful": {
				"parameter": []
			}
		},
		"response": {
			"example": [
				{
					"example_id": "1",
					"raw": "",
					"raw_parameter": [],
					"expect": {
						"name": "成功",
						"isDefault": 1,
						"code": "200",
						"contentType": "json",
						"verifyType": "schema",
						"mock": "",
						"schema": {
							"type": "object"
						}
					}
				},
				{
					"example_id": "2",
					"raw": "",
					"raw_parameter": [],
					"expect": {
						"name": "失败",
						"isDefault": -1,
						"code": "404",
						"contentType": "json",
						"verifyType": "schema",
						"mock": "",
						"schema": {
							"type": "object"
						}
					}
				}
			],
			"is_check_result": 1
		},
		"attribute_info": {},
		"tags": [
			"pipi",
			"pizi1",
			"pizi2",
			"pizi3"
		],
		"created_at": "2024-03-09T01:18:07+08:00",
		"created_user": {
			"uid": "22acd167bc01000",
			"nick_name": "周义凯",
			"portrait": "https://img.cdn.apipost.cn/user/default_profile_photo/Vector-5.png"
		},
		"updated_at": "2024-03-09T01:18:07+08:00",
		"updated_user": {
			"uid": "22acd167bc01000",
			"nick_name": "周义凯",
			"portrait": "https://img.cdn.apipost.cn/user/default_profile_photo/Vector-5.png"
		},
		"status": 1,
		"is_locked": -1
	},
	"time": "2024-03-09T01:18:08.3417933+08:00"
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| data | - | object | - |
| data.version | 5 | integer | - |
| data.sort | 5 | integer | - |
| data.created_at | 2024-01-22T22:05:38+08:00 | string | - |
| data.created_user | - | object | - |
| data.created_user.uid | 01f9cc90dac01000 | string | - |
| data.created_user.nick_name | 周凯3 | string | - |
| data.updated_at | 2024-01-24T14:41:11+08:00 | string | - |
| data.updated_user | - | object | - |
| data.updated_user.uid | 01f9cc90dac01000 | string | - |
| data.updated_user.nick_name | 周凯3 | string | - |
| time | 1706078471 | integer | - |

* id冲突(200)

```javascript
{
	"code": 14004,
	"msg": "target_id冲突",
	"msg_en": "Target ID conflict",
	"data": {},
	"time": 1706079638
}
```

* 项目已锁定(200)

```javascript
{
	"code": 13002,
	"msg": "该项目已被项目管理员或团队超管锁定，无法进行此操作",
	"data": {},
	"time": 1706673551
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 14003 | integer | - |
| msg | 接口已被周凯3锁定 | string | - |
| data | - | object | - |
| time | 1706673551 | integer | - |

**Query**

### 创建接口（Markdown）

> 创建人: 周义凯

> 更新人: Stilwell

> 创建时间: 2025-12-29 16:56:04

> 更新时间: 2026-04-16 17:57:18

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/apis/create

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
  "project_id": "{{project_id}}",
  "project_code": "{{project_code}}",
  "parent_id": "0",
  "target_type": "doc",
  "name": "新建文本",
  "mark_id": "1",
  "tags": [],
  "description": ""
}
```

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
    "code": 0,
    "msg": "成功",
    "data": {
        "target_id": "11340d4cf01001",
        "project_id": "2a7861efbc64000",
        "parent_id": "0",
        "target_type": "doc",
        "name": "新建文本",
        "version": 31,
        "sort": 7000,
        "mark_id": "1",
        "description": "",
        "attribute_info": {},
        "tags": [],
        "created_at": "2024-10-10T10:11:02+08:00",
        "created_user": {
            "uid": "1381b8",
            "nick_name": "芒果",
            "portrait": "https://img.cdn.apipost.cn/upload/user/1278392/log/b1b2a051-e10f-49ba-89c6-d0a13b487610.png"
        },
        "updated_at": "2024-10-10T10:11:02+08:00",
        "updated_user": {
            "uid": "1381b8",
            "nick_name": "芒果",
            "portrait": "https://img.cdn.apipost.cn/upload/user/1278392/log/b1b2a051-e10f-49ba-89c6-d0a13b487610.png"
        },
        "status": 1,
        "is_locked": -1
    },
    "time": "2024-10-10T10:11:03.091703179+08:00",
    "extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| data | - | object | - |
| data.version | 5 | integer | - |
| data.sort | 5 | integer | - |
| data.created_at | 2024-01-22T22:05:38+08:00 | string | - |
| data.created_user | - | object | - |
| data.created_user.uid | 01f9cc90dac01000 | string | - |
| data.created_user.nick_name | 周凯3 | string | - |
| data.updated_at | 2024-01-24T14:41:11+08:00 | string | - |
| data.updated_user | - | object | - |
| data.updated_user.uid | 01f9cc90dac01000 | string | - |
| data.updated_user.nick_name | 周凯3 | string | - |
| time | 1706078471 | integer | - |

* id冲突(200)

```javascript
{
	"code": 14004,
	"msg": "target_id冲突",
	"msg_en": "Target ID conflict",
	"data": {},
	"time": 1706079638
}
```

* 项目已锁定(200)

```javascript
{
	"code": 13002,
	"msg": "该项目已被项目管理员或团队超管锁定，无法进行此操作",
	"data": {},
	"time": 1706673551
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 14003 | integer | - |
| msg | 接口已被周凯3锁定 | string | - |
| data | - | object | - |
| time | 1706673551 | integer | - |

**Query**

### 创建接口（SSE类型）

> 创建人: 周义凯

> 更新人: Stilwell

> 创建时间: 2025-12-29 16:55:50

> 更新时间: 2026-04-16 17:57:30

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/apis/create

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
	"project_id": "{{project_id}}",
	"project_code": "{{project_code}}",
	"target_type": "sse",
	"parent_id": "0",
	"name": "新建接口",
	"mark_id": "1",
	"method": "GET", //请求方式
	"url": "", //请求地址
	"protocol": "http/1.1",
	"description": "",
	"request": {
		"auth": {
			"type": "noauth",
			"kv": {
				"key": "",
				"value": ""
			},
			"bearer": {
				"key": ""
			},
			"basic": {
				"username": "",
				"password": ""
			},
			"digest": {
				"username": "",
				"password": "",
				"realm": "",
				"nonce": "",
				"algorithm": "",
				"qop": "",
				"nc": "",
				"cnonce": "",
				"opaque": ""
			},
			"hawk": {
				"authId": "",
				"authKey": "",
				"algorithm": "",
				"user": "",
				"nonce": "",
				"extraData": "",
				"app": "",
				"delegation": "",
				"timestamp": "",
				"includePayloadHash": 0
			},
			"awsv4": {
				"accessKey": "",
				"secretKey": "",
				"region": "",
				"service": "",
				"sessionToken": "",
				"addAuthDataToQuery": 0
			},
			"ntlm": {
				"username": "",
				"password": "",
				"domain": "",
				"workstation": "",
				"disableRetryRequest": 0
			},
			"edgegrid": {
				"accessToken": "",
				"clientToken": "",
				"clientSecret": "",
				"nonce": "",
				"timestamp": "",
				"baseURi": "",
				"headersToSign": ""
			},
			"oauth1": {
				"consumerKey": "",
				"consumerSecret": "",
				"signatureMethod": "",
				"addEmptyParamsToSign": 0,
				"includeBodyHash": 0,
				"addParamsToHeader": 0,
				"realm": "",
				"version": "",
				"nonce": "",
				"timestamp": "",
				"verifier": "",
				"callback": "",
				"tokenSecret": "",
				"token": ""
			}
		},
		"body": {
			"mode": "none",
			"parameter": [],
			"raw": "",
			"raw_parameter": [],
			"raw_schema": {
				"type": "object"
			},
			"binary": null
		},
		"pre_tasks": [],
		"post_tasks": [],
		"header": {
			"parameter": [
				{
					"param_id": "26d3caf4f83001",
					"description": "",
					"field_type": "string",
					"is_checked": 1,
					"key": "",
					"not_null": 1,
					"value": ""
				}
			]
		},
		"query": {
			"parameter": []
		},
		"cookie": {
			"parameter": []
		},
		"restful": {
			"parameter": []
		}
	},
	"response": {
		"example": [
			{
				"example_id": "1",
				"raw": "",
				"raw_parameter": [],
				"expect": {
					"name": "成功",
					"is_default": 1,
					"code": "200",
					"content_type": "json",
					"verify_type": "schema",
					"mock": "",
					"schema": {}
				}
			},
			{
				"example_id": "2",
				"raw": "",
				"raw_parameter": [],
				"expect": {
					"name": "失败",
					"is_default": -1,
					"code": "404",
					"content_type": "json",
					"verify_type": "schema",
					"mock": "",
					"schema": {}
				}
			}
		],
		"is_check_result": 1
	},
	"attribute_info": {},
	"tags": [
		"pipi",
		"pizi1",
		"pizi2",
		"pizi3"
	]
}
```

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {
		"target_id": "26d3cab4f8300",
		"project_id": "23a7b4f26c01000",
		"parent_id": "0",
		"target_type": "api",
		"name": "新建接口2",
		"version": 10,
		"sort": 3000,
		"method": "GET",
		"url": "",
		"protocol": "http/1.1",
		"mark_id": "1",
		"description": "",
		"request": {
			"auth": {
				"type": "noauth",
				"kv": {
					"key": "",
					"value": ""
				},
				"bearer": {
					"key": ""
				},
				"basic": {
					"username": "",
					"password": ""
				},
				"digest": {
					"username": "",
					"password": "",
					"realm": "",
					"nonce": "",
					"algorithm": "",
					"qop": "",
					"nc": "",
					"cnonce": "",
					"opaque": ""
				},
				"hawk": {
					"authId": "",
					"authKey": "",
					"algorithm": "",
					"user": "",
					"nonce": "",
					"extraData": "",
					"app": "",
					"delegation": "",
					"timestamp": "",
					"includePayloadHash": 0
				},
				"awsv4": {
					"accessKey": "",
					"secretKey": "",
					"region": "",
					"service": "",
					"sessionToken": "",
					"addAuthDataToQuery": 0
				},
				"ntlm": {
					"username": "",
					"password": "",
					"domain": "",
					"workstation": "",
					"disableRetryRequest": 0
				},
				"edgegrid": {
					"accessToken": "",
					"clientToken": "",
					"clientSecret": "",
					"nonce": "",
					"timestamp": "",
					"baseURi": "",
					"headersToSign": ""
				},
				"oauth1": {
					"consumerKey": "",
					"consumerSecret": "",
					"signatureMethod": "",
					"addEmptyParamsToSign": 0,
					"includeBodyHash": 0,
					"addParamsToHeader": 0,
					"realm": "",
					"version": "",
					"nonce": "",
					"timestamp": "",
					"verifier": "",
					"callback": "",
					"tokenSecret": "",
					"token": ""
				}
			},
			"body": {
				"mode": "none",
				"parameter": [],
				"raw": "",
				"raw_parameter": [],
				"raw_schema": {
					"type": "object"
				}
			},
			"pre_tasks": [],
			"post_tasks": [],
			"header": {
				"parameter": [
					{
						"param_id": "26d3caf4f83001",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					},
					{
						"param_id": "26da7c2e383002",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					},
					{
						"param_id": "2706f725f8302b",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					},
					{
						"param_id": "2713d2d6383005",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					},
					{
						"param_id": "27168867f8300e",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					},
					{
						"param_id": "2716a0f0783009",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					},
					{
						"param_id": "2717b0b9783004",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					}
				]
			},
			"query": {
				"parameter": []
			},
			"cookie": {
				"parameter": []
			},
			"resful": {
				"parameter": []
			}
		},
		"response": {
			"example": [
				{
					"example_id": "1",
					"raw": "",
					"raw_parameter": [],
					"expect": {
						"name": "成功",
						"isDefault": 1,
						"code": "200",
						"contentType": "json",
						"verifyType": "schema",
						"mock": "",
						"schema": {
							"type": "object"
						}
					}
				},
				{
					"example_id": "2",
					"raw": "",
					"raw_parameter": [],
					"expect": {
						"name": "失败",
						"isDefault": -1,
						"code": "404",
						"contentType": "json",
						"verifyType": "schema",
						"mock": "",
						"schema": {
							"type": "object"
						}
					}
				}
			],
			"is_check_result": 1
		},
		"attribute_info": {},
		"tags": [
			"pipi",
			"pizi1",
			"pizi2",
			"pizi3"
		],
		"created_at": "2024-03-09T01:18:07+08:00",
		"created_user": {
			"uid": "22acd167bc01000",
			"nick_name": "周义凯",
			"portrait": "https://img.cdn.apipost.cn/user/default_profile_photo/Vector-5.png"
		},
		"updated_at": "2024-03-09T01:18:07+08:00",
		"updated_user": {
			"uid": "22acd167bc01000",
			"nick_name": "周义凯",
			"portrait": "https://img.cdn.apipost.cn/user/default_profile_photo/Vector-5.png"
		},
		"status": 1,
		"is_locked": -1
	},
	"time": "2024-03-09T01:18:08.3417933+08:00"
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| data | - | object | - |
| data.version | 5 | integer | - |
| data.sort | 5 | integer | - |
| data.created_at | 2024-01-22T22:05:38+08:00 | string | - |
| data.created_user | - | object | - |
| data.created_user.uid | 01f9cc90dac01000 | string | - |
| data.created_user.nick_name | 周凯3 | string | - |
| data.updated_at | 2024-01-24T14:41:11+08:00 | string | - |
| data.updated_user | - | object | - |
| data.updated_user.uid | 01f9cc90dac01000 | string | - |
| data.updated_user.nick_name | 周凯3 | string | - |
| time | 1706078471 | integer | - |

* id冲突(200)

```javascript
{
	"code": 14004,
	"msg": "target_id冲突",
	"msg_en": "Target ID conflict",
	"data": {},
	"time": 1706079638
}
```

* 项目已锁定(200)

```javascript
{
	"code": 13002,
	"msg": "该项目已被项目管理员或团队超管锁定，无法进行此操作",
	"data": {},
	"time": 1706673551
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 14003 | integer | - |
| msg | 接口已被周凯3锁定 | string | - |
| data | - | object | - |
| time | 1706673551 | integer | - |

**Query**

### 创建接口（Graphql类型）

> 创建人: 周义凯

> 更新人: Stilwell

> 创建时间: 2025-12-29 16:58:45

> 更新时间: 2026-04-16 17:57:41

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/apis/create

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
    "project_id": "{{project_id}}",
    "project_code": "{{project_code}}",
    "parent_id": "0",
    "target_type": "graphql",
    "name": "未命名GraphQL查询",
    "url": "",
    "mark_id": "1",
    "description": "",
    "request": {
        "auth": {
            "type": "inherit",
            "kv": {
                "key": "",
                "value": "",
                "in": "header"
            },
            "bearer": {
                "key": ""
            },
            "basic": {
                "username": "",
                "password": ""
            },
            "digest": {
                "username": "",
                "password": "",
                "realm": "",
                "nonce": "",
                "algorithm": "",
                "qop": "",
                "nc": "",
                "cnonce": "",
                "opaque": ""
            },
            "hawk": {
                "authId": "",
                "authKey": "",
                "algorithm": "",
                "user": "",
                "nonce": "",
                "extraData": "",
                "default": "",
                "delegation": "",
                "timestamp": "",
                "includePayloadHash": false
            },
            "awsv4": {
                "accessKey": "",
                "secretKey": "",
                "region": "",
                "service": "",
                "sessionToken": "",
                "addAuthDataToQuery": false
            },
            "ntlm": {
                "username": "",
                "password": "",
                "entity": "",
                "workstation": "",
                "disableRetryRequest": false
            },
            "edgegrid": {
                "accessToken": "",
                "clientToken": "",
                "clientSecret": "",
                "nonce": "",
                "timestamp": "",
                "baseURi": "",
                "headersToSign": ""
            },
            "oauth1": {
                "consumerKey": "",
                "consumerSecret": "",
                "signatureMethod": "HMAC-SHA1",
                "addEmptyParamsToSign": true,
                "includeBodyHash": true,
                "addParamsToHeader": false,
                "disableHeaderEncoding": false,
                "realm": "",
                "version": "1.0",
                "nonce": "",
                "timestamp": "",
                "verifier": "",
                "callback": "",
                "tokenSecret": "",
                "token": ""
            },
            "jwt": {
                "addTokenTo": "header",
                "algorithm": "HS256",
                "secret": "",
                "isSecretBase64Encoded": false,
                "payload": "",
                "headerPrefix": "Bearer",
                "queryParamKey": "token",
                "header": ""
            },
            "asap": {
                "alg": "HS256",
                "iss": "",
                "aud": "",
                "kid": "",
                "privateKey": "",
                "sub": "",
                "claims": "",
                "exp": ""
            }
        },
        "body": {
            "query_schema": {},
            "query_list": [
                {
                    "param_id": "e6319237e9025",
                    "name": "自定义查询",
                    "query": "",
                    "variables": "",
                    "response": {
                        "mode": "json",
                        "raw": "",
                        "raw_parameter": [],
                        "raw_schema": {
                            "type": "object"
                        }
                    }
                }
            ]
        },
        "cookie": {
            "parameter": []
        },
        "pre_tasks": [],
        "post_tasks": [],
        "header": {
            "parameter": []
        }
    },
    "response": {
        "example": [
            {
                "example_id": "1",
                "raw": "",
                "raw_parameter": [],
                "headers": [],
                "expect": {
                    "code": "200",
                    "content_type": "json",
                    "is_default": 1,
                    "mock": "",
                    "name": "成功",
                    "schema": {
                        "type": "object",
                        "properties": {}
                    },
                    "verify_type": "schema",
                    "sleep": 0
                }
            },
            {
                "example_id": "2",
                "raw": "",
                "raw_parameter": [],
                "headers": [],
                "expect": {
                    "code": "404",
                    "content_type": "json",
                    "is_default": -1,
                    "mock": "",
                    "name": "失败",
                    "schema": {
                        "type": "object",
                        "properties": {}
                    },
                    "verify_type": "schema",
                    "sleep": 0
                }
            }
        ],
        "is_check_result": 1
    },
    "tags": []
}
```

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
暂无数据
```

* 失败(200)

```javascript
暂无数据
```

**Query**

### 创建接口（Websocket）

> 创建人: 周义凯

> 更新人: Stilwell

> 创建时间: 2025-12-29 16:56:35

> 更新时间: 2026-04-16 17:57:51

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/apis/create

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
    "project_id": "{{project_id}}",
    "project_code": "{{project_code}}",
    "parent_id": "0",
    "target_type": "websocket2",
    "name": "未命名WS链接",
    "mark_id": "1",
    "request": {
        "cookie": {
            "parameter": []
        },
        "header": {
            "parameter": []
        },
        "query": {
            "parameter": []
        }
    },
    "message": [
        {
            "name": "消息",
            "param_id": "f74d60fbac000",
            "request": {
                "mode": "text",
                "raw": "",
                "raw_parameter": [],
                "raw_schema": {
                    "type": "object"
                }
            },
            "response": {
                "mode": "text",
                "raw": "",
                "raw_parameter": [],
                "raw_schema": {
                    "type": "object"
                }
            }
        }
    ],
    "url": "",
    "description": "",
    "tags": [],
    "config": {
        "certificate_verification": -1,
        "information_size": 5,
        "reconnect_num": 5,
        "reconnect_time": 5000,
        "shake_hands_timeout": 0
    }
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| target_id | 26d3cab4f83002 | string | 是 | 接口id |
| target_type | api | string | 是 | 类型 api-接口 folder-目录 3doc-文档 websocket grpc socket socket_method |
| parent_id | 0 | string | 是 | 父目录ID  根目录为"0" |
| name | 新建接口 | string | 是 | 接口名称 |
| version | 3 | integer | 是 | 版本号 |
| mark_id | 1 | string | 是 | 接口完成状态：1开发中  2已完成 3需修改 |
| sort | 1000 | integer | 是 | 序号 |
| project_id | {{project_id}} | string | 是 | 项目id |
| protocol | http/1.1 | string | 是 | - |
| description | - | string | 是 | 接口说明 |
| request | - | object | 是 | - |
| request.auth | - | object | 是 | - |
| request.auth.type | noauth | string | 是 | - |
| request.auth.kv | - | object | 是 | - |
| request.auth.kv.key | - | string | 是 | 类型: name,intro,logo,default_mark |
| request.auth.kv.value | - | string | 是 | 如果是is_describe_library 值是int 1开启 -1关闭 |
| request.auth.bearer | - | object | 是 | - |
| request.auth.bearer.key | - | string | 是 | 类型: name,intro,logo,default_mark |
| request.auth.basic | - | object | 是 | - |
| request.auth.basic.username | - | string | 是 | - |
| request.auth.basic.password | - | string | 是 | - |
| request.auth.digest | - | object | 是 | - |
| request.auth.digest.username | - | string | 是 | - |
| request.auth.digest.password | - | string | 是 | - |
| request.auth.digest.realm | - | string | 是 | - |
| request.auth.digest.nonce | - | string | 是 | - |
| request.auth.digest.algorithm | - | string | 是 | - |
| request.auth.digest.qop | - | string | 是 | - |
| request.auth.digest.nc | - | string | 是 | - |
| request.auth.digest.cnonce | - | string | 是 | - |
| request.auth.digest.opaque | - | string | 是 | - |
| request.auth.hawk | - | object | 是 | - |
| request.auth.hawk.authId | - | string | 是 | - |
| request.auth.hawk.authKey | - | string | 是 | - |
| request.auth.hawk.algorithm | - | string | 是 | - |
| request.auth.hawk.user | - | string | 是 | - |
| request.auth.hawk.nonce | - | string | 是 | - |
| request.auth.hawk.extraData | - | string | 是 | - |
| request.auth.hawk.app | - | string | 是 | - |
| request.auth.hawk.delegation | - | string | 是 | - |
| request.auth.hawk.timestamp | - | string | 是 | - |
| request.auth.hawk.includePayloadHash | 0 | integer | 是 | - |
| request.auth.awsv4 | - | object | 是 | - |
| request.auth.awsv4.accessKey | - | string | 是 | - |
| request.auth.awsv4.secretKey | - | string | 是 | - |
| request.auth.awsv4.region | - | string | 是 | - |
| request.auth.awsv4.service | - | string | 是 | - |
| request.auth.awsv4.sessionToken | - | string | 是 | - |
| request.auth.awsv4.addAuthDataToQuery | 0 | integer | 是 | - |
| request.auth.ntlm | - | object | 是 | - |
| request.auth.ntlm.username | - | string | 是 | - |
| request.auth.ntlm.password | - | string | 是 | - |
| request.auth.ntlm.domain | - | string | 是 | - |
| request.auth.ntlm.workstation | - | string | 是 | - |
| request.auth.ntlm.disableRetryRequest | 0 | integer | 是 | - |
| request.auth.edgegrid | - | object | 是 | - |
| request.auth.edgegrid.accessToken | - | string | 是 | - |
| request.auth.edgegrid.clientToken | - | string | 是 | - |
| request.auth.edgegrid.clientSecret | - | string | 是 | - |
| request.auth.edgegrid.nonce | - | string | 是 | - |
| request.auth.edgegrid.timestamp | - | string | 是 | - |
| request.auth.edgegrid.baseURi | - | string | 是 | - |
| request.auth.edgegrid.headersToSign | - | string | 是 | - |
| request.auth.oauth1 | - | object | 是 | - |
| request.auth.oauth1.consumerKey | - | string | 是 | - |
| request.auth.oauth1.consumerSecret | - | string | 是 | - |
| request.auth.oauth1.signatureMethod | - | string | 是 | - |
| request.auth.oauth1.addEmptyParamsToSign | 0 | integer | 是 | - |
| request.auth.oauth1.includeBodyHash | 0 | integer | 是 | - |
| request.auth.oauth1.addParamsToHeader | 0 | integer | 是 | - |
| request.auth.oauth1.realm | - | string | 是 | - |
| request.auth.oauth1.version | - | string | 是 | - |
| request.auth.oauth1.nonce | - | string | 是 | - |
| request.auth.oauth1.timestamp | - | string | 是 | - |
| request.auth.oauth1.verifier | - | string | 是 | - |
| request.auth.oauth1.callback | - | string | 是 | - |
| request.auth.oauth1.tokenSecret | - | string | 是 | - |
| request.auth.oauth1.token | - | string | 是 | - |
| request.body | - | object | 是 | - |
| request.body.mode | none | string | 是 | - |
| request.body.parameter | - | array | 是 | - |
| request.body.raw | - | string | 是 | - |
| request.body.raw_parameter | - | array | 是 | - |
| request.body.raw_schema | - | object | 是 | - |
| request.body.raw_schema.type | object | string | 是 | - |
| request.body.binary | null | null | 是 | - |
| request.pre_tasks | - | array | 是 | - |
| request.post_tasks | - | array | 是 | - |
| request.header | - | object | 是 | - |
| request.header.parameter | - | array | 是 | - |
| request.header.parameter.param_id | 26d3caf4f83001 | string | 是 | - |
| request.header.parameter.description | - | string | 是 | - |
| request.header.parameter.field_type | String | string | 是 | 类型 |
| request.header.parameter.is_checked | 1 | integer | 是 | - |
| request.header.parameter.key | - | string | 是 | 类型: name,intro,logo,default_mark |
| request.header.parameter.not_null | 1 | integer | 是 | - |
| request.header.parameter.value | - | string | 是 | 如果是is_describe_library 值是int 1开启 -1关闭 |
| request.query | - | object | 是 | - |
| request.query.parameter | - | array | 是 | - |
| request.cookie | - | object | 是 | - |
| request.cookie.parameter | - | array | 是 | - |
| request.restful | - | object | 是 | - |
| request.restful.parameter | - | array | 是 | - |
| response | - | object | 是 | - |
| response.example | - | array | 是 | - |
| response.example.example_id | 1 | string | 是 | - |
| response.example.raw | - | string | 是 | - |
| response.example.raw_parameter | - | array | 是 | - |
| response.example.expect | - | object | 是 | - |
| response.example.expect.name | 成功 | string | 是 | - |
| response.example.expect.is_default | 1 | integer | 是 | 是否为用户默认(私有)团队 -1-否 1-是 |
| response.example.expect.code | 200 | string | 是 | - |
| response.example.expect.content_type | json | string | 是 | - |
| response.example.expect.verify_type | schema | string | 是 | - |
| response.example.expect.mock | - | string | 是 | - |
| response.example.expect.schema | - | object | 是 | - |
| response.is_check_result | 1 | integer | 是 | - |
| attribute_info | - | object | 是 | - |
| tags | pipi | array | 是 | - |
| is_force | -1 | integer | 是 | 是否强行覆盖 -1不  1执行强行覆盖 |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
    "code": 0,
    "msg": "成功",
    "data": {
        "target_id": "11396c6cf01003",
        "project_id": "2a7861efbc64000",
        "parent_id": "0",
        "target_type": "websocket",
        "name": "新建Websocket",
        "version": 32,
        "sort": 8000,
        "method": "Raw",
        "url": "",
        "mark_id": "1",
        "description": "",
        "request": {
            "header": {
                "parameter": []
            },
            "query": {
                "parameter": []
            },
            "event": {
                "parameter": []
            },
            "message": {
                "mode": "text",
                "raw": "",
                "raw_parameter": [],
                "raw_schema": {
                    "type": "object"
                }
            }
        },
        "config": {
            "socket_version": "v4",
            "shake_hands_path": "",
            "shake_hands_timeout": 0,
            "reconnect_num": 5,
            "reconnect_time": 5000,
            "information_size": 5
        },
        "created_at": "2024-10-10T10:34:31+08:00",
        "created_user": {
            "uid": "1381b8",
            "nick_name": "芒果",
            "portrait": "https://img.cdn.apipost.cn/upload/user/1278392/log/b1b2a051-e10f-49ba-89c6-d0a13b487610.png"
        },
        "updated_at": "2024-10-10T10:34:31+08:00",
        "updated_user": {
            "uid": "1381b8",
            "nick_name": "芒果",
            "portrait": "https://img.cdn.apipost.cn/upload/user/1278392/log/b1b2a051-e10f-49ba-89c6-d0a13b487610.png"
        },
        "status": 1,
        "is_locked": -1
    },
    "time": "2024-10-10T10:34:31.512333006+08:00",
    "extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| data | - | object | - |
| data.version | 5 | integer | - |
| data.sort | 5 | integer | - |
| data.created_at | 2024-01-22T22:05:38+08:00 | string | - |
| data.created_user | - | object | - |
| data.created_user.uid | 01f9cc90dac01000 | string | - |
| data.created_user.nick_name | 周凯3 | string | - |
| data.updated_at | 2024-01-24T14:41:11+08:00 | string | - |
| data.updated_user | - | object | - |
| data.updated_user.uid | 01f9cc90dac01000 | string | - |
| data.updated_user.nick_name | 周凯3 | string | - |
| time | 1706078471 | integer | - |

* 失败(200)

```javascript
暂无数据
```

* id冲突(200)

```javascript
{
	"code": 14004,
	"msg": "target_id冲突",
	"msg_en": "Target ID conflict",
	"data": {},
	"time": 1706079638
}
```

* 项目已锁定(200)

```javascript
{
	"code": 13002,
	"msg": "该项目已被项目管理员或团队超管锁定，无法进行此操作",
	"data": {},
	"time": 1706673551
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 14003 | integer | - |
| msg | 接口已被周凯3锁定 | string | - |
| data | - | object | - |
| time | 1706673551 | integer | - |

**Query**

### 创建接口（SocketIO类型）

> 创建人: 周义凯

> 更新人: Stilwell

> 创建时间: 2025-12-29 16:57:32

> 更新时间: 2026-04-16 17:58:03

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/apis/create

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
    "project_id": "{{project_id}}",
    "project_code": "{{project_code}}",
    "parent_id": "0",
    "target_type": "socketio",
    "name": "未命名Socket.IO会话",
    "mark_id": "1",
    "request": {
        "cookie": {
            "parameter": []
        },
        "header": {
            "parameter": []
        },
        "query": {
            "parameter": []
        },
        "event": {
            "parameter": [
                {
                    "param_id": "26d3caf4f83001",
                    "description": "",
                    "field_type": "string",
                    "is_checked": 1,
                    "key": "",
                    "not_null": 1,
                    "value": ""
                }
            ]
        }
    },
    "message": [
        {
            "name": "消息",
            "param_id": "f74d60fbac001",
            "request": {
                "mode": "text",
                "raw": "",
                "raw_parameter": [],
                "raw_schema": {
                    "type": "object"
                }
            },
            "response": {
                "mode": "text",
                "raw": "",
                "raw_parameter": [],
                "raw_schema": {
                    "type": "object"
                }
            }
        }
    ],
    "url": "",
    "description": "",
    "tags": [],
    "config": {
        "reconnect_num": 5,
        "reconnect_time": 5000,
        "shake_hands_path": "/socket.io",
        "shake_hands_timeout": 0,
        "socket_version": "v4",
        "certificate_verification": -1
    }
}
```

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
暂无数据
```

* 失败(200)

```javascript
暂无数据
```

**Query**

### 创建接口（TCP客户端） 

> 创建人: 周义凯

> 更新人: Stilwell

> 创建时间: 2025-12-29 16:56:19

> 更新时间: 2026-04-16 17:58:13

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/apis/create

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
  "project_id": "{{project_id}}",
  "project_code": "{{project_code}}",
  "parent_id": "0",
  "target_type": "socket",
  "name": "未命名TCP客户端",
  "mark_id": "1",
  "method": "TCP",
  "description": "",
  "url": "",
  "request": {
    "timeout": 10,
    "end_func": {
      "name": "none",
      "option": ""
    }
  }
}
```

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
    "code": 0,
    "msg": "成功",
    "data": {
        "target_id": "1139baa7301004",
        "project_id": "2a7861efbc64000",
        "parent_id": "0",
        "target_type": "socket",
        "name": "新建TCP客户端",
        "version": 33,
        "sort": 9000,
        "method": "TCP",
        "url": "",
        "description": "",
        "request": {
            "timeout": 10,
            "end_func": {
                "name": "none",
                "option": ""
            }
        },
        "created_at": "2024-10-10T10:35:52+08:00",
        "created_user": {
            "uid": "1381b8",
            "nick_name": "芒果",
            "portrait": "https://img.cdn.apipost.cn/upload/user/1278392/log/b1b2a051-e10f-49ba-89c6-d0a13b487610.png"
        },
        "updated_at": "2024-10-10T10:35:52+08:00",
        "updated_user": {
            "uid": "1381b8",
            "nick_name": "芒果",
            "portrait": "https://img.cdn.apipost.cn/upload/user/1278392/log/b1b2a051-e10f-49ba-89c6-d0a13b487610.png"
        },
        "status": 1,
        "is_locked": -1
    },
    "time": "2024-10-10T10:35:52.324839699+08:00",
    "extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| data | - | object | - |
| data.version | 5 | integer | - |
| data.sort | 5 | integer | - |
| data.created_at | 2024-01-22T22:05:38+08:00 | string | - |
| data.created_user | - | object | - |
| data.created_user.uid | 01f9cc90dac01000 | string | - |
| data.created_user.nick_name | 周凯3 | string | - |
| data.updated_at | 2024-01-24T14:41:11+08:00 | string | - |
| data.updated_user | - | object | - |
| data.updated_user.uid | 01f9cc90dac01000 | string | - |
| data.updated_user.nick_name | 周凯3 | string | - |
| time | 1706078471 | integer | - |

* 失败(200)

```javascript
暂无数据
```

* id冲突(200)

```javascript
{
	"code": 14004,
	"msg": "target_id冲突",
	"msg_en": "Target ID conflict",
	"data": {},
	"time": 1706079638
}
```

* 项目已锁定(200)

```javascript
{
	"code": 13002,
	"msg": "该项目已被项目管理员或团队超管锁定，无法进行此操作",
	"data": {},
	"time": 1706673551
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 14003 | integer | - |
| msg | 接口已被周凯3锁定 | string | - |
| data | - | object | - |
| time | 1706673551 | integer | - |

**Query**

### 创建接口（TCP方法）

> 创建人: 周义凯

> 更新人: Stilwell

> 创建时间: 2025-12-29 16:56:46

> 更新时间: 2026-04-16 17:58:22

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/apis/create

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
  "project_id": "{{project_id}}",
  "project_code": "{{project_code}}",
  "parent_id": "fa9b536fac416",
  "target_type": "socket_method",
  "name": "未命名TCP方法",
  "mark_id": "1",
  "method": "TCP",
  "description": "",
  "request": {
    "body": {
      "mode": "xml",
      "parameter": [
        {
          "definition": "",
          "key": "",
          "value": "",
          "description": "",
          "is_checked": 1,
          "param_id": "faa8520bac41a",
          "static": true,
          "rules": {
            "common": "",
            "content_type": "custom",
            "custom": "",
            "fill_type": "",
            "length": 0,
            "delimiter": ""
          }
        }
      ],
      "raw": "",
      "raw_parameter": [],
      "raw_schema": {
        "type": "object"
      }
    },
    "post_tasks": [],
    "configs": {
      "charset": "utf8",
      "func": {
        "request": [],
        "response": []
      }
    }
  },
  "response": {
    "is_check_result": 1,
    "example": [
      {
        "example_id": "1",
        "raw": "",
        "raw_parameter": [],
        "headers": [],
        "expect": {
          "name": "成功",
          "is_default": 1,
          "code": "200",
          "sleep": 0,
          "content_type": "json",
          "verify_type": "schema",
          "mock": "",
          "schema": {
            "type": "object",
            "properties": {}
          }
        }
      },
      {
        "example_id": "2",
        "raw": "",
        "raw_parameter": [],
        "headers": [],
        "expect": {
          "name": "失败",
          "is_default": -1,
          "code": "404",
          "sleep": 0,
          "content_type": "json",
          "verify_type": "schema",
          "mock": "",
          "schema": {
            "type": "object",
            "properties": {}
          }
        }
      }
    ]
  },
  "tags": []
}
```

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
    "code": 0,
    "msg": "成功",
    "data": {
        "target_id": "113a0238301005",
        "project_id": "2a7861efbc64000",
        "parent_id": "1139baa7301004",
        "target_type": "socket_method",
        "name": "新建TCP方法",
        "version": 34,
        "sort": 1000,
        "method": "TCP",
        "url": "",
        "mark_id": "1",
        "description": "",
        "request": {
            "body": {
                "mode": "xml",
                "parameter": [
                    {
                        "param_id": "113a02a4301007",
                        "description": "",
                        "is_checked": 1,
                        "key": "",
                        "value": "",
                        "definition": "",
                        "rules": {
                            "common": "",
                            "content_type": "custom",
                            "custom": "",
                            "fill_type": "",
                            "length": 0,
                            "delimiter": ""
                        }
                    }
                ],
                "raw": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<root></root>\n",
                "raw_parameter": [],
                "raw_schema": {
                    "type": "object"
                }
            },
            "post_tasks": [],
            "configs": {
                "charset": "utf8",
                "func": {
                    "request": [],
                    "response": []
                }
            }
        },
        "response": {
            "example": [
                {
                    "example_id": "1",
                    "raw": "",
                    "raw_parameter": [],
                    "expect": {
                        "code": "200",
                        "content_type": "json",
                        "is_default": 1,
                        "mock": "",
                        "name": "成功",
                        "schema": {
                            "type": "object",
                            "properties": {}
                        },
                        "verify_type": "schema"
                    }
                },
                {
                    "example_id": "2",
                    "raw": "",
                    "raw_parameter": [],
                    "expect": {
                        "code": "404",
                        "content_type": "json",
                        "is_default": -1,
                        "mock": "",
                        "name": "失败",
                        "schema": {
                            "type": "object",
                            "properties": {}
                        },
                        "verify_type": "schema"
                    }
                }
            ],
            "is_check_result": 1
        },
        "attribute_info": {},
        "tags": [],
        "created_at": "2024-10-10T10:37:04+08:00",
        "created_user": {
            "uid": "1381b8",
            "nick_name": "芒果",
            "portrait": "https://img.cdn.apipost.cn/upload/user/1278392/log/b1b2a051-e10f-49ba-89c6-d0a13b487610.png"
        },
        "updated_at": "2024-10-10T10:37:04+08:00",
        "updated_user": {
            "uid": "1381b8",
            "nick_name": "芒果",
            "portrait": "https://img.cdn.apipost.cn/upload/user/1278392/log/b1b2a051-e10f-49ba-89c6-d0a13b487610.png"
        },
        "status": 1,
        "is_locked": -1
    },
    "time": "2024-10-10T10:37:04.658058845+08:00",
    "extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| data | - | object | - |
| data.version | 5 | integer | - |
| data.sort | 5 | integer | - |
| data.created_at | 2024-01-22T22:05:38+08:00 | string | - |
| data.created_user | - | object | - |
| data.created_user.uid | 01f9cc90dac01000 | string | - |
| data.created_user.nick_name | 周凯3 | string | - |
| data.updated_at | 2024-01-24T14:41:11+08:00 | string | - |
| data.updated_user | - | object | - |
| data.updated_user.uid | 01f9cc90dac01000 | string | - |
| data.updated_user.nick_name | 周凯3 | string | - |
| time | 1706078471 | integer | - |

* 失败(200)

```javascript
暂无数据
```

* id冲突(200)

```javascript
{
	"code": 14004,
	"msg": "target_id冲突",
	"msg_en": "Target ID conflict",
	"data": {},
	"time": 1706079638
}
```

* 项目已锁定(200)

```javascript
{
	"code": 13002,
	"msg": "该项目已被项目管理员或团队超管锁定，无法进行此操作",
	"data": {},
	"time": 1706673551
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 14003 | integer | - |
| msg | 接口已被周凯3锁定 | string | - |
| data | - | object | - |
| time | 1706673551 | integer | - |

**Query**

### 获取多条接口详情

> 创建人: 周义凯

> 更新人: 周义凯

> 创建时间: 2025-12-23 11:41:20

> 更新时间: 2026-04-14 19:10:21

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/apis/details

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
    "project_id": "{{project_id}}",
    "project_code":"{{project_code}}",  //项目Code，project_id和project_code二选一即可. 优先project_id
    "target_ids": [
        "26d3cab4f83002"
    ]
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | 项目id |
| target_ids | 26d3cab4f83001 | array | 是 | 要处理的接口id |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"msg_en": "success",
	"data": {
		"list": [
			{
				"target_id": "001f9cc910780100",
				"project_id": "01f9cc9107801000",
				"parent_id": "0",
				"target_type": "folder",
				"name": "目录1111",
				"version": 31,
				"sort": 5000,
				"server_id": "0",
				"description": "",
				"request": {
					"auth": {
						"type": "kv",
						"kv": {
							"key": "",
							"value": ""
						},
						"bearer": {
							"key": ""
						},
						"basic": {
							"username": "",
							"password": ""
						},
						"digest": {
							"username": "",
							"password": "",
							"realm": "",
							"nonce": "",
							"algorithm": "",
							"qop": "",
							"nc": "",
							"cnonce": "",
							"opaque": ""
						},
						"hawk": {
							"authId": "",
							"authKey": "",
							"algorithm": "",
							"user": "",
							"nonce": "",
							"extraData": "",
							"app": "",
							"delegation": "",
							"timestamp": "",
							"includePayloadHash": 0
						},
						"awsv4": {
							"accessKey": "",
							"secretKey": "",
							"region": "",
							"service": "",
							"sessionToken": "",
							"addAuthDataToQuery": 0
						},
						"ntlm": {
							"username": "",
							"password": "",
							"domain": "",
							"workstation": "",
							"disableRetryRequest": 0
						},
						"edgegrid": {
							"accessToken": "",
							"clientToken": "",
							"clientSecret": "",
							"nonce": "",
							"timestamp": "",
							"baseURi": "",
							"headersToSign": ""
						},
						"oauth1": {
							"consumerKey": "",
							"consumerSecret": "",
							"signatureMethod": "",
							"addEmptyParamsToSign": 0,
							"includeBodyHash": 0,
							"addParamsToHeader": 0,
							"realm": "",
							"version": "",
							"nonce": "",
							"timestamp": "",
							"verifier": "",
							"callback": "",
							"tokenSecret": "",
							"token": ""
						}
					},
					"script": {
						"pre_script": "",
						"pre_script_switch": 0,
						"test": "",
						"test_switch": 1
					},
					"body": [
						{
							"param_id": "0001f9cc91078010",
							"description": "急啊急啊姐姐",
							"field_type": "String",
							"is_checked": 1,
							"key": "name",
							"not_null": 1,
							"value": "1"
						}
					],
					"header": [
						{
							"param_id": "001f9cc910780101",
							"description": "急啊急啊姐姐",
							"field_type": "String",
							"is_checked": 1,
							"key": "name",
							"not_null": 1,
							"value": "1"
						}
					],
					"query": [
						{
							"param_id": "001f9cc910780102",
							"description": "急啊急啊姐姐",
							"field_type": "String",
							"is_checked": 1,
							"key": "name",
							"not_null": 1,
							"value": "1"
						}
					],
					"cookie": []
				},
				"created_at": "2024-01-24T19:31:44+08:00",
				"created_user": {
					"uid": "01f9cc90dac01000",
					"nick_name": "周凯3"
				},
				"updated_at": "2024-01-29T14:21:18+08:00",
				"updated_user": {
					"uid": "01f9cc90dac01000",
					"nick_name": "周凯3"
				}
			},
			{
				"target_id": "0001423696538711",
				"project_id": "01f9cc9107801000",
				"parent_id": "001f9cc910780100",
				"target_type": "api",
				"name": "新建接口1",
				"version": 53,
				"sort": 3333,
				"method": "POST",
				"url": "?name=23a",
				"mark_id": "0",
				"description": "",
				"is_locked": 0,
				"request": {
					"auth": {
						"type": "kv",
						"kv": {
							"key": "",
							"value": ""
						},
						"bearer": {
							"key": ""
						},
						"basic": {
							"username": "",
							"password": ""
						},
						"digest": {
							"username": "",
							"password": "",
							"realm": "",
							"nonce": "",
							"algorithm": "",
							"qop": "",
							"nc": "",
							"cnonce": "",
							"opaque": ""
						},
						"hawk": {
							"authId": "",
							"authKey": "",
							"algorithm": "",
							"user": "",
							"nonce": "",
							"extraData": "",
							"app": "",
							"delegation": "",
							"timestamp": "",
							"includePayloadHash": 0
						},
						"awsv4": {
							"accessKey": "",
							"secretKey": "",
							"region": "",
							"service": "",
							"sessionToken": "",
							"addAuthDataToQuery": 0
						},
						"ntlm": {
							"username": "",
							"password": "",
							"domain": "",
							"workstation": "",
							"disableRetryRequest": 0
						},
						"edgegrid": {
							"accessToken": "",
							"clientToken": "",
							"clientSecret": "",
							"nonce": "",
							"timestamp": "",
							"baseURi": "",
							"headersToSign": ""
						},
						"oauth1": {
							"consumerKey": "",
							"consumerSecret": "",
							"signatureMethod": "",
							"addEmptyParamsToSign": 0,
							"includeBodyHash": 0,
							"addParamsToHeader": 0,
							"realm": "",
							"version": "",
							"nonce": "",
							"timestamp": "",
							"verifier": "",
							"callback": "",
							"tokenSecret": "",
							"token": ""
						}
					},
					"body": {
						"mode": "form-data",
						"parameter": [
							{
								"param_id": "0000000000001234",
								"contentType": "",
								"description": "",
								"field_type": "RegExp",
								"is_checked": 1,
								"key": "",
								"not_null": 1,
								"value": "20221111.jpg|2022111101.jpg",
								"filename": "20221111.jpg|2022111101.jpg"
							},
							{
								"param_id": "0000000000012345",
								"contentType": "",
								"description": "",
								"field_type": "string",
								"is_checked": 1,
								"key": "",
								"not_null": 1,
								"value": "20221111.jpg|2022111101.jpg"
							},
							{
								"param_id": "0000000000123456",
								"contentType": "",
								"description": "",
								"field_type": "string",
								"is_checked": 1,
								"key": "",
								"not_null": 1,
								"value": ""
							}
						],
						"raw": "{\n\t\"baa\": \"13106853838\"\n}",
						"raw_parameter": [],
						"raw_schema": {
							"APIPOST_ORDERS": [
								"baa"
							],
							"properties": {
								"baa": {
									"description": "",
									"mock": {
										"mock": "13279611195"
									},
									"type": "string"
								}
							},
							"required": [],
							"type": "object"
						}
					},
					"pre_tasks": null,
					"post_tasks": null,
					"header": {
						"parameter": []
					},
					"query": {
						"parameter": [
							{
								"param_id": "0000000001234567",
								"description": "",
								"field_type": "String",
								"is_checked": 1,
								"key": "name",
								"not_null": 1,
								"value": "23"
							}
						]
					},
					"cookie": {
						"parameter": []
					},
					"resful": {
						"parameter": []
					}
				},
				"response": {
					"example": {
						"1": {
							"raw": "{\n\t\"name\": \"却北当较整\"\n}",
							"raw_parameter": [],
							"expect": {
								"name": "成功",
								"isDefault": -1,
								"code": "2001",
								"contentType": "json",
								"verifyType": "schema",
								"mock": "{\r\n\t\"name\": \"却111111111整\"\r\n}",
								"schema": {
									"APIPOST_ORDERS": [
										"baa"
									],
									"properties": {
										"baa": {
											"description": "",
											"mock": {
												"mock": "13279611195"
											},
											"type": "string"
										}
									},
									"required": [],
									"type": "object"
								}
							}
						},
						"2": {
							"raw": "",
							"raw_parameter": [],
							"expect": {
								"name": "失败",
								"isDefault": -1,
								"code": "404",
								"contentType": "json",
								"verifyType": "schema",
								"mock": "",
								"schema": {
									"APIPOST_ORDERS": [
										"baa"
									],
									"properties": {
										"baa": {
											"description": "",
											"mock": {
												"mock": "13279611195"
											},
											"type": "string"
										}
									},
									"required": [],
									"type": "object"
								}
							}
						},
						"1f9cc9107801": {
							"raw": "",
							"raw_parameter": [],
							"expect": {
								"name": "aaaa",
								"isDefault": -1,
								"code": "200",
								"contentType": "json",
								"verifyType": "schema",
								"mock": "",
								"schema": {
									"APIPOST_ORDERS": [
										"baa"
									],
									"properties": {
										"baa": {
											"type": "string",
											"description": "",
											"mock": {
												"mock": "13279611195"
											}
										}
									},
									"required": [],
									"type": "object"
								}
							}
						}
					},
					"is_check_result": 0
				},
				"attribute_info": {
					"123456": "111111",
					"1234567": [
						"12345678",
						"123456789"
					]
				},
				"tags": [
					"hahaha",
					"heheheh"
				],
				"created_at": "2024-01-26T17:16:30+08:00",
				"created_user": {
					"uid": "01f9cc90dac01000",
					"nick_name": "周凯3"
				},
				"updated_at": "2024-01-29T17:22:52+08:00",
				"updated_user": {
					"uid": "01f9cc90dac01000",
					"nick_name": "周凯3"
				},
				"status": -1
			},
			{
				"target_id": "0014236965387113",
				"project_id": "01f9cc9107801000",
				"parent_id": "0",
				"target_type": "doc",
				"name": "新建doc",
				"version": 61,
				"sort": 7000,
				"mark_id": "0",
				"description": "文本内容",
				"is_locked": 0,
				"attribute_info": {
					"123456": "111111",
					"1234567": [
						"12345678",
						"123456789"
					]
				},
				"tags": [
					"hahaha",
					"heheheh"
				],
				"created_at": "2024-01-30T16:19:39+08:00",
				"created_user": {
					"uid": "01f9cc90dac01000",
					"nick_name": "周凯3"
				},
				"updated_at": "2024-01-30T16:19:39+08:00",
				"updated_user": {
					"uid": "01f9cc90dac01000",
					"nick_name": "周凯3"
				},
				"status": 0
			},
			{
				"target_id": "0014236965387112",
				"project_id": "01f9cc9107801000",
				"parent_id": "0",
				"target_type": "websocket",
				"name": "新建接口1",
				"version": 60,
				"sort": 6000,
				"method": "SockJs",
				"url": "?name=23a",
				"mark_id": "0",
				"description": "",
				"is_locked": 0,
				"request": {
					"header": {
						"parameter": []
					},
					"query": {
						"parameter": [
							{
								"param_id": "0000000123454231",
								"description": "",
								"field_type": "String",
								"is_checked": 1,
								"key": "name",
								"not_null": 1,
								"value": "23"
							}
						]
					},
					"event": {
						"parameter": [
							{
								"param_id": "0000000005156451",
								"description": "",
								"is_checked": 1,
								"key": "event11",
								"value": ""
							},
							{
								"param_id": "0000000088651681",
								"description": "",
								"is_checked": 10,
								"key": "event22",
								"value": ""
							}
						]
					},
					"message": {
						"mode": "Json",
						"raw": "{\n\t\"baa\": \"13106853838\"\n}",
						"raw_parameter": [
							{
								"param_id": "0000000004862153",
								"description": "",
								"field_type": "String",
								"is_checked": 1,
								"key": "baa",
								"not_null": 1,
								"value": "23"
							}
						],
						"raw_schema": {
							"APIPOST_ORDERS": [
								"baa"
							],
							"properties": {
								"baa": {
									"description": "",
									"mock": {
										"mock": "13738558860"
									},
									"type": "string"
								}
							},
							"required": [],
							"type": "object"
						}
					}
				},
				"config": {
					"socket_version": "v3",
					"shake_hands_path": "/path/socket.io",
					"shake_hands_timeout": 60,
					"reconnect_num": 2,
					"reconnect_time": 10,
					"information_size": 5
				},
				"created_at": "2024-01-30T16:16:56+08:00",
				"created_user": {
					"uid": "01f9cc90dac01000",
					"nick_name": "周凯3"
				},
				"updated_at": "2024-01-30T16:16:56+08:00",
				"updated_user": {
					"uid": "01f9cc90dac01000",
					"nick_name": "周凯3"
				},
				"status": 0
			}
		]
	},
	"time": 1706602849
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| data | - | object | - |
| data.list | - | array | - |
| data.list.target_id | 001f9cc910780100 | string | 删除的元素id |
| data.list.project_id | 01f9cc9107801000 | string | - |
| data.list.parent_id | 0 | string | 0为根节点 |
| data.list.target_type | folder | string | - |
| data.list.name | 目录1111 | string | - |
| data.list.version | 31 | integer | 版本 |
| data.list.sort | 5000 | integer | 正序排序 |
| data.list.server_id | 0 | string | 服务id 0是继承父级 |
| data.list.description | - | string | - |
| data.list.request | - | object | - |
| data.list.request.auth | - | object | - |
| data.list.request.auth.type | kv | string | - |
| data.list.request.auth.kv | - | object | - |
| data.list.request.auth.kv.key | - | string | 类型: name,intro,logo,default_mark |
| data.list.request.auth.kv.value | - | string | 如果是is_describe_library 值是int 1开启 -1关闭 |
| data.list.request.auth.bearer | - | object | - |
| data.list.request.auth.bearer.key | - | string | 类型: name,intro,logo,default_mark |
| data.list.request.auth.basic | - | object | - |
| data.list.request.auth.basic.username | - | string | - |
| data.list.request.auth.basic.password | - | string | - |
| data.list.request.auth.digest | - | object | - |
| data.list.request.auth.digest.username | - | string | - |
| data.list.request.auth.digest.password | - | string | - |
| data.list.request.auth.digest.realm | - | string | - |
| data.list.request.auth.digest.nonce | - | string | - |
| data.list.request.auth.digest.algorithm | - | string | - |
| data.list.request.auth.digest.qop | - | string | - |
| data.list.request.auth.digest.nc | - | string | - |
| data.list.request.auth.digest.cnonce | - | string | - |
| data.list.request.auth.digest.opaque | - | string | - |
| data.list.request.auth.hawk | - | object | - |
| data.list.request.auth.hawk.authId | - | string | - |
| data.list.request.auth.hawk.authKey | - | string | - |
| data.list.request.auth.hawk.algorithm | - | string | - |
| data.list.request.auth.hawk.user | - | string | - |
| data.list.request.auth.hawk.nonce | - | string | - |
| data.list.request.auth.hawk.extraData | - | string | - |
| data.list.request.auth.hawk.app | - | string | - |
| data.list.request.auth.hawk.delegation | - | string | - |
| data.list.request.auth.hawk.timestamp | - | string | - |
| data.list.request.auth.hawk.includePayloadHash | 0 | integer | - |
| data.list.request.auth.awsv4 | - | object | - |
| data.list.request.auth.awsv4.accessKey | - | string | - |
| data.list.request.auth.awsv4.secretKey | - | string | - |
| data.list.request.auth.awsv4.region | - | string | - |
| data.list.request.auth.awsv4.service | - | string | - |
| data.list.request.auth.awsv4.sessionToken | - | string | - |
| data.list.request.auth.awsv4.addAuthDataToQuery | 0 | integer | - |
| data.list.request.auth.ntlm | - | object | - |
| data.list.request.auth.ntlm.username | - | string | - |
| data.list.request.auth.ntlm.password | - | string | - |
| data.list.request.auth.ntlm.domain | - | string | - |
| data.list.request.auth.ntlm.workstation | - | string | - |
| data.list.request.auth.ntlm.disableRetryRequest | 0 | integer | - |
| data.list.request.auth.edgegrid | - | object | - |
| data.list.request.auth.edgegrid.accessToken | - | string | - |
| data.list.request.auth.edgegrid.clientToken | - | string | - |
| data.list.request.auth.edgegrid.clientSecret | - | string | - |
| data.list.request.auth.edgegrid.nonce | - | string | - |
| data.list.request.auth.edgegrid.timestamp | - | string | - |
| data.list.request.auth.edgegrid.baseURi | - | string | - |
| data.list.request.auth.edgegrid.headersToSign | - | string | - |
| data.list.request.auth.oauth1 | - | object | - |
| data.list.request.auth.oauth1.consumerKey | - | string | - |
| data.list.request.auth.oauth1.consumerSecret | - | string | - |
| data.list.request.auth.oauth1.signatureMethod | - | string | - |
| data.list.request.auth.oauth1.addEmptyParamsToSign | 0 | integer | - |
| data.list.request.auth.oauth1.includeBodyHash | 0 | integer | - |
| data.list.request.auth.oauth1.addParamsToHeader | 0 | integer | - |
| data.list.request.auth.oauth1.realm | - | string | - |
| data.list.request.auth.oauth1.version | - | string | - |
| data.list.request.auth.oauth1.nonce | - | string | - |
| data.list.request.auth.oauth1.timestamp | - | string | - |
| data.list.request.auth.oauth1.verifier | - | string | - |
| data.list.request.auth.oauth1.callback | - | string | - |
| data.list.request.auth.oauth1.tokenSecret | - | string | - |
| data.list.request.auth.oauth1.token | - | string | - |
| data.list.request.script | - | object | - |
| data.list.request.script.pre_script | - | string | - |
| data.list.request.script.pre_script_switch | 0 | integer | - |
| data.list.request.script.test | - | string | - |
| data.list.request.script.test_switch | 1 | integer | - |
| data.list.request.body | - | array | - |
| data.list.request.body.param_id | 0001f9cc91078010 | string | - |
| data.list.request.body.description | 急啊急啊姐姐 | string | - |
| data.list.request.body.field_type | String | string | - |
| data.list.request.body.is_checked | 1 | integer | - |
| data.list.request.body.key | name | string | 类型: name,intro,logo,default_mark |
| data.list.request.body.not_null | 1 | integer | - |
| data.list.request.body.value | 1 | string | 如果是is_describe_library 值是int 1开启 -1关闭 |
| data.list.request.header | - | array | - |
| data.list.request.header.param_id | 001f9cc910780101 | string | - |
| data.list.request.header.description | 急啊急啊姐姐 | string | - |
| data.list.request.header.field_type | String | string | - |
| data.list.request.header.is_checked | 1 | integer | - |
| data.list.request.header.key | name | string | 类型: name,intro,logo,default_mark |
| data.list.request.header.not_null | 1 | integer | - |
| data.list.request.header.value | 1 | string | 如果是is_describe_library 值是int 1开启 -1关闭 |
| data.list.request.query | - | array | - |
| data.list.request.query.param_id | 001f9cc910780102 | string | - |
| data.list.request.query.description | 急啊急啊姐姐 | string | - |
| data.list.request.query.field_type | String | string | - |
| data.list.request.query.is_checked | 1 | integer | - |
| data.list.request.query.key | name | string | 类型: name,intro,logo,default_mark |
| data.list.request.query.not_null | 1 | integer | - |
| data.list.request.query.value | 1 | string | 如果是is_describe_library 值是int 1开启 -1关闭 |
| data.list.request.cookie | - | array | - |
| data.list.created_at | 2024-01-24T19:31:44+08:00 | string | - |
| data.list.created_user | - | object | - |
| data.list.created_user.uid | 01f9cc90dac01000 | string | - |
| data.list.created_user.nick_name | 周凯3 | string | - |
| data.list.updated_at | 2024-01-29T14:21:18+08:00 | string | - |
| data.list.updated_user | - | object | - |
| data.list.updated_user.uid | 01f9cc90dac01000 | string | - |
| data.list.updated_user.nick_name | 周凯3 | string | - |
| time | 1706602849 | integer | - |

* 失败(200)

```javascript
暂无数据
```

**Query**

### 修改接口

> 创建人: 周义凯

> 更新人: 周义凯

> 创建时间: 2025-12-29 16:57:53

> 更新时间: 2026-04-14 19:10:36

**入参内容与创建接口一致，target_id字段必填,**** 在调用修改接口时，非必填字段不传会按照更改为默认值处理。所以调用修改接口前，请调用详情接口，在详情基础上修改。**

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/apis/update

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
  "project_id": "{{project_id}}",
  "project_code":"{{project_code}}",  //项目Code，project_id和project_code二选一即可. 优先project_id
  "target_id": "26d3cab4f83002",
  "is_force":1,
  "target_type": "api",
  "parent_id": "0",
  "name": "新建接口",
  "mark_id": "1",
  "method": "GET", //请求方式
  "url": "", //请求地址
  "protocol": "http/1.1",
  "description": "",
  "request": {
    "auth": {
      "type": "noauth",
      "kv": {
        "key": "",
        "value": ""
      },
      "bearer": {
        "key": ""
      },
      "basic": {
        "username": "",
        "password": ""
      },
      "digest": {
        "username": "",
        "password": "",
        "realm": "",
        "nonce": "",
        "algorithm": "",
        "qop": "",
        "nc": "",
        "cnonce": "",
        "opaque": ""
      },
      "hawk": {
        "authId": "",
        "authKey": "",
        "algorithm": "",
        "user": "",
        "nonce": "",
        "extraData": "",
        "app": "",
        "delegation": "",
        "timestamp": "",
        "includePayloadHash": 0
      },
      "awsv4": {
        "accessKey": "",
        "secretKey": "",
        "region": "",
        "service": "",
        "sessionToken": "",
        "addAuthDataToQuery": 0
      },
      "ntlm": {
        "username": "",
        "password": "",
        "domain": "",
        "workstation": "",
        "disableRetryRequest": 0
      },
      "edgegrid": {
        "accessToken": "",
        "clientToken": "",
        "clientSecret": "",
        "nonce": "",
        "timestamp": "",
        "baseURi": "",
        "headersToSign": ""
      },
      "oauth1": {
        "consumerKey": "",
        "consumerSecret": "",
        "signatureMethod": "",
        "addEmptyParamsToSign": 0,
        "includeBodyHash": 0,
        "addParamsToHeader": 0,
        "realm": "",
        "version": "",
        "nonce": "",
        "timestamp": "",
        "verifier": "",
        "callback": "",
        "tokenSecret": "",
        "token": ""
      }
    },
    "body": {
      "mode": "none",
      "parameter": [],
      "raw": "",
      "raw_parameter": [],
      "raw_schema": {
        "type": "object"
      },
      "binary": null
    },
    "pre_tasks": [],
    "post_tasks": [],
    "header": {
      "parameter": [
        {
          "param_id": "26d3caf4f83001",
          "description": "",
          "field_type": "string",
          "is_checked": 1,
          "key": "",
          "not_null": 1,
          "value": ""
        }
      ]
    },
    "query": {
      "parameter": []
    },
    "cookie": {
      "parameter": []
    },
    "restful": {
      "parameter": []
    }
  },
  "response": {
    "example": [
      {
        "example_id": "1",
        "raw": "",
        "raw_parameter": [],
        "expect": {
          "name": "成功",
          "is_default": 1,
          "code": "200",
          "content_type": "json",
          "verify_type": "schema",
          "mock": "",
          "schema": {}
        }
      },
      {
        "example_id": "2",
        "raw": "",
        "raw_parameter": [],
        "expect": {
          "name": "失败",
          "is_default": -1,
          "code": "404",
          "content_type": "json",
          "verify_type": "schema",
          "mock": "",
          "schema": {}
        }
      }
    ],
    "is_check_result": 1
  },
  "attribute_info": {},
  "tags": [
    "pipi",
    "pizi1",
    "pizi2",
    "pizi3"
  ]
}
```

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {
		"target_id": "26d3cab4f8300",
		"project_id": "23a7b4f26c01000",
		"parent_id": "0",
		"target_type": "api",
		"name": "新建接口2",
		"version": 10,
		"sort": 3000,
		"method": "GET",
		"url": "",
		"protocol": "http/1.1",
		"mark_id": "1",
		"description": "",
		"request": {
			"auth": {
				"type": "noauth",
				"kv": {
					"key": "",
					"value": ""
				},
				"bearer": {
					"key": ""
				},
				"basic": {
					"username": "",
					"password": ""
				},
				"digest": {
					"username": "",
					"password": "",
					"realm": "",
					"nonce": "",
					"algorithm": "",
					"qop": "",
					"nc": "",
					"cnonce": "",
					"opaque": ""
				},
				"hawk": {
					"authId": "",
					"authKey": "",
					"algorithm": "",
					"user": "",
					"nonce": "",
					"extraData": "",
					"app": "",
					"delegation": "",
					"timestamp": "",
					"includePayloadHash": 0
				},
				"awsv4": {
					"accessKey": "",
					"secretKey": "",
					"region": "",
					"service": "",
					"sessionToken": "",
					"addAuthDataToQuery": 0
				},
				"ntlm": {
					"username": "",
					"password": "",
					"domain": "",
					"workstation": "",
					"disableRetryRequest": 0
				},
				"edgegrid": {
					"accessToken": "",
					"clientToken": "",
					"clientSecret": "",
					"nonce": "",
					"timestamp": "",
					"baseURi": "",
					"headersToSign": ""
				},
				"oauth1": {
					"consumerKey": "",
					"consumerSecret": "",
					"signatureMethod": "",
					"addEmptyParamsToSign": 0,
					"includeBodyHash": 0,
					"addParamsToHeader": 0,
					"realm": "",
					"version": "",
					"nonce": "",
					"timestamp": "",
					"verifier": "",
					"callback": "",
					"tokenSecret": "",
					"token": ""
				}
			},
			"body": {
				"mode": "none",
				"parameter": [],
				"raw": "",
				"raw_parameter": [],
				"raw_schema": {
					"type": "object"
				}
			},
			"pre_tasks": [],
			"post_tasks": [],
			"header": {
				"parameter": [
					{
						"param_id": "26d3caf4f83001",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					},
					{
						"param_id": "26da7c2e383002",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					},
					{
						"param_id": "2706f725f8302b",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					},
					{
						"param_id": "2713d2d6383005",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					},
					{
						"param_id": "27168867f8300e",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					},
					{
						"param_id": "2716a0f0783009",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					},
					{
						"param_id": "2717b0b9783004",
						"description": "",
						"field_type": "String",
						"is_checked": 1,
						"key": "",
						"not_null": 1,
						"value": ""
					}
				]
			},
			"query": {
				"parameter": []
			},
			"cookie": {
				"parameter": []
			},
			"resful": {
				"parameter": []
			}
		},
		"response": {
			"example": [
				{
					"example_id": "1",
					"raw": "",
					"raw_parameter": [],
					"expect": {
						"name": "成功",
						"isDefault": 1,
						"code": "200",
						"contentType": "json",
						"verifyType": "schema",
						"mock": "",
						"schema": {
							"type": "object"
						}
					}
				},
				{
					"example_id": "2",
					"raw": "",
					"raw_parameter": [],
					"expect": {
						"name": "失败",
						"isDefault": -1,
						"code": "404",
						"contentType": "json",
						"verifyType": "schema",
						"mock": "",
						"schema": {
							"type": "object"
						}
					}
				}
			],
			"is_check_result": 1
		},
		"attribute_info": {},
		"tags": [
			"pipi",
			"pizi1",
			"pizi2",
			"pizi3"
		],
		"created_at": "2024-03-09T01:18:07+08:00",
		"created_user": {
			"uid": "22acd167bc01000",
			"nick_name": "周义凯",
			"portrait": "https://img.cdn.apipost.cn/user/default_profile_photo/Vector-5.png"
		},
		"updated_at": "2024-03-09T01:18:07+08:00",
		"updated_user": {
			"uid": "22acd167bc01000",
			"nick_name": "周义凯",
			"portrait": "https://img.cdn.apipost.cn/user/default_profile_photo/Vector-5.png"
		},
		"status": 1,
		"is_locked": -1
	},
	"time": "2024-03-09T01:18:08.3417933+08:00"
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| data | - | object | - |
| data.version | 5 | integer | - |
| data.sort | 5 | integer | - |
| data.created_at | 2024-01-22T22:05:38+08:00 | string | - |
| data.created_user | - | object | - |
| data.created_user.uid | 01f9cc90dac01000 | string | - |
| data.created_user.nick_name | 周凯3 | string | - |
| data.updated_at | 2024-01-24T14:41:11+08:00 | string | - |
| data.updated_user | - | object | - |
| data.updated_user.uid | 01f9cc90dac01000 | string | - |
| data.updated_user.nick_name | 周凯3 | string | - |
| time | 1706078471 | integer | - |

* 失败(200)

```javascript
暂无数据
```

* 版本冲突(200)

```javascript
{
	"code": 14005,
	"msg": "内容冲突",
	"msg_en": "Content Conflicts",
	"data": {},
	"time": 1706080930
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 10100 | integer | 内容冲突固定号 |
| msg | 内容冲突 | string | - |
| msg_en | Content Conflicts | string | - |
| data | - | object | - |
| time | 1706080930 | integer | - |

* id冲突(200)

```javascript
{
	"code": 14004,
	"msg": "target_id冲突",
	"msg_en": "Target ID conflict",
	"data": {},
	"time": 1706079638
}
```

* 接口已锁定(200)

```javascript
{
	"code": 14003,
	"msg": "接口已被周凯3锁定",
	"data": {},
	"time": 1706673551
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 14003 | integer | - |
| msg | 接口已被周凯3锁定 | string | - |
| data | - | object | - |
| time | 1706673551 | integer | - |

* 项目已锁定(200)

```javascript
{
	"code": 13002,
	"msg": "该项目已被项目管理员或团队超管锁定，无法进行此操作",
	"data": {},
	"time": 1706673551
}
```

**Query**

### 批量删除接口

> 创建人: 周义凯

> 更新人: 周义凯

> 创建时间: 2025-12-29 16:58:02

> 更新时间: 2026-04-14 19:10:46

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/apis/delete

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
    "project_id": "{{project_id}}",
    "project_code":"{{project_code}}",  //项目Code，project_id和project_code二选一即可. 优先project_id
    "target_ids": [
        "26d3cab4f83002"
    ]
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | 142369786507038720 | string | 是 | 项目id |
| target_ids | 0001423696538711 | array | 是 | 选中的节点 |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"msg_en": "success",
	"data": {
		"list": [
			{
				"target_id": "0000142369653871",
				"version": 31
			}
		]
	},
	"time": 1706260271
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| msg_en | success | string | - |
| data | - | object | - |
| data.list | - | array | 删除的元素列表 |
| data.list.target_id | 0000142369653871 | string | 删除的元素id |
| data.list.version | 31 | integer | 版本 |
| time | 1706260271 | integer | - |

* 失败(200)

```javascript
暂无数据
```

**Query**

### 更新多个接口状态

> 创建人: Stilwell

> 更新人: 周义凯

> 创建时间: 2026-03-23 13:57:58

> 更新时间: 2026-04-14 19:11:15

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/apis/multi_up_mark

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
    "project_id": "{{project_id}}",
    // "project_code": "{{project_code}}",
    "mark_id": "2", //1开发中  2已完成 3需修改 ....
    "target_ids": [
        "23376cc0b4b011",
        "122419abb4b003"
    ] //选中的节点
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | - |
| project_code | {{project_code}} | string | 否 | - |
| mark_id | 2 | string | 是 | 1开发中  2已完成 3需修改 .... |
| target_ids | - | array | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
暂无数据
```

* 失败(200)

```javascript
暂无数据
```

**Query**

### 接口用例

> 创建人: 周义凯

> 更新人: 周义凯

> 创建时间: 2026-01-06 10:48:31

> 更新时间: 2026-01-06 10:48:31

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

#### 列出接口用例清单（批量详情）

> 创建人: 周义凯

> 更新人: 周义凯

> 创建时间: 2026-01-06 10:48:31

> 更新时间: 2026-06-08 11:24:32

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/apis/sample?project_id={{project_id}}&project_code={{project_code}}

**请求方式**

> GET

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | - |
| project_code | {{project_code}} | string | 是 | 项目Code，project_id和project_code二选一即可. 优先project_id |
| sample_ids | d9bc1a67f206c | array | 否 | 接口用例sample_id |
| target_ids | - | array | 否 | 接口target_id |
| sample_ids | 13271af5f90033 | array | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
    "code": 0,
    "msg": "成功",
    "data": {
        "list": [
            {
                "sample_id": "56f80a34ec01000",
                "type": "sample",
                "parent_id": "0",
                "target_id": "db7ccb82c8887b",
                "project_id": "19b24a4932c61d",
                "name": "测试用例",
                "description": "",
                "method": "GET",
                "url": "/anything/{name}/{age}/{nice}",
                "protocol": "http/1.1",
                "request": {
                    "auth": {
                        "type": "oauth2",
                        "kv": {
                            "key": "",
                            "value": "",
                            "in": "header"
                        },
                        "bearer": {
                            "key": ""
                        },
                        "basic": {
                            "username": "",
                            "password": ""
                        },
                        "digest": {
                            "username": "",
                            "password": "",
                            "realm": "",
                            "nonce": "",
                            "algorithm": "MD5",
                            "qop": "",
                            "nc": "",
                            "cnonce": "",
                            "opaque": ""
                        },
                        "hawk": {
                            "authId": "",
                            "authKey": "",
                            "algorithm": "",
                            "user": "",
                            "nonce": "",
                            "extraData": "",
                            "default": "",
                            "delegation": "",
                            "timestamp": "",
                            "includePayloadHash": false
                        },
                        "awsv4": {
                            "accessKey": "",
                            "secretKey": "",
                            "region": "",
                            "service": "",
                            "sessionToken": "",
                            "addAuthDataToQuery": false
                        },
                        "ntlm": {
                            "username": "",
                            "password": "",
                            "entity": "",
                            "workstation": "",
                            "disableRetryRequest": false
                        },
                        "edgegrid": {
                            "accessToken": "",
                            "clientToken": "",
                            "clientSecret": "",
                            "nonce": "",
                            "timestamp": "",
                            "baseURi": "",
                            "headersToSign": ""
                        },
                        "oauth1": {
                            "consumerKey": "",
                            "consumerSecret": "",
                            "signatureMethod": "HMAC-SHA1",
                            "addEmptyParamsToSign": true,
                            "includeBodyHash": true,
                            "addParamsToHeader": false,
                            "disableHeaderEncoding": false,
                            "realm": "",
                            "version": "1.0",
                            "nonce": "",
                            "timestamp": "",
                            "verifier": "",
                            "callback": "",
                            "tokenSecret": "",
                            "token": ""
                        },
                        "oauth2": {
                            "addTokenTo": "queryParams",
                            "access_token": "11112222",
                            "headerPrefix": "Bearer",
                            "grant_type": "authorization_code",
                            "redirect_uri": "4444",
                            "authUrl": "2222",
                            "accessTokenUrl": "333",
                            "clientId": "555",
                            "clientSecret": "6666",
                            "username": "",
                            "password": "",
                            "challengeAlgorithm": "S256",
                            "code_verifier": "Bearer",
                            "scope": "8888",
                            "state": "999",
                            "client_authentication": "header",
                            "refreshTokenUrl": "",
                            "authRequestParams": [],
                            "tokenRequestParams": [],
                            "refreshRequestParams": []
                        },
                        "jwt": {
                            "addTokenTo": "header",
                            "algorithm": "HS256",
                            "secret": "",
                            "isSecretBase64Encoded": false,
                            "payload": "",
                            "headerPrefix": "Bearer",
                            "queryParamKey": "token",
                            "header": ""
                        },
                        "asap": {
                            "alg": "HS256",
                            "iss": "",
                            "aud": "",
                            "kid": "",
                            "privateKey": "",
                            "sub": "",
                            "claims": "",
                            "exp": ""
                        }
                    },
                    "body": {
                        "mode": "form-data",
                        "parameter": [
                            {
                                "param_id": "19b191d53e2239",
                                "description": "用于标识用户身份的名称，在系统中具有唯一性。\n",
                                "field_type": "string",
                                "is_checked": 1,
                                "key": "username",
                                "not_null": -1,
                                "value": "test_user_2025",
                                "content_type": "",
                                "file_name": "",
                                "file_base64": "",
                                "schema": {
                                    "type": "string"
                                }
                            }
                        ],
                        "raw": "",
                        "raw_parameter": [],
                        "raw_schema": {
                            "type": "object",
                            "properties": {}
                        },
                        "binary": null
                    },
                    "pre_tasks": [],
                    "post_tasks": [],
                    "header": {
                        "parameter": [
                            {
                                "param_id": "19b191d53e2243",
                                "description": "用于指定客户端希望接收的响应内容类型。\n",
                                "field_type": "string",
                                "is_checked": 1,
                                "key": "Accept",
                                "not_null": -1,
                                "value": "application/json",
                                "schema": {
                                    "type": "string"
                                }
                            }
                        ]
                    },
                    "query": {
                        "query_add_equal": 1,
                        "parameter": [
                            {
                                "param_id": "19b191d53e2249",
                                "description": "用于标识用户身份的名称，在系统中具有唯一性。\n",
                                "field_type": "string",
                                "is_checked": 1,
                                "key": "username",
                                "not_null": -1,
                                "value": "test_user_2025",
                                "schema": {
                                    "type": "string"
                                }
                            }
                        ]
                    },
                    "cookie": {
                        "cookie_encode": 1,
                        "parameter": [
                            {
                                "param_id": "19b191d53e2251",
                                "description": "用于标识用户会话的唯一ID，在用户登录或访问特定功能时使用，确保会话的连续性和安全性。\n",
                                "field_type": "string",
                                "is_checked": 1,
                                "key": "session_id",
                                "not_null": -1,
                                "value": "8a9b0c1d2e3f4g5h6i7j8k9l0m1n2o3p",
                                "schema": {
                                    "type": "string"
                                }
                            }
                        ]
                    },
                    "restful": {
                        "parameter": [
                            {
                                "param_id": "19b191d53e225d",
                                "description": "",
                                "field_type": "string",
                                "is_checked": 1,
                                "key": "name",
                                "not_null": -1,
                                "value": "",
                                "schema": {
                                    "type": "string"
                                }
                            }
                        ]
                    }
                },
                "objective": "",
                "expected_outcome": ""
            }
        ]
    },
    "time": "2025-12-05T15:22:32.3781192+08:00",
    "extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | number | - |
| msg | 成功 | string | - |
| data | - | object | - |
| data.list | - | array | - |
| data.list.sample_id | 56f80a34ec01000 | string | - |
| data.list.type | sample | string | - |
| data.list.parent_id | 0 | string | - |
| data.list.target_id | db7ccb82c8887b | string | - |
| data.list.project_id | 19b24a4932c61d | string | - |
| data.list.name | 测试用例 | string | - |
| data.list.description | - | string | - |
| data.list.method | GET | string | - |
| data.list.url | /anything/{name}/{age}/{nice} | string | - |
| data.list.protocol | http/1.1 | string | - |
| data.list.request | - | object | - |
| data.list.request.auth | - | object | - |
| data.list.request.auth.type | oauth2 | string | - |
| data.list.request.auth.kv | - | object | - |
| data.list.request.auth.kv.key | - | string | - |
| data.list.request.auth.kv.value | - | string | - |
| data.list.request.auth.kv.in | header | string | - |
| data.list.request.auth.bearer | - | object | - |
| data.list.request.auth.bearer.key | - | string | - |
| data.list.request.auth.basic | - | object | - |
| data.list.request.auth.basic.username | - | string | - |
| data.list.request.auth.basic.password | - | string | - |
| data.list.request.auth.digest | - | object | - |
| data.list.request.auth.digest.username | - | string | - |
| data.list.request.auth.digest.password | - | string | - |
| data.list.request.auth.digest.realm | - | string | - |
| data.list.request.auth.digest.nonce | - | string | - |
| data.list.request.auth.digest.algorithm | MD5 | string | - |
| data.list.request.auth.digest.qop | - | string | - |
| data.list.request.auth.digest.nc | - | string | - |
| data.list.request.auth.digest.cnonce | - | string | - |
| data.list.request.auth.digest.opaque | - | string | - |
| data.list.request.auth.hawk | - | object | - |
| data.list.request.auth.hawk.authId | - | string | - |
| data.list.request.auth.hawk.authKey | - | string | - |
| data.list.request.auth.hawk.algorithm | - | string | - |
| data.list.request.auth.hawk.user | - | string | - |
| data.list.request.auth.hawk.nonce | - | string | - |
| data.list.request.auth.hawk.extraData | - | string | - |
| data.list.request.auth.hawk.default | - | string | - |
| data.list.request.auth.hawk.delegation | - | string | - |
| data.list.request.auth.hawk.timestamp | - | string | - |
| data.list.request.auth.hawk.includePayloadHash | false | boolean | - |
| data.list.request.auth.awsv4 | - | object | - |
| data.list.request.auth.awsv4.accessKey | - | string | - |
| data.list.request.auth.awsv4.secretKey | - | string | - |
| data.list.request.auth.awsv4.region | - | string | - |
| data.list.request.auth.awsv4.service | - | string | - |
| data.list.request.auth.awsv4.sessionToken | - | string | - |
| data.list.request.auth.awsv4.addAuthDataToQuery | false | boolean | - |
| data.list.request.auth.ntlm | - | object | - |
| data.list.request.auth.ntlm.username | - | string | - |
| data.list.request.auth.ntlm.password | - | string | - |
| data.list.request.auth.ntlm.entity | - | string | - |
| data.list.request.auth.ntlm.workstation | - | string | - |
| data.list.request.auth.ntlm.disableRetryRequest | false | boolean | - |
| data.list.request.auth.edgegrid | - | object | - |
| data.list.request.auth.edgegrid.accessToken | - | string | - |
| data.list.request.auth.edgegrid.clientToken | - | string | - |
| data.list.request.auth.edgegrid.clientSecret | - | string | - |
| data.list.request.auth.edgegrid.nonce | - | string | - |
| data.list.request.auth.edgegrid.timestamp | - | string | - |
| data.list.request.auth.edgegrid.baseURi | - | string | - |
| data.list.request.auth.edgegrid.headersToSign | - | string | - |
| data.list.request.auth.oauth1 | - | object | - |
| data.list.request.auth.oauth1.consumerKey | - | string | - |
| data.list.request.auth.oauth1.consumerSecret | - | string | - |
| data.list.request.auth.oauth1.signatureMethod | HMAC-SHA1 | string | - |
| data.list.request.auth.oauth1.addEmptyParamsToSign | true | boolean | - |
| data.list.request.auth.oauth1.includeBodyHash | true | boolean | - |
| data.list.request.auth.oauth1.addParamsToHeader | false | boolean | - |
| data.list.request.auth.oauth1.disableHeaderEncoding | false | boolean | - |
| data.list.request.auth.oauth1.realm | - | string | - |
| data.list.request.auth.oauth1.version | 1.0 | string | - |
| data.list.request.auth.oauth1.nonce | - | string | - |
| data.list.request.auth.oauth1.timestamp | - | string | - |
| data.list.request.auth.oauth1.verifier | - | string | - |
| data.list.request.auth.oauth1.callback | - | string | - |
| data.list.request.auth.oauth1.tokenSecret | - | string | - |
| data.list.request.auth.oauth1.token | - | string | - |
| data.list.request.auth.oauth2 | - | object | - |
| data.list.request.auth.oauth2.addTokenTo | queryParams | string | - |
| data.list.request.auth.oauth2.access_token | 11112222 | string | - |
| data.list.request.auth.oauth2.headerPrefix | Bearer | string | - |
| data.list.request.auth.oauth2.grant_type | authorization_code | string | - |
| data.list.request.auth.oauth2.redirect_uri | 4444 | string | - |
| data.list.request.auth.oauth2.authUrl | 2222 | string | - |
| data.list.request.auth.oauth2.accessTokenUrl | 333 | string | - |
| data.list.request.auth.oauth2.clientId | 555 | string | - |
| data.list.request.auth.oauth2.clientSecret | 6666 | string | - |
| data.list.request.auth.oauth2.username | - | string | - |
| data.list.request.auth.oauth2.password | - | string | - |
| data.list.request.auth.oauth2.challengeAlgorithm | S256 | string | - |
| data.list.request.auth.oauth2.code_verifier | Bearer | string | - |
| data.list.request.auth.oauth2.scope | 8888 | string | - |
| data.list.request.auth.oauth2.state | 999 | string | - |
| data.list.request.auth.oauth2.client_authentication | header | string | - |
| data.list.request.auth.oauth2.refreshTokenUrl | - | string | - |
| data.list.request.auth.oauth2.authRequestParams | - | array | - |
| data.list.request.auth.oauth2.tokenRequestParams | - | array | - |
| data.list.request.auth.oauth2.refreshRequestParams | - | array | - |
| data.list.request.auth.jwt | - | object | - |
| data.list.request.auth.jwt.addTokenTo | header | string | - |
| data.list.request.auth.jwt.algorithm | HS256 | string | - |
| data.list.request.auth.jwt.secret | - | string | - |
| data.list.request.auth.jwt.isSecretBase64Encoded | false | boolean | - |
| data.list.request.auth.jwt.payload | - | string | - |
| data.list.request.auth.jwt.headerPrefix | Bearer | string | - |
| data.list.request.auth.jwt.queryParamKey | token | string | - |
| data.list.request.auth.jwt.header | - | string | - |
| data.list.request.auth.asap | - | object | - |
| data.list.request.auth.asap.alg | HS256 | string | - |
| data.list.request.auth.asap.iss | - | string | - |
| data.list.request.auth.asap.aud | - | string | - |
| data.list.request.auth.asap.kid | - | string | - |
| data.list.request.auth.asap.privateKey | - | string | - |
| data.list.request.auth.asap.sub | - | string | - |
| data.list.request.auth.asap.claims | - | string | - |
| data.list.request.auth.asap.exp | - | string | - |
| data.list.request.body | - | object | - |
| data.list.request.body.mode | form-data | string | - |
| data.list.request.body.parameter | - | array | - |
| data.list.request.body.parameter.param_id | 19b191d53e2239 | string | - |
| data.list.request.body.parameter.description | 用于标识用户身份的名称，在系统中具有唯一性。 | string | - |
| data.list.request.body.parameter.field_type | string | string | - |
| data.list.request.body.parameter.is_checked | 1 | number | - |
| data.list.request.body.parameter.key | username | string | - |
| data.list.request.body.parameter.not_null | -1 | number | - |
| data.list.request.body.parameter.value | test_user_2025 | string | - |
| data.list.request.body.parameter.content_type | - | string | - |
| data.list.request.body.parameter.file_name | - | string | - |
| data.list.request.body.parameter.file_base64 | - | string | - |
| data.list.request.body.parameter.schema | - | object | - |
| data.list.request.body.parameter.schema.type | string | string | - |
| data.list.request.body.raw | - | string | - |
| data.list.request.body.raw_parameter | - | array | - |
| data.list.request.body.raw_schema | - | object | - |
| data.list.request.body.raw_schema.type | object | string | - |
| data.list.request.body.raw_schema.properties | - | object | - |
| data.list.request.body.binary | - | null | - |
| data.list.request.pre_tasks | - | array | - |
| data.list.request.post_tasks | - | array | - |
| data.list.request.header | - | object | - |
| data.list.request.header.parameter | - | array | - |
| data.list.request.header.parameter.param_id | 19b191d53e2243 | string | - |
| data.list.request.header.parameter.description | 用于指定客户端希望接收的响应内容类型。 | string | - |
| data.list.request.header.parameter.field_type | string | string | - |
| data.list.request.header.parameter.is_checked | 1 | number | - |
| data.list.request.header.parameter.key | Accept | string | - |
| data.list.request.header.parameter.not_null | -1 | number | - |
| data.list.request.header.parameter.value | application/json | string | - |
| data.list.request.header.parameter.schema | - | object | - |
| data.list.request.header.parameter.schema.type | string | string | - |
| data.list.request.query | - | object | - |
| data.list.request.query.query_add_equal | 1 | number | - |
| data.list.request.query.parameter | - | array | - |
| data.list.request.query.parameter.param_id | 19b191d53e2249 | string | - |
| data.list.request.query.parameter.description | 用于标识用户身份的名称，在系统中具有唯一性。 | string | - |
| data.list.request.query.parameter.field_type | string | string | - |
| data.list.request.query.parameter.is_checked | 1 | number | - |
| data.list.request.query.parameter.key | username | string | - |
| data.list.request.query.parameter.not_null | -1 | number | - |
| data.list.request.query.parameter.value | test_user_2025 | string | - |
| data.list.request.query.parameter.schema | - | object | - |
| data.list.request.query.parameter.schema.type | string | string | - |
| data.list.request.cookie | - | object | - |
| data.list.request.cookie.cookie_encode | 1 | number | - |
| data.list.request.cookie.parameter | - | array | - |
| data.list.request.cookie.parameter.param_id | 19b191d53e2251 | string | - |
| data.list.request.cookie.parameter.description | 用于标识用户会话的唯一ID，在用户登录或访问特定功能时使用，确保会话的连续性和安全性。 | string | - |
| data.list.request.cookie.parameter.field_type | string | string | - |
| data.list.request.cookie.parameter.is_checked | 1 | number | - |
| data.list.request.cookie.parameter.key | session_id | string | - |
| data.list.request.cookie.parameter.not_null | -1 | number | - |
| data.list.request.cookie.parameter.value | 8a9b0c1d2e3f4g5h6i7j8k9l0m1n2o3p | string | - |
| data.list.request.cookie.parameter.schema | - | object | - |
| data.list.request.cookie.parameter.schema.type | string | string | - |
| data.list.request.restful | - | object | - |
| data.list.request.restful.parameter | - | array | - |
| data.list.request.restful.parameter.param_id | 19b191d53e225d | string | - |
| data.list.request.restful.parameter.description | - | string | - |
| data.list.request.restful.parameter.field_type | string | string | - |
| data.list.request.restful.parameter.is_checked | 1 | number | - |
| data.list.request.restful.parameter.key | name | string | - |
| data.list.request.restful.parameter.not_null | -1 | number | - |
| data.list.request.restful.parameter.value | - | string | - |
| data.list.request.restful.parameter.schema | - | object | - |
| data.list.request.restful.parameter.schema.type | string | string | - |
| data.list.objective | - | string | - |
| data.list.expected_outcome | - | string | - |
| time | 2025-12-05T15:22:32.3781192+08:00 | string | - |
| extra_err | - | object | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

#### 创建接口用例

> 创建人: 周义凯

> 更新人: 周义凯

> 创建时间: 2026-01-09 15:19:01

> 更新时间: 2026-05-25 10:14:32

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/apis/sample/create

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
    "project_id": "{{project_id}}",
    "project_code":"{{project_code}}",  //项目Code，project_id和project_code二选一即可. 优先project_id
    "target_id": "98f249bbf2002",
    "type": "sample",
    "name": "测试用例",
    "description": "",
    "method": "GET",
    "url": "/anything/{name}/{age}/{nice}",
    "parent_id": "0",
    "protocol": "http/1.1",
    "request": {
        "auth": {
            "type": "oauth2",
            "kv": {
                "key": "",
                "value": "",
                "in": "header"
            },
            "bearer": {
                "key": ""
            },
            "basic": {
                "username": "",
                "password": ""
            },
            "digest": {
                "username": "",
                "password": "",
                "realm": "",
                "nonce": "",
                "algorithm": "MD5",
                "qop": "",
                "nc": "",
                "cnonce": "",
                "opaque": ""
            },
            "hawk": {
                "authId": "",
                "authKey": "",
                "algorithm": "",
                "user": "",
                "nonce": "",
                "extraData": "",
                "default": "",
                "delegation": "",
                "timestamp": "",
                "includePayloadHash": false
            },
            "awsv4": {
                "accessKey": "",
                "secretKey": "",
                "region": "",
                "service": "",
                "sessionToken": "",
                "addAuthDataToQuery": false
            },
            "ntlm": {
                "username": "",
                "password": "",
                "entity": "",
                "workstation": "",
                "disableRetryRequest": false
            },
            "edgegrid": {
                "accessToken": "",
                "clientToken": "",
                "clientSecret": "",
                "nonce": "",
                "timestamp": "",
                "baseURi": "",
                "headersToSign": ""
            },
            "oauth1": {
                "consumerKey": "",
                "consumerSecret": "",
                "signatureMethod": "HMAC-SHA1",
                "addEmptyParamsToSign": true,
                "includeBodyHash": true,
                "addParamsToHeader": false,
                "disableHeaderEncoding": false,
                "realm": "",
                "version": "1.0",
                "nonce": "",
                "timestamp": "",
                "verifier": "",
                "callback": "",
                "tokenSecret": "",
                "token": ""
            },
            "oauth2": {
                "addTokenTo": "queryParams",
                "access_token": "11112222",
                "headerPrefix": "Bearer",
                "grant_type": "authorization_code",
                "redirect_uri": "4444",
                "authUrl": "2222",
                "accessTokenUrl": "333",
                "clientId": "555",
                "clientSecret": "6666",
                "username": "",
                "password": "",
                "challengeAlgorithm": "S256",
                "code_verifier": "Bearer",
                "scope": "8888",
                "state": "999",
                "client_authentication": "header",
                "refreshTokenUrl": "",
                "authRequestParams": [],
                "tokenRequestParams": [],
                "refreshRequestParams": []
            },
            "jwt": {
                "addTokenTo": "header",
                "algorithm": "HS256",
                "secret": "",
                "isSecretBase64Encoded": false,
                "payload": "",
                "headerPrefix": "Bearer",
                "queryParamKey": "token",
                "header": ""
            },
            "asap": {
                "alg": "HS256",
                "iss": "",
                "aud": "",
                "kid": "",
                "privateKey": "",
                "sub": "",
                "claims": "",
                "exp": ""
            }
        },
        "body": {
            "mode": "form-data",
            "parameter": [
                {
                    "param_id": "19b191d53e2239",
                    "description": "用于标识用户身份的名称，在系统中具有唯一性。\n",
                    "field_type": "string",
                    "is_checked": 1,
                    "key": "username",
                    "not_null": -1,
                    "value": "test_user_2025",
                    "content_type": "",
                    "file_name": "",
                    "file_base64": "",
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "raw": "",
            "raw_parameter": [],
            "raw_schema": {
                "type": "object",
                "properties": {}
            },
            "binary": null
        },
        "pre_tasks": [],
        "post_tasks": [],
        "header": {
            "parameter": [
                {
                    "key": "Content-Type",
                    "value": "application/json"
                }
            ]
        },
        "query": {
            "query_add_equal": 1,
            "parameter": []
        },
        "cookie": {
            "cookie_encode": 1,
            "parameter": []
        },
        "restful": {
            "parameter": []
        }
    }
}
```

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {
		"project_id": "1bf24806716386",
		"target_id": "db7ccb82c8887b",
		"sample_id": "59cc57b7c020000"
	},
	"time": "2026-01-09T19:14:45.7698087+08:00",
	"extra_err": {}
}
```

* 失败(404)

```javascript
暂无数据
```

**Query**

## 数据模型

> 创建人: 周义凯

> 更新人: 周义凯

> 创建时间: 2026-02-04 16:13:53

> 更新时间: 2026-02-04 16:13:57

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

### 数据模型列表

> 创建人: 周义凯

> 更新人: 周义凯

> 创建时间: 2026-02-04 16:14:36

> 更新时间: 2026-02-10 15:48:16

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/models/list?project_id={{project_id}}&project_code=

**请求方式**

> GET

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | - |
| project_code | - | string | 是 | 项目Code，project_id和project_code二选一即可. 优先project_id |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {
		"list": [
			{
				"project_id": "1bfe573951425001",
				"model_id": "5c5b2c84e820000",
				"model_type": "folder",
				"name": "A",
				"display_name": "",
				"description": "",
				"parent_id": "0",
				"schema": null,
				"sort": 0,
				"version": 1,
				"created_at": "2026-02-10T14:10:47+08:00",
				"updated_at": "2026-02-10T14:10:47+08:00",
				"created_user_info": {
					"uid": "1bfe57394f425001",
					"nick_name": "zyk",
					"alias_name": null,
					"portrait": "https://img.cdn.apipost.cn/test/default/user/default_profile_photo/Vector-1.png"
				},
				"updated_user_info": {
					"uid": "1bfe57394f425001",
					"nick_name": "zyk",
					"alias_name": null,
					"portrait": "https://img.cdn.apipost.cn/test/default/user/default_profile_photo/Vector-1.png"
				}
			},
			{
				"project_id": "1bfe573951425001",
				"model_id": "5c5c69203020000",
				"model_type": "folder",
				"name": "B",
				"display_name": "",
				"description": "",
				"parent_id": "0",
				"schema": null,
				"sort": 1000,
				"version": 1,
				"created_at": "2026-02-10T15:37:14+08:00",
				"updated_at": "2026-02-10T15:37:14+08:00",
				"created_user_info": {
					"uid": "1bfe57394f425001",
					"nick_name": "zyk",
					"alias_name": null,
					"portrait": "https://img.cdn.apipost.cn/test/default/user/default_profile_photo/Vector-1.png"
				},
				"updated_user_info": {
					"uid": "1bfe57394f425001",
					"nick_name": "zyk",
					"alias_name": null,
					"portrait": "https://img.cdn.apipost.cn/test/default/user/default_profile_photo/Vector-1.png"
				}
			}
		]
	},
	"time": "2026-02-10T15:43:52.4096941+08:00",
	"extra_err": {}
}
```

* 失败(404)

```javascript
暂无数据
```

**Query**

### 获取多条数据模型详情

> 创建人: 周义凯

> 更新人: 周义凯

> 创建时间: 2026-02-04 16:15:10

> 更新时间: 2026-04-16 14:15:54

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/models/details

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
    "project_id": "{{project_id}}",
    "project_code":"{{project_code}}",  //项目Code，project_id和project_code二选一即可. 优先project_id
    "model_ids": [ //模型ID，与names二选一即可. 优先model_ids
    ],
    "names":[ //模型名称需完全匹配，与model_ids二选一即可. 优先model_ids
        "A",
        "A-1"
    ]
}
```

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {
		"list": [
			{
				"project_id": "1bfe573951425001",
				"model_id": "4ad4b563a3004",
				"model_type": "folder",
				"name": "A",
				"display_name": "",
				"description": "",
				"parent_id": "0",
				"schema": null,
				"sort": 200,
				"version": 1,
				"created_at": "2026-02-09T19:08:19+08:00",
				"updated_at": "2026-02-09T19:08:19+08:00",
				"created_user_info": {
					"uid": "1bfe57394f425001",
					"nick_name": "zyk",
					"alias_name": null,
					"portrait": "https://img.cdn.apipost.cn/test/default/user/default_profile_photo/Vector-1.png"
				},
				"updated_user_info": {
					"uid": "1bfe57394f425001",
					"nick_name": "zyk",
					"alias_name": null,
					"portrait": "https://img.cdn.apipost.cn/test/default/user/default_profile_photo/Vector-1.png"
				}
			},
			{
				"project_id": "1bfe573951425001",
				"model_id": "4ad3f2c3a3002",
				"model_type": "model",
				"name": "A-1",
				"display_name": "",
				"description": "",
				"parent_id": "4ad4b563a3004",
				"schema": {
					"type": "object",
					"properties": {
						"age": {
							"type": "number"
						},
						"name": {
							"type": "string"
						}
					},
					"x-schema-orders": [
						"name",
						"age"
					]
				},
				"sort": 1100,
				"version": 1,
				"created_at": "2026-02-09T19:08:13+08:00",
				"updated_at": "2026-02-09T19:09:01+08:00",
				"created_user_info": {
					"uid": "1bfe57394f425001",
					"nick_name": "zyk",
					"alias_name": null,
					"portrait": "https://img.cdn.apipost.cn/test/default/user/default_profile_photo/Vector-1.png"
				},
				"updated_user_info": {
					"uid": "1bfe57394f425001",
					"nick_name": "zyk",
					"alias_name": null,
					"portrait": "https://img.cdn.apipost.cn/test/default/user/default_profile_photo/Vector-1.png"
				}
			}
		]
	},
	"time": "2026-02-09T19:18:40.5369922+08:00",
	"extra_err": {}
}
```

* 失败(404)

```javascript
暂无数据
```

**Query**

### 创建模型或目录

> 创建人: 周义凯

> 更新人: 周义凯

> 创建时间: 2026-02-10 13:57:50

> 更新时间: 2026-04-15 16:53:01

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/models/create

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
    "project_id": "{{project_id}}",
    "project_code": "{{project_code}}",
    "model_type": "folder",
    "name": "B",
    "display_name": "",
    "description": "",
    "parent_id": "0",
    "parent_name": "A",
    "schema": {
        "type": "object",
        "properties": {}
    }
}
```

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {
		"project_id": "1bfe573951425001",
		"model_id": "5c5c69203020000",
		"model_type": "folder",
		"name": "B",
		"display_name": "",
		"description": "",
		"parent_id": "0",
		"schema": null,
		"sort": 1000,
		"version": 1,
		"created_at": "2026-02-10T15:37:14+08:00",
		"updated_at": "2026-02-10T15:37:14+08:00",
		"created_user_info": {
			"uid": "1bfe57394f425001",
			"nick_name": "zyk",
			"alias_name": null,
			"portrait": "https://img.cdn.apipost.cn/test/default/user/default_profile_photo/Vector-1.png"
		},
		"updated_user_info": {
			"uid": "1bfe57394f425001",
			"nick_name": "zyk",
			"alias_name": null,
			"portrait": "https://img.cdn.apipost.cn/test/default/user/default_profile_photo/Vector-1.png"
		}
	},
	"time": "2026-02-10T15:37:14.4416253+08:00",
	"extra_err": {}
}
```

* 模型名称已存在(200)

```javascript
{
	"code": 16002, //当name已经存在时
	"msg": "模型名称已存在",
	"data": {},
	"time": "2026-02-10T15:38:03.8737543+08:00",
	"extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 16002 | number | 错误码16002为模型名称已存在固定错误码 |
| msg | 模型名称已存在 | string | - |
| data | - | object | - |
| time | 2026-02-10T15:38:03.8737543+08:00 | string | - |
| extra_err | - | object | - |

* 父级模型目录不存在(200)

```javascript
{
	"code": 16005, //当指定parent_id或parent_name但未查询到时
	"msg": "父级模型目录不存在",
	"data": {},
	"time": "2026-02-10T15:38:03.8737543+08:00",
	"extra_err": {}
}
```

* 父级模型名称已重复(200)

```javascript
{
	"code": 16006, //当parent_name查询到多个时
	"msg": "父级模型名称已重复",
	"data": {},
	"time": "2026-02-10T15:38:03.8737543+08:00",
	"extra_err": {}
}
```

**Query**

### 修改模型或目录

> 创建人: 周义凯

> 更新人: 周义凯

> 创建时间: 2026-02-10 15:51:46

> 更新时间: 2026-04-15 16:52:56

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/models/update

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
    "model_id":"",
    "original_name":"A",
    "project_id": "{{project_id}}",
    "project_code": "{{project_code}}",
    "model_type": "folder",
    "name": "B",
    "display_name": "1",
    "description": "1",
    "parent_id": "2", 
    "parent_name":"A",
    "schema": {
        "type": "object",
        "properties": {}
    }
}
```

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {
		"project_id": "1bfe573951425001",
		"model_id": "5c5c69203020000",
		"model_type": "folder",
		"name": "B",
		"display_name": "",
		"description": "",
		"parent_id": "0",
		"schema": null,
		"sort": 1000,
		"version": 1,
		"created_at": "2026-02-10T15:37:14+08:00",
		"updated_at": "2026-02-10T15:37:14+08:00",
		"created_user_info": {
			"uid": "1bfe57394f425001",
			"nick_name": "zyk",
			"alias_name": null,
			"portrait": "https://img.cdn.apipost.cn/test/default/user/default_profile_photo/Vector-1.png"
		},
		"updated_user_info": {
			"uid": "1bfe57394f425001",
			"nick_name": "zyk",
			"alias_name": null,
			"portrait": "https://img.cdn.apipost.cn/test/default/user/default_profile_photo/Vector-1.png"
		}
	},
	"time": "2026-02-10T15:37:14.4416253+08:00",
	"extra_err": {}
}
```

* 模型名称已存在(200)

```javascript
{
	"code": 16002, //当name已经存在时
	"msg": "模型名称已存在",
	"data": {},
	"time": "2026-02-10T15:38:03.8737543+08:00",
	"extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 16002 | number | 错误码16002为模型名称已存在固定错误码 |
| msg | 模型名称已存在 | string | - |
| data | - | object | - |
| time | 2026-02-10T15:38:03.8737543+08:00 | string | - |
| extra_err | - | object | - |

* 模型名称已重复(200)

```javascript
{
	"code": 16004, //出现在original_name查询到多个时
	"msg": "同一项目下模型名称已重复",
	"data": {},
	"time": "2026-02-10T15:38:03.8737543+08:00",
	"extra_err": {}
}
```

* 父级模型目录不存在(200)

```javascript
{
	"code": 16005, //当指定parent_id或parent_name但未查询到时
	"msg": "父级模型目录不存在",
	"data": {},
	"time": "2026-02-10T15:38:03.8737543+08:00",
	"extra_err": {}
}
```

* 父级模型名称已重复(200)

```javascript
{
	"code": 16006, //当parent_name查询到多个时
	"msg": "父级模型名称已重复",
	"data": {},
	"time": "2026-02-10T15:38:03.8737543+08:00",
	"extra_err": {}
}
```

* 模型不存在或已被删除(200)

```javascript
{
	"code": 16003,  //model_id或original_name未查询到对应模型时
	"msg": "模型不存在或已被删除，请重新创建",
	"data": {},
	"time": "2026-02-10T18:12:35.0018716+08:00",
	"extra_err": {}
}
```

**Query**

### 删除数据模型（同时递归删除子级）

> 创建人: 周义凯

> 更新人: 周义凯

> 创建时间: 2026-02-04 16:24:55

> 更新时间: 2026-02-09 19:22:25

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/models/delete

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
    "project_id": "{{project_id}}",
    "project_code":"{{project_code}}",  //项目Code，project_id和project_code二选一即可. 优先project_id
    "model_ids": [ //模型ID，与names二选一即可. 优先model_ids
    ],
    "names":[ //模型名称需完全匹配，与model_ids二选一即可. 优先model_ids
        "A"
    ]
}
```

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {
		"deleted_ids": [
			"4ad4b563a3004",
			"4ad3f2c3a3002"
		]
	},
	"time": "2026-02-09T19:19:57.5721558+08:00",
	"extra_err": {}
}
```

* 失败(404)

```javascript
暂无数据
```

**Query**

## 自动化测试

> 创建人: Stilwell

> 更新人: 周义凯

> 创建时间: 2025-12-22 15:51:11

> 更新时间: 2026-04-14 10:53:03

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

### 列表

> 创建人: Stilwell

> 更新人: 周义凯

> 创建时间: 2026-01-30 17:58:05

> 更新时间: 2026-04-14 10:53:28

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/automated_testing/list?project_id={{project_id}}

**请求方式**

> GET

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_code | - | string | 否 | - |
| project_id | {{project_id}} | string | 是 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {
		"list": [
			{
				"project_id": "1bfd2a779bc26001",
				"testing_id": "704633ff84002",
				"parent_id": "0",
				"name": "目录xx",
				"version": 2,
				"testing_type": "folder",
				"parent_name": "根目录",
				"sort": 6000,
				"created_at": "2026-02-11T14:45:48+08:00",
				"created_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				},
				"updated_at": "2026-02-11T14:46:12+08:00",
				"updated_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				}
			},
			{
				"project_id": "1bfd2a779bc26001",
				"testing_id": "704633ff84005",
				"parent_id": "0",
				"name": "目录xx",
				"version": 1,
				"testing_type": "folder",
				"parent_name": "根目录",
				"sort": 7000,
				"created_at": "2026-02-11T18:02:24+08:00",
				"created_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				},
				"updated_at": "2026-02-11T18:02:24+08:00",
				"updated_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				}
			},
			{
				"project_id": "1bfd2a779bc26001",
				"testing_id": "704633ff84006",
				"parent_id": "0",
				"name": "目录xx",
				"version": 1,
				"testing_type": "folder",
				"parent_name": "根目录",
				"sort": 8000,
				"created_at": "2026-02-11T18:09:27+08:00",
				"created_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				},
				"updated_at": "2026-02-11T18:09:27+08:00",
				"updated_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				}
			},
			{
				"project_id": "1bfd2a779bc26001",
				"testing_id": "7047038f84003",
				"parent_id": "704633ff84002",
				"name": "未命名测试用例xx",
				"version": 1,
				"testing_type": "testing",
				"settings": null,
				"scenario": "manual",
				"frequency": {
					"name": "",
					"type": "preset",
					"preset": {
						"cycle": "hour",
						"config": {
							"interval": 5,
							"time": "08:30",
							"weekdays": [
								7
							]
						}
					},
					"cron": {
						"expression": ""
					}
				},
				"event_list": [],
				"case_references": [
					"3f3c88773c0011"
				],
				"references_target_ids": [
					"3e5ebffbb84009",
					"3e5ec62838400b",
					"e80d923c005f",
					"3e5ed566f84064",
					"37bd06a43c0003",
					"3f608ac3fc0005"
				],
				"tags": [],
				"parent_name": "目录xx",
				"sort": 1000,
				"created_at": "2026-02-11T14:46:02+08:00",
				"created_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				},
				"updated_at": "2026-02-11T17:50:05+08:00",
				"updated_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				}
			},
			{
				"project_id": "1bfd2a779bc26001",
				"testing_id": "7047038f84004",
				"parent_id": "704633ff84002",
				"name": "未命名测试用例xx",
				"version": 1,
				"testing_type": "testing",
				"settings": null,
				"scenario": "manual",
				"frequency": {
					"name": "",
					"type": "preset",
					"preset": {
						"cycle": "hour",
						"config": {
							"interval": 5,
							"time": "08:30",
							"weekdays": [
								7
							]
						}
					},
					"cron": {
						"expression": ""
					}
				},
				"event_list": [],
				"case_references": [
					"3f3c88773c0011"
				],
				"references_target_ids": [
					"3e5ebffbb84009",
					"3e5ec62838400b",
					"e80d923c005f",
					"3e5ed566f84064",
					"37bd06a43c0003",
					"3f608ac3fc0005"
				],
				"tags": [],
				"parent_name": "目录xx",
				"sort": 2000,
				"created_at": "2026-02-12T19:01:17+08:00",
				"created_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				},
				"updated_at": "2026-02-12T19:01:17+08:00",
				"updated_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				}
			},
			{
				"project_id": "1bfd2a779bc26001",
				"testing_id": "17dbf25c71d003",
				"parent_id": "0",
				"name": "未命名测试用例",
				"version": 1,
				"testing_type": "testing",
				"settings": null,
				"scenario": "manual",
				"frequency": {
					"name": "",
					"type": "preset",
					"preset": {
						"cycle": "hour",
						"config": {
							"interval": 5,
							"time": "08:30",
							"weekdays": [
								7
							]
						}
					},
					"cron": {
						"expression": ""
					}
				},
				"event_list": [],
				"case_references": [],
				"references_target_ids": [],
				"tags": [],
				"parent_name": "根目录",
				"sort": 9000,
				"created_at": "2026-02-24T16:43:18+08:00",
				"created_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				},
				"updated_at": "2026-02-24T16:43:18+08:00",
				"updated_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				}
			},
			{
				"project_id": "1bfd2a779bc26001",
				"testing_id": "37bd18257c000c",
				"parent_id": "0",
				"name": "ccx01",
				"version": 12,
				"testing_type": "testing",
				"settings": null,
				"scenario": "manual",
				"frequency": {
					"name": "",
					"type": "preset",
					"preset": {
						"cycle": "hour",
						"config": {
							"interval": 5,
							"time": "08:30",
							"weekdays": [
								7
							]
						}
					},
					"cron": {
						"expression": ""
					}
				},
				"event_list": [],
				"case_references": [
					"3e5f43043840c3",
					"3e5f43043840c3"
				],
				"references_target_ids": [
					"37bd06a43c0003",
					"3e5ed566f84064",
					"3e5ed566f84064",
					"3e5ec62838400b"
				],
				"tags": [
					"1",
					"ccx",
					"ll"
				],
				"parent_name": "根目录",
				"sort": 1000,
				"created_at": "2026-01-30T17:57:06+08:00",
				"created_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				},
				"updated_at": "2026-02-05T13:44:44+08:00",
				"updated_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				},
				"last_report_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				},
				"last_report_at": "2026-02-24T17:34:40+08:00"
			},
			{
				"project_id": "1bfd2a779bc26001",
				"testing_id": "3e5f43043840c3",
				"parent_id": "0",
				"name": "ccx02",
				"version": 5,
				"testing_type": "testing",
				"settings": null,
				"scenario": "manual",
				"frequency": {
					"name": "",
					"type": "preset",
					"preset": {
						"cycle": "hour",
						"config": {
							"interval": 5,
							"time": "08:30",
							"weekdays": [
								7
							]
						}
					},
					"cron": {
						"expression": ""
					}
				},
				"event_list": [],
				"case_references": [],
				"references_target_ids": [
					"3e5ec62838400b"
				],
				"tags": [
					"1",
					"11111",
					"ftt"
				],
				"parent_name": "根目录",
				"sort": 2000,
				"created_at": "2026-02-04T21:36:31+08:00",
				"created_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				},
				"updated_at": "2026-02-05T11:21:27+08:00",
				"updated_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				}
			},
			{
				"project_id": "1bfd2a779bc26001",
				"testing_id": "3f3c34067c0005",
				"parent_id": "0",
				"name": "cx01",
				"version": 7,
				"testing_type": "testing",
				"settings": null,
				"scenario": "manual",
				"frequency": {
					"name": "",
					"type": "preset",
					"preset": {
						"cycle": "hour",
						"config": {
							"interval": 5,
							"time": "08:30",
							"weekdays": [
								7
							]
						}
					},
					"cron": {
						"expression": ""
					}
				},
				"event_list": [],
				"case_references": [
					"3f3c71c67c000d",
					"3f3c88773c0011"
				],
				"references_target_ids": [
					"37bd06a43c0003",
					"3e5ebb23f84007",
					"3e5ec62838400b"
				],
				"tags": [
					"cx"
				],
				"parent_name": "根目录",
				"sort": 3000,
				"created_at": "2026-02-05T13:41:49+08:00",
				"created_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				},
				"updated_at": "2026-02-05T16:21:34+08:00",
				"updated_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				},
				"last_report_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				},
				"last_report_at": "2026-02-05T22:40:02+08:00"
			},
			{
				"project_id": "1bfd2a779bc26001",
				"testing_id": "3f3c71c67c000d",
				"parent_id": "0",
				"name": "cx02",
				"version": 2,
				"testing_type": "testing",
				"settings": null,
				"scenario": "manual",
				"frequency": {
					"name": "",
					"type": "preset",
					"preset": {
						"cycle": "hour",
						"config": {
							"interval": 5,
							"time": "08:30",
							"weekdays": [
								7
							]
						}
					},
					"cron": {
						"expression": ""
					}
				},
				"event_list": [],
				"case_references": [],
				"references_target_ids": [],
				"tags": [],
				"parent_name": "根目录",
				"sort": 4000,
				"created_at": "2026-02-05T13:42:52+08:00",
				"created_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				},
				"updated_at": "2026-02-05T13:43:06+08:00",
				"updated_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				}
			},
			{
				"project_id": "1bfd2a779bc26001",
				"testing_id": "3f3c88773c0011",
				"parent_id": "0",
				"name": "cx03",
				"version": 2,
				"testing_type": "testing",
				"settings": null,
				"scenario": "manual",
				"frequency": {
					"name": "",
					"type": "preset",
					"preset": {
						"cycle": "hour",
						"config": {
							"interval": 5,
							"time": "08:30",
							"weekdays": [
								7
							]
						}
					},
					"cron": {
						"expression": ""
					}
				},
				"event_list": [],
				"case_references": [],
				"references_target_ids": [],
				"tags": [],
				"parent_name": "根目录",
				"sort": 5000,
				"created_at": "2026-02-05T13:43:16+08:00",
				"created_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				},
				"updated_at": "2026-02-05T13:43:30+08:00",
				"updated_user": {
					"uid": "1bfd290991c26002",
					"nick_name": "fengtaotao",
					"alias_name": null,
					"portrait": "https://minio.apipost.cc/apipost-default/default/user/default_profile_photo/Vector-2.png"
				}
			}
		]
	},
	"time": "2026-02-25T18:19:40.188427+08:00",
	"extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | number | 状态码返回方式 1-success(200 默认), 2-expect(跟随期望响应码) ... |
| msg | 成功 | string | 返回文字描述 |
| data | - | array | 0为根节点 |
| data.env_id | 1 | string | 返回数据 |
| data.name | default_env | string | 返回数据 |
| data.is_private | -1 | number | 返回数据 |
| data.sort | 0 | number | 返回数据 |
| data.server_list | - | array | 返回数据 |
| data.server_list.server_id | 1 | string | 返回数据 |
| data.server_list.name | 蒋杰 | string | 返回数据 |
| data.server_list.sort | 1000 | number | 返回数据 |
| data.server_list.uri | - | string | 返回数据 |
| data.env_var_list | - | object | 返回数据 |
| data.env_var_list.xx | - | object | 返回数据 |
| data.env_var_list.xx.value | xx | string | 如果是is_describe_library 值是int 1开启 -1关闭 |
| data.env_var_list.xx.current_value | xx2222 | string | 如果是is_describe_library 值是int 1开启 -1关闭 |
| data.env_var_list.xx.description | - | string | 返回数据 |
| time | 2024-06-21T16:53:14.5631333+08:00 | string | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

### 批量删除

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2025-12-22 15:51:11

> 更新时间: 2026-03-06 16:35:09

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/automated_testing/multi_del

**请求方式**

> POST

**Content-Type**

> json

**请求Body参数**

```javascript
{
    "project_id": "{{project_id}}",
    "project_code": "{{project_code}}", //可选 传入相关联的三方id project_id和project_code二选一即可. 
    "testing_ids": [
        "253afd6271e004",
        "253a8d9971e002"
    ]
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | 项目id |
| project_code | {{project_code}} | string | 否 | 可选 传入相关联的三方id project_id和project_code二选一即可. |
| testing_ids | - | array | 是 | 查询的用例id集 |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
    "code": 0,
    "msg": "成功",
    "data": {
        "project_id": "287588f3ac01000",
        "testing_ids": [
            "253afd6271e004",
            "253a8d9971e002"
        ]
    },
    "time": "2024-05-29T20:22:50.10572585+08:00"
}
```

* 失败(404)

```javascript
暂无数据
```

**Query**

### 报告管理

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2025-12-23 17:57:12

> 更新时间: 2026-05-28 18:43:54

```text
暂无描述
```

**目录Header参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录Body参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| 暂无参数 |

**目录认证信息**

> 继承父级

**Query**

#### 获取测试报告详情

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2025-12-22 15:51:11

> 更新时间: 2026-01-12 14:45:18

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/automated_testing/report/details?testing_id=2069ad04ec01000&project_id={{project_id}}&report_id=2ff7ca6f788355

**请求方式**

> GET

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| testing_id | 2069ad04ec01000 | string | 是 | - |
| project_id | {{project_id}} | string | 是 | - |
| report_id | 2ff7ca6f788355 | string | 是 | - |
| project_code | {{project_code}} | string | 是 | 可选 传入相关联的三方id project_id和project_code二选一即可. |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {
		"project_id": "29ed675c2464000",
		"testing_id": "2069ad04ec01000",
		"report_id": "2ff7ca6f788355",
		"job_id": null,
		"report_name": "新建测试用例01测试报告",
		"env_id": "203057bab401000",
		"env_name": "Mock环境",
		"http": {
			"error": 0,
			"total": 2,
			"success": 2
		},
		"assert": {
			"error": 0,
			"total": 0,
			"success": 0
		},
		"start_at": "2024-01-31T11:24:16+08:00",
		"end_at": "2024-01-31T11:24:34+08:00",
		"created_user": {
			"uid": "471",
			"nick_name": "酷派克",
			"alias_name": null,
			"portrait": "/upload/user/1137/log/b1133628-44dc-421e-851f-fce837ea6423.php"
		},
		"created_at": "2025-12-23T17:54:31+08:00",
		"total_time": 1776,
		"total_response_time": 169,
		"avg_response_time": 84.5,
		"total_response_size": 218011,
		"total_request_count": 3,
		"iteration_count": 1,
		"list": [
			{
				"url": "http://go.apipost.cn/",
				"code": 200,
				"name": "go接口",
				"type": "api",
				"method": "POST",
				"status": {
					"http": "OK",
					"assert": "OK"
				},
				"timings": {
					"end": 57.90984535217285,
					"done": 60.534128189086914,
					"lookup": 27.82618522644043,
					"socket": 18.05219078063965,
					"connect": 35.277896881103516,
					"request": 12.60187530517578,
					"response": 47.024261474609375
				},
				"event_id": "aed39933a9018",
				"target_id": "aecbdb2ba9009",
				"project_id": "28ae94d95401000",
				"iteration_id": "c82857d73b024",
				"response_size": 470,
				"response_time": 46
			},
			{
				"url": "https://www.jd.com/",
				"code": 200,
				"name": "京东接口",
				"type": "api",
				"method": "GET",
				"status": {
					"http": "OK",
					"assert": "OK"
				},
				"timings": {
					"end": 124.79323196411131,
					"done": 126.64419746398926,
					"lookup": 13.703336715698242,
					"socket": 8.749845504760742,
					"connect": 26.547283172607425,
					"request": 2.3688201904296875,
					"response": 110.69960403442384,
					"secureConnect": 47.67670249938965
				},
				"event_id": "b0066e63a900d",
				"target_id": "aece6307a900e",
				"project_id": "28ae94d95401000",
				"iteration_id": "c828640f3b028",
				"response_size": 217541,
				"response_time": 123
			},
			{
				"name": "Script",
				"type": "script",
				"event_id": "b05b53fba9000",
				"project_id": "",
				"iteration_id": "c8286d1b3b02c"
			}
		]
	},
	"time": "2025-12-23T17:55:14.545445+08:00",
	"extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | team_id 或 team_code 传一个即可，如都传如则以team_id为准。 |
| msg | 成功 | string | - |
| data | - | object | 事件对象数据，根据不同的event_list.type 存入不同的对象 |
| data.project_id | 29ed675c2464000 | string | 项目id |
| data.testing_id | 2069ad04ec01000 | string | 新增用例可不填写，修改则必填 |
| data.report_id | 2ff7ca6f788355 | string | - |
| data.job_id | - | null | - |
| data.report_name | 新建测试用例01测试报告 | string | 名称 |
| data.env_id | 203057bab401000 | string | - |
| data.env_name | Mock环境 | string | 名称 |
| data.http | - | object | - |
| data.http.error | 0 | integer | - |
| data.http.total | 2 | integer | - |
| data.http.success | 2 | integer | - |
| data.assert | - | object | - |
| data.assert.error | 0 | integer | - |
| data.assert.total | 0 | integer | - |
| data.assert.success | 0 | integer | - |
| data.start_at | 2024-01-31T11:24:16+08:00 | string | - |
| data.end_at | 2024-01-31T11:24:34+08:00 | string | - |
| data.created_user | - | object | - |
| data.created_user.uid | 471 | string | - |
| data.created_user.nick_name | 酷派克 | string | 名称 |
| data.created_user.alias_name | - | null | 名称 |
| data.created_user.portrait | /upload/user/1137/log/b1133628-44dc-421e-851f-fce837ea6423.php | string | - |
| data.created_at | 2025-12-23T17:54:31+08:00 | string | - |
| data.total_time | 1776 | integer | - |
| data.total_response_time | 169 | integer | - |
| data.avg_response_time | 84.5 | number | - |
| data.total_response_size | 218011 | integer | - |
| data.total_request_count | 3 | integer | - |
| data.iteration_count | 1 | integer | - |
| data.list | - | array | 当目标目录中排序间隙不足时，会触发目录下全部节点刷新排序，此时会返回所以刷新的节点 |
| data.list.url | http://go.apipost.cn/ | string | - |
| data.list.code | 200 | integer | - |
| data.list.name | go接口 | string | 名称 |
| data.list.type | api | string | - |
| data.list.method | POST | string | - |
| data.list.status | - | object | - |
| data.list.status.http | OK | string | - |
| data.list.status.assert | OK | string | - |
| data.list.timings | - | object | - |
| data.list.timings.end | 57.90984535217285 | number | - |
| data.list.timings.done | 60.534128189086914 | number | - |
| data.list.timings.lookup | 27.82618522644043 | number | - |
| data.list.timings.socket | 18.05219078063965 | number | - |
| data.list.timings.connect | 35.277896881103516 | number | - |
| data.list.timings.request | 12.60187530517578 | number | - |
| data.list.timings.response | 47.024261474609375 | number | - |
| data.list.event_id | aed39933a9018 | string | - |
| data.list.target_id | aecbdb2ba9009 | string | 删除的元素id |
| data.list.project_id | 28ae94d95401000 | string | 项目id |
| data.list.iteration_id | c82857d73b024 | string | - |
| data.list.response_size | 470 | integer | - |
| data.list.response_time | 46 | integer | - |
| data.list.timings.secureConnect | 47.67670249938965 | number | - |
| time | 2025-12-23T17:55:14.545445+08:00 | string | 执行间隔时间(毫秒) |
| extra_err | - | object | - |

* 失败(404)

```javascript
暂无数据
```

**Query**

#### 获取测试报告列表

> 创建人: Stilwell

> 更新人: Stilwell

> 创建时间: 2025-12-22 15:51:11

> 更新时间: 2026-01-12 15:05:55

```text
暂无描述
```

**接口状态**

> 已完成

**接口URL**

> {{host}}/open/automated_testing/report/list?project_id={{project_id}}&testing_id=2069ad04ec01000

**请求方式**

> GET

**Content-Type**

> none

**请求Query参数**

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| project_id | {{project_id}} | string | 是 | - |
| testing_id | 2069ad04ec01000 | string | 否 | 测试或者套件id 可选 如果job_id和testing_id都未填则获取项目下全部列表 |
| project_code | {{project_code}} | string | 否 | 可选 传入相关联的三方id project_id和project_code二选一即可. |
| job_id | - | string | 否 | - |

**认证方式**

> 继承父级

**响应示例**

* 成功(200)

```javascript
{
	"code": 0,
	"msg": "成功",
	"data": {
		"list": [
			{
				"project_id": "29ed675c2464000",
				"testing_id": "2069ad04ec01000",
				"report_id": "2ff7ca6f788355",
				"job_id": "2069ad04ec01001",
				"scenario": "scheduled",
				"report_name": "新建测试用例01测试报告",
				"env_id": "203057bab401000",
				"env_name": "Mock环境",
				"http": {
					"error": 0,
					"total": 2,
					"success": 2
				},
				"assert": {
					"error": 0,
					"total": 0,
					"success": 0
				},
				"start_at": "2024-01-31T11:24:16+08:00",
				"end_at": "2024-01-31T11:24:34+08:00",
				"created_user": {
					"uid": "471",
					"nick_name": "酷派克",
					"alias_name": "酷派克",
					"portrait": "https://img.cdn.apipost.cn/test/upload/user/1137/log/b1133628-44dc-421e-851f-fce837ea6423.php"
				},
				"created_at": "2025-12-23T17:54:31+08:00"
			}
		]
	},
	"time": "2025-12-23T17:55:50.889308+08:00",
	"extra_err": {}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 0 | integer | - |
| msg | 成功 | string | - |
| data | - | object | - |
| data.list | - | array | 当目标目录中排序间隙不足时，会触发目录下全部节点刷新排序，此时会返回所以刷新的节点 |
| data.list.project_id | 28ded0781401000 | string | - |
| data.list.testing_id | 28ded07b6c01000 | string | - |
| data.list.report_id | 203057bab401000 | string | - |
| data.list.report_name | 新建测试用例01测试报告 | string | - |
| data.list.env_id | 203057bab401000 | string | - |
| data.list.env_name | Mock环境 | string | - |
| data.list.total_time | 1776 | integer | - |
| data.list.total_response_time | 169 | integer | - |
| data.list.avg_response_time | 84.5 | number | - |
| data.list.total_response_size | 218011 | integer | - |
| data.list.total_request_count | 3 | integer | - |
| data.list.iteration_count | 1 | integer | - |
| data.list.http | - | object | - |
| data.list.http.error | 0 | integer | - |
| data.list.http.total | 2 | integer | - |
| data.list.http.success | 2 | integer | - |
| data.list.assert | - | object | - |
| data.list.assert.error | 0 | integer | - |
| data.list.assert.total | 0 | integer | - |
| data.list.assert.success | 0 | integer | - |
| data.list.list | - | array | - |
| data.list.list.url | http://go.apipost.cn/ | string | - |
| data.list.list.code | 200 | integer | - |
| data.list.list.name | go接口 | string | - |
| data.list.list.type | api | string | - |
| data.list.list.method | POST | string | - |
| data.list.list.status | - | object | - |
| data.list.list.status.http | OK | string | - |
| data.list.list.status.assert | OK | string | - |
| data.list.list.timings | - | object | - |
| data.list.list.timings.end | 57.90984535217285 | number | - |
| data.list.list.timings.done | 60.534128189086914 | number | - |
| data.list.list.timings.lookup | 27.82618522644043 | number | - |
| data.list.list.timings.socket | 18.05219078063965 | number | - |
| data.list.list.timings.connect | 35.277896881103516 | number | - |
| data.list.list.timings.request | 12.60187530517578 | number | - |
| data.list.list.timings.response | 47.024261474609375 | number | - |
| data.list.list.event_id | aed39933a9018 | string | - |
| data.list.list.target_id | aecbdb2ba9009 | string | - |
| data.list.list.project_id | 28ae94d95401000 | string | - |
| data.list.list.iteration_id | c82857d73b024 | string | - |
| data.list.list.response_size | 470 | integer | - |
| data.list.list.response_time | 46 | integer | - |
| data.list.start_at | 2024-01-31T11:24:16+08:00 | string | - |
| data.list.end_at | 2024-01-31T11:24:34+08:00 | string | - |
| data.list.created_user | - | object | - |
| data.list.created_user.uid | 340e9 | string | - |
| data.list.created_user.nick_name | 1112 | string | - |
| data.list.created_user.portrait | https://img.cdn.apipost.cn/test/client/user/213225/avatar/cfb9d2e10af84128f9d48b8e67baa2de65b37c93c5cc6.png | string | - |
| data.list.created_at | 2024-05-11T21:25:00+08:00 | string | - |
| time | 2024-05-11T21:44:30.6768757+08:00 | string | - |

* 失败(404)

```javascript
暂无数据
```

**Query**
