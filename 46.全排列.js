/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const len = nums.length;
  const cur = [];
  const res = [];
  const visited = {};
  function dfs(nth) {
    if (nth === len) {
      res.push(cur.slice());
      return
    }
    for(let i = 0; i < len; i++) {
      if(!visited[i]) {
        visited[i] = 1;
        cur.push(nums[i]);
        dfs(nth + 1);
        cur.pop();
        visited[i] = 0;
      }
    }
  }
  dfs(0);
  return res;
};
// @lc code=end

