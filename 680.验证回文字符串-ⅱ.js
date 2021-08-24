/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  const length = s.length;
  let l = 0;
  let r = length - 1;
  function isPalindrome(str, st, ed) {
    while(st < ed) {
      if(str[st] === str[ed]) {
        st++;
        ed--;
      } else {
        return false;
      }
    }
    return true
  }
  while(l < r) {
    if (s[l] === s[r]) {
      l++;
      r--;
    } else {
      break;
    }
  }
  if (l < r) {
    if(isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1)) {
      return true
    } else {
      return false
    }
  } else {
    return true
  }
};
// @lc code=end

/** 思路：双指针 */