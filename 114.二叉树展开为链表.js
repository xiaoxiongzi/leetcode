/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3
    },
    right: {
      val: 4
    }
  },
  right: {
    val: 5,
    right: {
      val: 6
    }
  }
}
var flatten = function(root) {
  if(!root) {
    return root
  };
  const line = new TreeNode();
  let cur = line;
  const stack = [];
  stack.push(root);
  while(stack.length) {
    const node = stack.pop();
    cur.val = node.val;
    node.right && stack.push(node.right)
    node.left && stack.push(node.left);
    if(stack.length) {
      cur.right = new TreeNode();
      cur = cur.right;
    }
  }
  return line;
};
flatten(root)
// @lc code=end

