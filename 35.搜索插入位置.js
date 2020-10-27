/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] >= target) {
      return i
    }
  }
  return len;
};
// console.log(searchInsert([1,3,5,6], 7))
// @lc code=end

