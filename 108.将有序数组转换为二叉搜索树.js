/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  function dfs(low, high) {
    if (low > high) {
      return null;
    }
    const midIndex = Math.floor(low + (high - low) / 2);
    const root = new TreeNode(nums[midIndex]);

    root.left = dfs(low, midIndex - 1);
    root.right = dfs(midIndex + 1, high);
    return root;
  }
  return dfs(0, nums.length - 1);
};
// @lc code=end

