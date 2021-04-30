/*
 * @author: DSCode
 * @create: 2021-03-26 10:00 AM
 * @license: MIT
 * @lastAuthor: DSCode
 * @lastEditTime: 2021-04-30 16:13 PM
 * @desc: 用户软路由
 */

'use strict';

const allSQL = require('../sql/businessSQL');
const query = require('../sql/queryData');
const Joi = require('joi');

// TODO 业务路由
const business = [
  {
    method: 'get',
    path: '/getAllBusinessTypes',
    handler: async (req, res) => {
      return query(req, allSQL.getAllBusinessTypes());
    },
    options: {
      description: '获取所有类型信息',
      notes: '获取所有类型信息，包含所有！！！',
      tags: ['api'],
    },
  },
  {
    method: 'post',
    path: '/getAllBusinessTypeByID',
    handler: async (req, res) => {
      try {
        const businessTypeID = req.payload.businessTypeID;
        return query(req, allSQL.getAllBusinessTypeByID(businessTypeID));
      } catch (error) {
        return error;
      }
    },
    options: {
      description: '根据业务类型 ID 查询所有业务信息',
      notes: '前端传入 ID 进行查询',
      tags: ['api'],
      validate: {
        payload: Joi.object({
          businessTypeID: Joi.string().required().description('业务类型 ID '),
        }),
      },
    },
  },
  {
    method: 'get',
    path: '/getAllBusinessInfo',
    handler: async (req, res) => {
      try {
        return query(req, allSQL.getAllBusinessInfo());
      } catch (error) {
        return error;
      }
    },
    options: {
      description: '查询所有提交的单号信息',
      notes: '不区分用户,不筛选字段',
      tags: ['api'],
    },
  },
  {
    method: 'post',
    path: '/getAllBusinessInfoByAccount',
    handler: async (req, res) => {
      try {
        const account = req.payload.account;

        return query(req, allSQL.getAllBusinessInfoByAccount(account));
      } catch (error) {
        return error;
      }
    },
    options: {
      description: '用户所有的业务信息',
      notes: '更据用户 账号 查询所有业务信息',
      tags: ['api'],
      validate: {
        payload: Joi.object({
          account: Joi.string().required().description('账号ID'),
        }),
      },
    },
  },
  {
    method: 'post',
    path: '/getBusinessInfoByOrderID',
    handler: async (req, res) => {
      try {
        const orderID = req.payload.orderID;
        return query(req, allSQL.getBusinessInfoByOrderID(orderID));
      } catch (error) {
        return error;
      }
    },
    options: {
      description: '根据单号查询某一个业务详细信息',
      notes: '根据单号 查询业务详细信息',
      tags: ['api'],
      validate: {
        payload: Joi.object({
          orderID: Joi.string().required().description('单号'),
        }),
      },
    },
  },
  {
    method: 'post',
    path: '/createBusiness',
    handler: async (req, res) => {
      try {
        const account = req.payload.account;
        const applicant_type = req.payload.applicant_type;
        const applicant_name = req.payload.applicant_name;
        const valid_license = req.payload.valid_license;
        const certificate_ID = req.payload.certificate_ID;
        const certificate_type = req.payload.certificate_type;
        const address = req.payload.address;
        const phone = req.payload.phone;
        const identity = req.payload.identity;
        const city = req.payload.city;
        const EN_name = req.payload.EN_name;
        const legal_person = req.payload.legal_person;
        const EN_address = req.payload.EN_address;
        const applicant_nationality = req.payload.applicant_nationality;
        const postal_code = req.payload.postal_code;
        const contacts = req.payload.contacts;
        const agency_name = req.payload.agency_name;
        const domestic_recipients = req.payload.domestic_recipients;
        const application_country = req.payload.application_country;
        const application_date = req.payload.application_date;
        const application_instructions = req.payload.application_instructions;
        const trademark_info = req.payload.trademark_info;
        const trademark_type_id = req.payload.trademark_type_id;
        const nets = req.payload.nets;
        const business_type = req.payload.business_type;
        const status = req.payload.status;

        req.log(
          allSQL.createBusiness(
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
          ),
          'SQL 测试语句'
        );
        return query(
          req,
          allSQL.createBusiness(
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
          )
        );
      } catch (error) {
        return error;
      }
    },
    options: {
      description: '创建新的业务',
      notes: '创建新业务，字段多，注意验证',
      tags: ['api'],
      validate: {
        payload: Joi.object({
          account: Joi.string()
            .required()
            .description('账号 登录用户,跟用户表进行外键绑定'),
          applicant_type: Joi.string()
            .required()
            .description('申请人类型 1.企业/单位申请2.自然人3.其他'),
          applicant_name: Joi.string()
            .required()
            .description('申请人姓名/主题名称'),
          valid_license: Joi.string()
            .required()
            .description('有效执照 1.身份证 2.营业执照3.其他'),
          certificate_ID: Joi.string()
            .required()
            .description('执照号码/证件号码'),
          certificate_type: Joi.string()
            .required()
            .description('证件类型 1.身份证 2.营业执照'),
          address: Joi.string().required().description('地址信息'),
          phone: Joi.string().required().description('联系电话'),
          identity: Joi.string().required().description('所属省份'),
          city: Joi.string().required().description('所属城市'),
          EN_name: Joi.string().required().description('英文名称'),
          legal_person: Joi.string().required().description('企业法人'),
          EN_address: Joi.string().required().description('英文地址'),
          applicant_nationality: Joi.string()
            .required()
            .description('申请人国籍/地区'),
          postal_code: Joi.string().required().description('邮政编码'),
          contacts: Joi.string().required().description('联系人'),
          agency_name: Joi.string().required().description('代理机构名称'),
          domestic_recipients: Joi.string()
            .required()
            .description('外国申请人的国内接收人'),
          application_country: Joi.string()
            .required()
            .description('申请/展出国家/地区'),
          application_date: Joi.string().required().description('申请日期'),
          application_instructions: Joi.string()
            .required()
            .description('商标申请说明'),
          trademark_info: Joi.string().required().description('商标说明'),
          trademark_type_id: Joi.string()
            .required()
            .description('商标类别编号'),
          nets: Joi.string().required().description('办理网点'),
          business_type: Joi.string().required().description('业务类型'),
          status: Joi.string()
            .required()
            .description('审核状态 1.审核中,2.审核完成,3.审核失败4.预约成功'),
        }),
      },
    },
  },
  {
    method: 'post',
    path: '/deleteBusiness',
    handler: async (req, res) => {
      try {
        const orderID = req.payload.orderID;
        return query(req, allSQL.deleteBusiness(orderID));
      } catch (error) {
        return error;
      }
    },
    options: {
      description: '根据单号删除某一个业务详细信息',
      notes: '根据单号删除单一业务信息',
      tags: ['api'],
      validate: {
        payload: Joi.object({
          orderID: Joi.string().required().description('单号'),
        }),
      },
    },
  },
  {
    method: 'post',
    path: '/getBusinessInfoByStatus',
    handler: async (req, res) => {
      try {
        const account = req.payload.account;
        const status = req.payload.status;
        return query(req, allSQL.getBusinessInfoByStatus(account, status));
      } catch (error) {
        return error;
      }
    },
    options: {
      description: '根据业务状态信息查询业务信息',
      notes: '需要传入账号以及业务状态 1.申请中,2,成功,3,失败,4,预约成功',
      tags: ['api'],
      validate: {
        payload: Joi.object({
          account: Joi.string().required().description('账号'),
          status: Joi.string().required().description('状态'),
        }),
      },
    },
  },
];

module.exports = business;
