/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  while(s.includes('()') || s.includes('{}') || s.includes('[]')) {
    s = s.replace('()', '');
    s = s.replace('{}', '');
    s = s.replace('[]', '');
  }
  return s === ''
};
// @lc code=end

