/*
 * @author: DSCode
 * @create: 2021-03-26 10:00 AM
 * @license: MIT
 * @lastAuthor: DSCode
 * @lastEditTime: 2021-03-29 17:21 PM
 * @desc: 用户软路由
 */
"use strict";

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
  },
  {
    method: "post",
    path: "/updateUserInfo",
    handler: async (req, res) => {
      try {
        const account = req.payload.account;
        const password = req.payload.password;
        const username = req.payload.username;
        const ID_card_type = req.payload.ID_card_type;
        const ID_card_num = req.payload.ID_card_num;
        const postcode = req.payload.postcode;
        const address = req.payload.address;
        const security = req.payload.security;
        const security_answer = req.payload.security_answer;
        const upload_ID_Img = req.payload.upload_ID_Img;
        req.log("Log Here");
        return query(
          req,
          allSQL.updateUserInfo(
            account,
            password,
            username,
            ID_card_type,
            ID_card_num,
            postcode,
            address,
            security,
            security_answer,
            upload_ID_Img
          )
        );
      } catch (error) {
        return error;
      }
    },
    options: {
      description: "更新个人信息",
      notes: "前端传入姓名、证件号码、邮政编码、地址、账号、密保问题、密保答案",
      tags: ["api"],
      validate: {
        payload: Joi.object({
          account: Joi.string().required().description("账号"),
          password: Joi.string().required().description("密码"),
          username: Joi.string().required().description("姓名"),
          ID_card_type: Joi.string().required().description("证件类型"),
          ID_card_num: Joi.string().required().description("证件号码"),
          postcode: Joi.string().required().description("邮政编码"),
          address: Joi.string().required().description("地址"),
          security: Joi.string().required().description("密保问题"),
          security_answer: Joi.string().required().description("密保答案"),
          upload_ID_Img: Joi.string().required().description("是否上传证件照片")
        })
      }
    }
  }
];

module.exports = user;
