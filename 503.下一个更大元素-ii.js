/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const n = nums.length;
  const stack = [];
  const res = new Array(n).fill(-1);
  for(let i = 0; i < n * 2 -1; i++) {
    while(stack.length && nums[i % n] > nums[stack[stack.length - 1]]) {
      res[stack[stack.length - 1]] = nums[i % n]
      stack.pop();
    }
    stack.push(i % n)
  }
  return res;
};
nextGreaterElements([1, 2, 1])
// @lc code=end


