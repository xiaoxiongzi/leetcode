/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  if(left === 1) {
    return reverseN(head, right)
  }
  head.next = reverseBetween(head.next, left - 1, right - 1 );
  return head
};

function reverseN(head, n) {
  let pre;
  function reverse(head, n) {
    if (!head) {
      return head
    }
    if (n === 1) {
      pre = head.next;
      return head;
    }
    const last = reverse(head.next, n - 1)
    head.next.next = head;
    head.next = pre;
    return last
  }
  return reverse(head, n)
}
// @lc code=end

