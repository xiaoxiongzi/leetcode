/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = [];
  const arr = nums.sort((a, b) => a - b);
  const l = arr.length;
  for(i = 0; i < l - 2; i++) {
    let cur = arr[i];
    if (i > 0 && cur === arr[i - 1]) {
      continue
    }
    let s = i + 1; 
    let e = l - 1;
    while(s < e) {
      const sum = cur + arr[s] + arr[e];
      if(sum === 0) {
        result.push([cur, arr[s], arr[e]]);
        s++;
        e--;
        // 若左指针元素重复，跳过
        while(s < e && arr[s] === arr[s - 1]) {
          s++
        }
        // 若右指针元素重复，跳过
        while(s < e && arr[e] === arr[e + 1]) {
          e--
        }
        continue
      } else if (sum > 0) {
        e--;
        while(s < e && arr[e] === arr[e + 1]) {
          e--;
        }
        continue
      } else if (sum < 0) {
        s++;
        while(s < e && arr[s] === arr[s - 1]) {
          s++;
        }
      }
    }
  }
  return result;
};
console.log(threeSum([0, 0, 0, 0]))
// @lc code=end

/** 思路：先排序，再使用双指针 */