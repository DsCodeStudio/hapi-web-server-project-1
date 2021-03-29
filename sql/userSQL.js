/*
 * @author: DSCode
 * @create: 2021-03-26 14:16 PM
 * @license: MIT
 * @lastAuthor: DSCode
 * @lastEditTime: 2021-03-27 16:17 PM
 * @desc: 所有用户SQL语句
 */
"use strict";

/** ----------------------------------------------------------------
 * TODO User APIs
 ---------------------------------------------------------------- */
// 获取所有用户信息
const getAllAccounts = "SELECT * FROM `trademarkdata`.`userdata`;";

/**
 * 根据账号密码登录
 * @param {*} account 账号
 * @param {*} password 密码
 * @returns Login SQL
 */
const login = (account, password) => {
  return (
    "SELECT id,username,account,password  FROM `trademarkdata`.`userdata` WHERE `account` = '" +
    account +
    "' AND `password` ='" +
    password +
    "';"
  );
};

/**
 *
 * @param {*} phone 手机号
 * @param {*} code 验证码
 * @returns Login SQL
 */
const phone = (phone, code) => {
  return (
    "SELECT id,username,account,password FROM `trademarkdata`.`userdata` WHERE `phone` = '" +
    phone +
    "' AND `code` ='" +
    code +
    "';"
  );
};

/**
 * 更改密码 + 设置新密码
 * @param {*} acount 账号
 * @param {*} oldPWD 老密码
 * @param {*} newPWD 新密码
 * @returns Change password SQL
 */
const changePWD = (acount, oldPWD, newPWD) => {
  return (
    "UPDATE `trademarkdata`.`userdata` SET `password` = '" +
    newPWD +
    "' WHERE `account` = '" +
    acount +
    "' AND `password` = '" +
    oldPWD +
    "'; "
  );
};

module.exports = {
  getAllAccounts: getAllAccounts,
  login: login,
  phone: phone,
  changePWD: changePWD
};
