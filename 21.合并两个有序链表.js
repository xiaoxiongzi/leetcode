/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }

var mergeTwoLists = function(l1, l2) {
  const head = new ListNode();
  let cur = head;
  while(l1 && l2) {
    if(l2.val >= l1.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next
    }
    cur = cur.next;
  }
  cur.next = l1 ? l1 : (l2 ? l2 : null);
  return head.next
};
// @lc code=end

