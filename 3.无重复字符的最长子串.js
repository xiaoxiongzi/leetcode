/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(s === '') {
    return 0
  }
  const len = s.length;
  let p = 0;
  let max = 1;
  let temp = [s[0]];
  for (let q = 1; q < len; q++) {
    if (!temp.includes(s[q])) {
      temp.push(s[q]);
      max = temp.length > max ? temp.length : max;
    } else {
      const index = temp.indexOf(s[q]);
      temp = temp.splice(index + 1);
      temp.push(s[q]);
      p = p + index + 1;
    }
  }
  return max;
};
// @lc code=end

