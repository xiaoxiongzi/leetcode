/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) {
    return [];
  }
  if (numRows === 1) {
    return [[1]];
  }
  if (numRows === 2) {
    return [[1], [1, 1]]
  }
  const arr = [[1], [1, 1]]
  for (let i = 2; i < numRows; i++) {
    const last = arr[i-1];
    const len = last.length;
    const current = [];
    for (let j = 0; j < len; j++) {
      if (j === 0) {
        current.push(1);
      } else {
        current.push(last[j-1]+last[j]);
      }
    }
    current.push(1);
    arr.push(current);
  }
  return arr;
};
// console.log(generate(5))
// debugger;
// @lc code=end

