/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (!root) {
    return root;
  }
  const res = [];
  const stack = [];
  stack.push(root)
  while(stack.length) {
    const cur = stack.pop();
    res.push(cur.val)
    if (cur.right) {
      stack.push(cur.right)
    }
    if (cur.left) {
      stack.push(cur.left)
    }
  }
  return res;
};

const root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D',
      left: null,
      right: null
    },
    right: {
      val: 'E',
      left: null,
      right: null
    }
  },
  right: {
    val: 'C',
    left: {
      val: 'F',
      left: {
        val: 'H',
        left: null,
        right: null
      },
      right: {
        val: 'I',
        left: null,
        right: null
      }
    },
    right: {
      val: 'G',
      left: null,
      right: null
    }
  }
}
preorderTraversal(root)
// @lc code=end

