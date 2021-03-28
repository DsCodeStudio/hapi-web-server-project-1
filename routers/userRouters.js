/*
 * @author: DSCode
 * @create: 2021-03-26 10:00 AM
 * @license: MIT
 * @lastAuthor: DSCode
 * @lastEditTime: 2021-03-27 16:14 PM
 * @desc: 用户软路由
 */

const allSQL = require("../sql/userSQL");
const query = require("../sql/queryData");
const Joi = require("joi");

// TODO 用户路由
const user = [
  {
    method: "get",
    path: "/getAllAccountInfo",
    handler: async (req, res) => {
      return query(req, allSQL.getAllAccounts);
    },
    options: {
      description: "获取所有账户信息",
      notes: "获取所有账户信息，包含所有数据！！！",
      tags: ["api"]
    }
  },
  {
    method: "post",
    path: "/login",
    handler: async (req, res) => {
      try {
        const account = req.payload.account;
        const password = req.payload.password;
        return query(req, allSQL.login(account, password));
      } catch (error) {
        return error;
      }
    },
    options: {
      description: "账号登录接口",
      notes: "前端传入account password 进行登录验证",
      tags: ["api"],
      validate: {
        payload: Joi.object({
          account: Joi.string().required().description("账户名称"),
          password: Joi.string().required().description("账户密码")
        })
      }
    }
  },
  {
    method: "post",
    path: "/phone",
    handler: async (req, res) => {
      try {
        const phone = req.payload.phone;
        const code = req.payload.code;
        return query(req, allSQL.phone(phone, code));
      } catch (error) {
        return error;
      }
    },
    options: {
      description: "手机号验证登录接口",
      notes: "前端传入 phone code 进行登录验证",
      tags: ["api"],
      validate: {
        payload: Joi.object({
          phone: Joi.string().required().description("手机号"),
          code: Joi.string().required().description("验证码")
        })
      }
    }
  },
  {
    method: "post",
    path: "/changePWD",
    handler: async (req, res) => {
      try {
        const acount = req.payload.acount;
        const oldPWD = req.payload.oldPWD;
        const newPWD = req.payload.newPWD;
        return query(req, allSQL.changePWD(acount, oldPWD, newPWD));
      } catch (error) {
        return error;
      }
    },
    options: {
      description: "更改密码 + 设置新密码",
      notes: "前端传入 账号 密码 进行合法验证",
      tags: ["api"],
      validate: {
        payload: Joi.object({
          acount: Joi.string().required().description("账号"),
          oldPWD: Joi.string().required().description("老密码"),
          newPWD: Joi.string().required().description("新密码")
        })
      }
    }
  }
  // 创建用户
  // 删除用户
];

module.exports = user;
