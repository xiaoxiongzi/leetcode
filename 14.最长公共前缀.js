/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length) {
    let minItemIndex = 0;
    for(let i = 1; i < strs.length; i++) {
      minItemIndex = strs[i].length < strs[minItemIndex].length ? i : minItemIndex;
    }
    const minItemArr = strs[minItemIndex].split('');
    let result = '';
    for(let i = 0; i < minItemArr.length; i++) {
      if (strs.every(item => item.slice(i, i + 1) === minItemArr[i])) {
        result += minItemArr[i]
      } else {
        break;
      }
    }
    return result;
  } else {
    return ''
  }
};
// @lc code=end

