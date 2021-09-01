/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
 const root = {
  val: 5,
  left: {
    val: 4,
  },
  right: {
    val: 6,
    left: {
      val: 3,
    },
    right: {
      val: 7,
    },
  },
};
var isValidBST = function(root) {
  let valid = true;
  function validBST(root) {
    if (!valid || !root) {
      return;
    }
    if ((root.left && root.val <= root.left.val) || (root.right && root.val >= root.right.val)) {
      console.log(root)
      valid = false;
    } else {
      validBST(root.left);
      validBST(root.right);
    }[]
  }
  validBST(root);
  return valid;
};
console.log(isValidBST(root))
// @lc code=end

