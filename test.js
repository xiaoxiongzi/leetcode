// function reverse(head) {
//   if (!head || !head.next) {
//     return head
//   }
//   const last = reverse(head.next);
//   head.next.next = head;
//   head.next = null;
//   return last;
// }

// function reverse(head) {
//   let pre = null;
//   let cur = head;
//   let next;
//   while(cur) {
//     next = cur.next;
//     cur.next = pre;
//     pre = cur;
//     cur = next;
//   }
//   return pre;
// }

// function reverseN(head, k) {
//   let pre = null;
//   let cur = head;
//   let next;
//   let start;
//   while(k--) {
//     next = cur.next;
//     cur.next = pre;
//     if (pre === null) {
//       start = cur;
//     }
//     pre = cur;
//     cur = next;
//   }
//   start.next = next;
//   return pre;
// }

// function reverseN(head, n) {
//   let next
//   function reverse(head, n) {
//     if (n === 1) {
//       next = head.next;
//       return head; 
//     }
//     const last = reverse(head.next, n - 1);
//     head.next.next = head;
//     head.next = next;
//     return last;
//   }
//   return reverse(head, n)
// }

function reverse(a, b) {
  let pre = null;
  let cur = a;
  let next = a;
  while(cur !== b) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}

function reverseKGroup(head, k) {
  if (!head) {
    return
  }
  let a, b;
  a = b = head;
  for(let i = 0; i < k; i++) {
    if (!b) {
      return head;
    }
    b = b.next;
  }
  let newHead = reverse(a, b);
  a.next = reverseKGroup(b, k);
  return newHead;
}

let head = {
  val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5 } } }}
}
console.log(reverseKGroup(head, 2))