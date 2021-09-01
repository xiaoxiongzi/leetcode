/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  const nums = [];
  let cur = head;
  while (cur) {
    nums.push(cur.val);
    cur = cur.next;
  }
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
  const root = dfs(0, nums.length - 1);
  return root;
};
// @lc code=end

