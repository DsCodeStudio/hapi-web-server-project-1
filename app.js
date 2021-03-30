/*
 * @author: DSCode
 * @create: 2021-03-23 18:32 PM
 * @license: MIT
 * @lastAuthor: DSCode
 * @lastEditTime: 2021-03-30 09:02 AM
 * @desc: 服务器主文件
 */
"use strict";

// 引用 Hapi
const Hapi = require("@hapi/hapi");

const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const HapiSwagger = require("hapi-swagger");
const Pack = require("./package");

// 导入路由
const Routers = require("./routers/router");
// 创建一个 HTTP 服务
// (async () => {})(); 可用此方法改进函数
const server = Hapi.server({
  port: 3000,
  host: "192.168.2.53",
  debug: false, // disable Hapi debug console logging
  // 配置跨域
  routes: {
    cors: {
      origin: ["*"]
    }
  }
});

// 配置 Swagger
const swaggerOptions = {
  info: {
    title: "Test API Documentation",
    version: Pack.version
  }
};

// 初始化 App
const init = async () => {
  // 使用 Hapi 日志组件，实时监控程序运行情况
  await server.register({
    plugin: require("hapi-pino"),
    options: {
      // 格式化日志输出
      prettyPrint: true,
      redact: [
        "req.headers.authorization",
        "key",
        "path.to.key",
        "stuff.thats[*].secret"
      ],
      logEvents: ["server-start", "server-stop", "response", "request-error"] // Default
    }
  });

  // 连接数据库
  await server.register({
    plugin: require("hapi-plugin-mysql"),
    options: {
      host: "localhost",
      user: "root",
      password: "ds",
      port: 3306
    }
  });

  // 注册 Swagger 组件
  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions
    }
  ]);

  try {
    await server.start();
    console.log("Server running at:", server.info.uri);
  } catch (err) {
    console.log(err);
  }

  // 注册路由
  server.route(Routers);
};

// 捕获软件运行异常
process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

server.events.on("response", function (request) {
  console.log(
    request.info.remoteAddress +
      ": " +
      request.method.toUpperCase() +
      " " +
      request.path +
      " --> " +
      request.response.statusCode +
      " " +
      JSON.stringify(request.payload)
  );
});

// 执行初始化函数
init();
