/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const len = nums.length;
  const res = [];
  let subset = [];
  function preOrder(nums, i, subset, res) {
    if (i >= len) return;
    res.push(subset.slice());
    preOrder(nums, i + 1, subset, res);
    subset.push(nums[i]);
    preOrder(nums, i + 1, subset, res);
  };
  preOrder(nums, 0, subset, res);
  return res;
};
console.log(subsets([1]))
// @lc code=end

