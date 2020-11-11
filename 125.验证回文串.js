/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const word = s.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase();
  const reverse = word.split('').reverse().join('');
  return word === reverse;
};
// isPalindrome(' ');
// @lc code=end

