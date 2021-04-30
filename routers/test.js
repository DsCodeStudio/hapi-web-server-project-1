/*
 * @author: DSCode
 * @create: 2021-04-30 16:27 PM
 * @license: MIT
 * @lastAuthor: DSCode
 * @lastEditTime: 2021-04-30 16:50 PM
 * @desc:
 */
'use strict';

function Rtest(params, test) {
  switch (test) {
    case 'white':
      if (params != '') {
        return 1;
      } else {
        return 0;
      }
    case 'reg':
      let reg = /[a-zA-Z]/;
      if (reg.test(params)) {
        return 1;
      } else {
        return 0;
      }
    default:
      break;
  }
}

function tem(method, urlName) {
  return {
    method: method,
    path: urlName,
    handler: fun(),
    options: {
      description: '获取所有账户信息',
      notes: '获取所有账户信息，包含所有数据！！！',
      tags: ['api'],
    },
  };
}

module.exports = Rtest;
