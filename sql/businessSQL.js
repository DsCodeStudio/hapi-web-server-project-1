/*
 * @author: DSCode
 * @create: 2021-03-27 16:12 PM
 * @license: MIT
 * @lastAuthor: DSCode
 * @lastEditTime: 2021-04-30 16:13 PM
 * @desc: 所有业务SQL
 */
'use strict';

/** ----------------------------------------------------------------
 * TODO Business APIs
 ---------------------------------------------------------------- */

/**
 * 查询所有业务类型信息
 * @returns Select businesstype SQL
 */
const getAllBusinessTypes = () => {
  return 'SELECT * FROM `trademarkdata`.`businesstype`;';
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
const getAllBusinessInfo = () => {
  return 'SELECT * FROM `trademarkdata`.`business`;';
};

/**
 * 更据用户 ID 查询所有业务信息
 * @param {*} account 用户ID
 * @returns getAllBusinessInfoByAccount SQL
 */
const getAllBusinessInfoByAccount = (account) => {
  return (
    "SELECT * FROM `trademarkdata`.`business` WHERE `account` = '" +
    account +
    "';"
  );
};

/**
 * 根据单号查询业务详细信息
 * @param {*} orderID 单号
 * @returns get Business Info By Order ID SQL
 */
const getBusinessInfoByOrderID = (orderID) => {
  return (
    "SELECT * FROM `trademarkdata`.`business` WHERE `order_id` = '" +
    orderID +
    "';"
  );
};

/**
 * 新增业务信息
 * @param {*} account 账号 登录用户,跟用户表进行外键绑定
 * @param {*} applicant_type 申请人类型 1.企业/单位申请2.自然人3.其他
 * @param {*} applicant_name 申请人姓名/主题名称
 * @param {*} valid_license 有效执照 1.身份证 2.营业执照3.其他
 * @param {*} certificate_ID 执照号码/证件号码
 * @param {*} certificate_type 证件类型 1.身份证 2.营业执照
 * @param {*} address 地址信息
 * @param {*} phone 联系电话
 * @param {*} identity 所属省份
 * @param {*} city 所属城市
 * @param {*} EN_name 英文名称
 * @param {*} legal_person 企业法人
 * @param {*} EN_address 英文地址
 * @param {*} applicant_nationality 申请人国籍/地区
 * @param {*} postal_code 邮政编码
 * @param {*} contacts 联系人
 * @param {*} agency_name 代理机构名称
 * @param {*} domestic_recipients 外国申请人的国内接收人
 * @param {*} application_country 申请/展出国家/地区
 * @param {*} application_date 申请日期
 * @param {*} application_instructions 商标说明
 * @param {*} trademark_info 商标注册信息
 * @param {*} trademark_type_id 商标类别编号
 * @param {*} nets 办理网点
 * @param {*} business_type 业务类型
 * @param {*} status 审核状态 1.审核中,2.审核完成,3.审核失败4.预约成功
 * @returns 新增业务信息 SQL
 */
const createBusiness = (
  account,
  applicant_type,
  applicant_name,
  valid_license,
  certificate_ID,
  certificate_type,
  address,
  phone,
  identity,
  city,
  EN_name,
  legal_person,
  EN_address,
  applicant_nationality,
  postal_code,
  contacts,
  agency_name,
  domestic_recipients,
  application_country,
  application_date,
  application_instructions,
  trademark_info,
  trademark_type_id,
  nets,
  business_type,
  status
) => {
  return (
    "INSERT INTO `trademarkdata`.`business`(`account`,  \
  `applicant_type`,`applicant_name`,`valid_license`,\
  `certificate_ID`,`certificate_type`,`address`, `phone`,`identity`,`city`,\
  `EN_name`,`legal_person`,`EN_address`,`applicant_nationality`,`postal_code`,\
  `contacts`,`agency_name`,`domestic_recipients`,`application_country`,`application_date`,`application_instructions`,\
  `trademark_info`,`trademark_type_id`, `nets`, `business_type`, `status`)\
   VALUES ('" +
    account +
    "','" +
    applicant_type +
    "','" +
    applicant_name +
    "','" +
    valid_license +
    "','" +
    certificate_ID +
    "','" +
    certificate_type +
    "','" +
    address +
    "','" +
    phone +
    "','" +
    identity +
    "','" +
    city +
    "','" +
    EN_name +
    "','" +
    legal_person +
    "','" +
    EN_address +
    "','" +
    applicant_nationality +
    "','" +
    postal_code +
    "','" +
    contacts +
    "','" +
    agency_name +
    "','" +
    domestic_recipients +
    "','" +
    application_country +
    "','" +
    application_date +
    "','" +
    application_instructions +
    "','" +
    trademark_info +
    "','" +
    trademark_type_id +
    "','" +
    nets +
    "','" +
    business_type +
    "','" +
    status +
    "')"
  );
};

/**
 * 删除单一业务
 * @param {*} order_id 业务单号
 * @returns delete business SQL
 */
const deleteBusiness = (order_id) => {
  return (
    "DELETE FROM `trademarkdata`.`business` WHERE `order_id` = '" +
    order_id +
    "';"
  );
};

/**
 * 根据业务状态查询相应业务数据
 * @param {*} account 账号
 * @param {*} status 业务状态
 * @returns get business By status SQL
 */
const getBusinessInfoByStatus = (account, status) => {
  return (
    "SELECT * FROM `trademarkdata`.`business` WHERE `account` = '" +
    account +
    "' AND `status` = '" +
    status +
    "';"
  );
};
module.exports = {
  getAllBusinessTypes: getAllBusinessTypes,
  getAllBusinessTypeByID: getAllBusinessTypeByID,
  getAllBusinessInfo: getAllBusinessInfo,
  getAllBusinessInfoByAccount: getAllBusinessInfoByAccount,
  getBusinessInfoByOrderID: getBusinessInfoByOrderID,
  createBusiness: createBusiness,
  deleteBusiness: deleteBusiness,
  getBusinessInfoByStatus: getBusinessInfoByStatus,
};
