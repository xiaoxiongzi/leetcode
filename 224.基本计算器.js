/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// (1+(4+5+12)-3)+(6+8)
// 1+(3 + 22)
var calculate = function(s) {
  const arr = s.replace(/\s*/g, '').match(/\+|\-|\(|\)|\d+/g);
  
  const length = arr.length;
  const ops = [];
  const vals = [];
  for(let i = 0; i < length; i++) {
    let c = arr[i];
    if (c === '(') {
      ops.push(c)
    } else if (c === ')') {
      while(ops[ops.length - 1] !== '(') {
        vals.push(ops.pop())
      }
      ops.pop()
    } else if (c === '+' || c === '-') {
      if (ops.length !== 0 && ops[ops.length - 1] !== '(') {
        vals.push(ops.pop());
      }
      ops.push(c)
    } else {
      vals.push(parseInt(c))
    }
  }
  while(ops.length) {
    vals.push(ops.pop())
  }
  const valsLength = vals.length;
  const stack = [];
  for (let i = 0; i < valsLength; i++) {
    let c = vals[i];
    if (c === '+' || c === '-') {
      let val1 = stack.pop();
      let val2 = stack.pop();
      if (c === '+') {
        stack.push(val1 + val2)
      } else {
        stack.push(val2 - val1)
      }
    } else {
      stack.push(c)
    }
  }
  return stack[0];
}
const a = calculate('1+1')
console.log(a)

// var calculate = function(s) {
//   const arr = s.split('');
//   function helper(arr) {
//     let num = 0;
//     let symbol = '+';
//     const stack = [];

//     while(arr.length > 0) {
//       let cur = arr.shift();
//       const isNum = /[0-9]/.test(cur);

//       if (isNum) {
//         num = 10 * num + parseInt(cur);
//       }

//       if (cur === '(') {
//         num = helper(arr)
//       }

//       if ((!isNum && cur !== ' ') || arr.length === 0) {
//         let pre;
//         if (symbol === '+') {
//           stack.push(num);
//         } else if (symbol === '-') {
//           stack.push(-num);
//         } else if (symbol === '*') {
//           pre = stack.pop();
//           stack.push(pre * num);
//         } else if (symbol === '/') {
//           pre = stack.pop();
//           stack.push(parseInt(pre / num));
//         }
//         symbol = cur;
//         num = 0;
//       }
//       if (cur === ')') {
//         break;
//       }
//     }
//     let sum = 0;
//     stack.forEach(item => {
//       sum += item;
//     })
//     return sum;
//   }
//   return helper(arr)
// };
// @lc code=end

