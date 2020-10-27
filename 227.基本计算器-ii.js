/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let num = 0;
  let symbol = '+';
  const length = s.length;
  const stack = [];

  for(let i = 0; i < length; i++) {
    const cur = s.charAt(i);
    const isNum = /[0-9]/.test(cur);
    // 如果是数字
    if (isNum) {
      num = 10 * num + parseInt(cur);
    }
    // 如果不是数字(而且不是空格) 或者 是最后一位
    if ((!isNum && cur !== ' ') || i === length -1) {
      let pre;
      switch(symbol) {
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          pre = stack.pop();
          stack.push(pre * num);
          break;
        case '/':
          pre = stack.pop();
          stack.push(parseInt(pre / num));
          break;
      }
      symbol = cur;
      num = 0;
    }
  }
  let sum = 0;
  
  stack.forEach(item => {
    sum += item;
  });
  return sum;
};
// @lc code=end

