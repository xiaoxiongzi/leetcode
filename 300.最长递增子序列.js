/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const stack = [];
  const len = nums.length;
  stack.push(nums[0])
  for(let i = 1; i < len; i++) {
    while (stack.length && (nums[i] <= stack[stack.length - 1])) {
      stack.pop();
    }
    stack.push(nums[i])
  }
  return stack.length;
};
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))
// @lc code=end

