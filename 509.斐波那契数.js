/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N === 0) {
    return 0;
  }
  if (N === 1) {
    return 1;
  }
  let a = 0, b = 1, temp;
  for (let i = 2; i <= N; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return temp;
};
// console.log(fib(6))
// @lc code=end

