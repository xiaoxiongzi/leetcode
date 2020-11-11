/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.replace(/\s+$/g, '');
  const len = s.length;
  let length = 0;
  for (let i = len - 1; i >= 0; i--) {
    const cur = s.charAt(i);
    if (cur !== ' ') {
      length += 1;
    } else {
      return length;
    }
  }
  return length;
};
// console.log(lengthOfLastWord("b   a    "))
// @lc code=end

