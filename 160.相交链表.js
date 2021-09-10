/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let cur1 = headA;
  let cur2 = headB;
  let c1 = false;
  let c2 = false;
  while(cur1 || cur2) {
    if(cur1 === cur2) {
      return cur1;
    }
    if (cur1.next) {
      cur1 = cur1.next;
    } else if (!c1) {
      cur1 = headB;
      c1 = true;
    } else {
      return null;
    }
    if (cur2.next) {
      cur2 = cur2.next;
    } else if (!c2) {
      cur2 = headA;
      c2 = true;
    } else {
      return null;
    }
  }
  return null;
};
const headA = { val: 2, next: { val: 6, next: { val: 4 }}};
const headB = { val: 1, next: { val: 4 }}
console.log(getIntersectionNode(headA, headB))
// @lc code=end

