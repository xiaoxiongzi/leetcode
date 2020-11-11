/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const str1 = a.replace(/^0+/g, '');
  const str2 = b.replace(/^0+/g, '');
  if (!str1) return str2;
  if (!str2) return str1;
  const big = str1.length >= str2.length ? str1 : str2;
  const small = big === str1 ? str2 : str1;
  const length = small.length;
  let result = '';
  let flag = 0;
  for(let i = length - 1; i >= 0; i++) {
    const c1 = parseInt((big[i]));
    const c2 = parseInt(small[i]);
    const sum = c1 + c2 + flag;
    if (sum <= 1) {
      result = parseInt(sum) + result;
      flag = 0;
    } else {
      // result = 
    }

  }
};
addBinary('00', '0001')
// @lc code=end

