/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const valueMap = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  };
  const arr = s.split('');
  const length = arr.length;
  let total = 0;
  for(let i = 0; i < length; i++) {
    if (i === length - 1) {
      total += valueMap[`${arr[i]}`]
    } else if (valueMap[`${arr[i]}${arr[i + 1]}`]) {
      total += valueMap[`${arr[i]}${arr[i + 1]}`];
      i++;
    } else {
      total += valueMap[`${arr[i]}`]
    }
  }
  return total;
};
// @lc code=end

