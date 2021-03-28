/*
 * @author: DSCode
 * @create: 2021-03-27 16:12 PM
 * @license: MIT
 * @lastAuthor: DSCode
 * @lastEditTime: 2021-03-27 16:20 PM
 * @desc: 所有业务SQL
 */

/** ----------------------------------------------------------------
 * TODO Business APIs
 ---------------------------------------------------------------- */

/**
 * 查询所有业务类型信息
 * @returns Select businesstype SQL
 */
const getAllBusinessTypes = () => {
  return "SELECT * FROM `trademarkdata`.`businesstype`;";
};

/**
 * 根据业务ID查询某一个业务类型详细信息
 * @param {*} id 业务类型ID
 * @returns get All Business Type By ID SQL
 */
const getAllBusinessTypeByID = (id) => {
  return (
    "SELECT * FROM `trademarkdata`.`businesstype` WHERE `business_id` = '" +
    id +
    "';"
  );
};

/**
 * 查询所有提交的单号信息,不区分用户,不筛选字段
 * @returns get all business data
 */
const getAllbusinessInfo = () => {
  return "SELECT * FROM `trademarkdata`.`business`;";
};

/**
 * 更据用户 ID 查询所有业务信息
 * @param {*} accountID 用户ID
 * @returns getAllbusinessInfoById SQL
 */
const getAllbusinessInfoById = (accountID) => {
  return (
    "SELECT * FROM `trademarkdata`.`business` WHERE `accountID` = '" +
    accountID +
    "';"
  );
};

module.exports = {
  getAllBusinessTypes: getAllBusinessTypes,
  getAllBusinessTypeByID: getAllBusinessTypeByID,
  getAllbusinessInfo: getAllbusinessInfo,
  getAllbusinessInfoById: getAllbusinessInfoById
};
