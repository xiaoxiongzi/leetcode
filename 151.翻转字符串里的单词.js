/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.trim();
  const len = s.length;
  let temp = '';
  let res = '';
  for(let i = len - 1; i >= 0; i--) {
    if(s[i] !== ' ') {
      temp = temp === '' ? s[i] + ' ' : s[i] + temp;
    } else {
      if (temp !== '') {
        res += temp;
      }
      temp = '';
    }
  }
  res += temp;
  return res.trim();
};
console.log(reverseWords('is blue'))
// @lc code=end

