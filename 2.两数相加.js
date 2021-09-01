/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let cur1 = l1;
  let cur2 = l2;
  let next = 0;
  const line = new ListNode();
  let cur = line;
  while (cur1 || cur2) {
    const sum = (cur1 ? cur1.val : 0) + (cur2 ? cur2.val : 0) + next;
    if (sum >= 10) {
      cur.val = sum % 10;
      next = 1;
    } else {
      cur.val = sum;
      next = 0;
    }
    if ((cur1 && cur1.next) || (cur2 && cur2.next)) {
      cur.next = new ListNode();
      cur = cur.next;
    }
    cur1 && (cur1 = cur1.next);
    cur2 && (cur2 = cur2.next);
  }
  if (next) {
    cur.next = new ListNode(next);
  }
  return line;
};
// @lc code=end

