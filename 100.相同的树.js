/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  let isSame = true;
  function traverse(p, q) {
    if (!isSame || (p === undefined && q === undefined) || (p === null && q == null) ) {
      return;
    }
    if (
      (p === undefined && q !== undefined) ||
      (p !== undefined && q === undefined) ||
      (p === null && q !== null) ||
      (p !== null && q == null) ||
      (p.val !== q.val)
    ) {
      isSame = false;
      return;
    }
    traverse(p.left, q.left);
    traverse(p.right, q.right)
  };
  traverse(p, q)
  return isSame;
};
// @lc code=end

