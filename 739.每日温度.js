/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const stack = [0];
  const len = temperatures.length;
  const result = [];
  for (let i = 1; i < len; i++) {
    while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      result[stack[stack.length - 1]] = i - (stack[stack.length - 1]);
      stack.pop();
    }
    stack.push(i);
  }
  for (let i = 0; i < stack.length; i++) {
    result[stack[i]] = 0;
  }
  return result;
};
// @lc code=end

