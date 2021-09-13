/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if(n === 0) {
    return []
  };
  function build(lo, hi) {
    let res = [];
    if (lo > hi) {
      res.push(null);
      return res;
    }
    for(let i = lo; i <= hi; i++) {
      const leftTreeList = build(lo, i - 1);
      const rightTreeList = build(i + 1, hi);
      for(let x = 0; x < leftTreeList.length; x++) {
        for(let y = 0; y < rightTreeList.length; y++) {
          const node = new TreeNode(i);
          node.left = leftTreeList[x];
          node.right = rightTreeList[y];
          res.push(node)
        }
      }
    }
    return res;
  }
  return build(1, n)
};

// @lc code=end

