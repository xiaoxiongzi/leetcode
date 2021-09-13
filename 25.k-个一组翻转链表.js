/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let a, b;
  a = b = head;
  for(let i = 0; i < k; i++) {
    if (!b) {
      return head;
    }
    b = b.next;
  }
  const newHead = reverse(a, b);
  a.next = reverseKGroup(b, k);
  return newHead;
};

function reverse(a, b) {
  let pre = null;
  let cur = a;
  let next;
  while(cur !== b) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}
const head = {
  val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: {  val: 5 }}}}
}
console.log(reverseKGroup(head, 3))
// @lc code=end

