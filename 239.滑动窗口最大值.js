/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const stack = [];
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      stack.push(i);
    } else if (i - k >= stack[0]) {
      stack.shift();
    }
    if (i >= k - 1) {
      const top = nums[stack[0]];
      result.push(top > nums[i] ? top : nums[i]);
    }
    while (stack.length > 0 && nums[i] >= nums[stack[stack.length - 1]]) {
      stack.pop();
    }
    stack.push(i);
  }
  return result;
};
// @lc code=end

