/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const length = nums.length;
  const map = {};
  for (let i = 0; i < length; i++) {
    if(map[target - nums[i]]!== undefined) {
      // 若有对应差值，那么答案get！
      return [map[target - nums[i]], i]
    }
    // 若没有对应差值，则记录当前值
    map[nums[i]] = i
  }
  // var length = nums.length;
  // for(var i = 0; i < length - 1; i++) {
  //   for (var j = i + 1; j < length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j]
  //     }
  //   }
  // }
};
twoSum([3, 2, 4], 6)
// @lc code=end

