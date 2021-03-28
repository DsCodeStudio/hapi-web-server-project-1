<!--
 * @author: DSCode
 * @create: 2021-03-28 11:55 AM
 * @license: MIT
 * @lastAuthor: DSCode
 * @lastEditTime: 2021-03-28 19:22 PM
 * @desc: 项目文档
-->

# 关于这个项目

使用 [Hapi](https://hapi.dev/) 创建的第一个 Web Server API Template，项目支持横向扩展，自带示例数据库，采用`活文档`概念书写项目文档。

## 包管理工具

优先使用 `yarn` 简化命令操作，`npm` 同样优秀，但是不推荐 `pnpm`，原因在于 `pnpm` 会改变原有包组织形式，导致环境损坏，也不推荐 `cnpm`。

# 运行项目

```sh
# 安装环境
yarn || npm i
# 启动项目
yarn dev || npm run dev
```

# 项目依赖

```json
"@hapi/hapi"  //
"@hapi/inert" //
"@hapi/vision" //
"hapi-pino" //
"hapi-plugin-mysql" //
"hapi-swagger" //
"joi" //
```
