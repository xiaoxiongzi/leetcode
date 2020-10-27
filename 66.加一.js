/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const length = digits.length;
  for(let i = length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } 
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};
// @lc code=end

