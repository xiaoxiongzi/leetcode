/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let k = m + n - 1;
  let x = m - 1;
  let y = n - 1;
  while(x >= 0 && y >= 0) {
    if(nums2[y] >= nums1[x]) {
      nums1[k] = nums2[y];
      y--;
    } else {
      nums1[k] = nums1[x];
      x--
    }
    k--;
  }
  while(y >= 0) {
    nums1[k] = nums2[y];
    k--;
    y--;
  }
};


// @lc code=end

/** 思路：双指针，把nums2 放到 nums1 最后面 */