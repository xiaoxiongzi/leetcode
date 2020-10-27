/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];
  const length = tokens.length;
  for(let i = 0; i < length; i++) {
    const c = tokens[i];
    if (c === '+' || c === '-' || c === '*' || c === '/') {
      const val1 = parseInt(stack.pop());
      const val2 = parseInt(stack.pop());
      switch(c) {
        case '+':
          stack.push(val2 + val1)
          break;
        case '-':
          stack.push(val2 - val1);
          break
        case '*':
          stack.push(val2 * val1);
          break;
        case '/':
          stack.push(parseInt(val2 / val1))
          break;
      }
    } else {
      stack.push(c)
    }
  }
  return stack[0];
};
// @lc code=end

