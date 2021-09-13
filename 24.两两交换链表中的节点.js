/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head) {
    return head;
  }
  let cur = head;
  while(cur && cur.next) {
    const nextVal = cur.next.val;
    cur.next.val = cur.val;
    cur.val = nextVal;
    cur = cur.next.next;
  }
  return head;
};
// @lc code=end

