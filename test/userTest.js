/*
 * @author: DSCode
 * @create: 2021-04-30 16:51 PM
 * @license: MIT
 * @lastAuthor: DSCode
 * @lastEditTime: 2021-04-30 16:59 PM
 * @desc:
 */

module.exports = function (data) {
  for (const key in data) {
    const element = object[key];
    let R = S(element.tag, element.data);
    if (R === false) {
      return false;
    }
  }

  return true;
};

//
function S(tag, data) {
  switch (tag) {
    case '':
      pass;
      return;
    case '':
      pass;
      return;
    case '':
      pass;
      return;
  }
}
