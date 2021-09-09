/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) {
    return [1]
  }
  if (rowIndex === 1) {
    return [1, 1]
  }
  let lastRow = getRow(rowIndex - 1);
  const result = [];
  for(let i = 0; i <= lastRow.length; i++) {
    if(i === 0 || i === lastRow.length) {
      result.push(1)
    } else {
      result.push(lastRow[i] + lastRow[i - 1])
    }
  }
  return result;
};
// @lc code=end

