/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let res = nums[0];
  let len = nums.length;
  if (len > 1) {
    for(let i = 1; i < len; i++) {
      res = res ^ nums[i]
    }
  }
  return res;
};
// 交换律：a ^ b ^ c  <=> a ^ c ^ b
// @lc code=end

