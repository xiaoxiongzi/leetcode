/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let result;
  const stack = [];
  let cur = root;
  while(cur || stack.length) {
    while(cur) {
      stack.push(cur);
      cur = cur.left;
    };
    cur = stack.pop();
    result = cur.val;
    k--;
    if (k === 0) {
      break;
    }
    cur = cur.right;
  }
  return result;
};
// @lc code=end

