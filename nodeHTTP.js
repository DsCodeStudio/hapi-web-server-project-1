/*
 * @author: DSCode
 * @create: 2021-03-24 09:55 AM
 * @license: MIT
 * @lastAuthor: DSCode
 * @lastEditTime: 2021-03-31 14:52 PM
 * @desc:
 */
"use strict";
// 引入 HTTP
const http = require("http");
// 主机名
const hostname = "127.0.0.1";
// 端口
const port = 3000;
// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
  // req 客户端请求 request
  // res 服务端响应请求，返回值 responsive
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});
// 服务监听
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
