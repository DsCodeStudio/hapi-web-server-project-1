/*
 * @author: DSCode
 * @create: 2021-03-26 14:28 PM
 * @license: MIT
 * @lastAuthor: DSCode
 * @lastEditTime: 2021-03-29 08:44 AM
 * @desc: Run SQL
 */
"use strict";

/**
 * 执行SQL语句的函数，自带异常捕获
 * @param {*} req Request 请求体
 * @param {*} sql 需要执行的SQL
 * @returns
 */
module.exports = async (req, sql) => {
  let result = "";
  try {
    result = req.app.db.query(sql);
  } catch (error) {
    result = error;
  }
  return result;
};
