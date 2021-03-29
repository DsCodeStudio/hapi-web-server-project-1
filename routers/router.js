/*
 * @author: DSCode
 * @create: 2021-03-24 12:16 PM
 * @license: MIT
 * @lastAuthor: DSCode
 * @lastEditTime: 2021-03-27 16:23 PM
 * @desc: 项目路由文件
 */
"use strict";

const business = require("./businessRouters");
const user = require("./userRouters");

module.exports = [
  {
    method: "get",
    path: "/",
    options: {
      description: "主路由",
      notes: "测试主路由",
      tags: ["api"] // ADD THIS TAG,
    },
    handler: async (req, res) => {
      return "欢迎来到商标注册系统😎";
    }
  },
  ...user,
  ...business
];
