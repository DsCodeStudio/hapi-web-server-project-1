/*
 * @author: DSCode
 * @create: 2021-03-26 10:00 AM
 * @license: MIT
 * @lastAuthor: DSCode
 * @lastEditTime: 2021-03-27 16:54 PM
 * @desc: 用户软路由
 */

"use strict";

const allSQL = require("../sql/businessSQL");
const query = require("../sql/queryData");
const Joi = require("joi");

// TODO 用户路由
const business = [
  {
    method: "get",
    path: "/getAllBusinessTypes",
    handler: async (req, res) => {
      return query(req, allSQL.getAllBusinessTypes());
    },
    options: {
      description: "获取所有类型信息",
      notes: "获取所有类型信息，包含所有！！！",
      tags: ["api"]
    }
  },
  {
    method: "post",
    path: "/getAllBusinessTypeByID",
    handler: async (req, res) => {
      try {
        const businessTypeID = req.payload.businessTypeID;
        return query(req, allSQL.getAllBusinessTypeByID(businessTypeID));
      } catch (error) {
        return error;
      }
    },
    options: {
      description: "根据业务类型 ID 查询所有业务信息",
      notes: "前端传入 ID 进行查询",
      tags: ["api"],
      validate: {
        payload: Joi.object({
          businessTypeID: Joi.string().required().description("业务类型 ID ")
        })
      }
    }
  },
  {
    method: "get",
    path: "/getAllbusinessInfo",
    handler: async (req, res) => {
      try {
        return query(req, allSQL.getAllbusinessInfo());
      } catch (error) {
        return error;
      }
    },
    options: {
      description: "查询所有提交的单号信息",
      notes: "不区分用户,不筛选字段",
      tags: ["api"]
    }
  },
  {
    method: "post",
    path: "/getAllBusinessInfoById",
    handler: async (req, res) => {
      try {
        const accountID = req.payload.accountID;
        return query(req, allSQL.getAllbusinessInfoById(accountID));
      } catch (error) {
        return error;
      }
    },
    options: {
      description: "用户所有的业务信息",
      notes: "更据用户 ID 查询所有业务信息",
      tags: ["api"],
      validate: {
        payload: Joi.object({
          accountID: Joi.string().required().description("账号ID")
        })
      }
    }
  }
  // 创建用户
  // 删除用户
];

module.exports = business;
