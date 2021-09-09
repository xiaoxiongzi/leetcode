/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let p = 0;
  let q = 0;
  const len1 = nums1.length;
  const len2 = nums2.length;
  const len = len1 + len2;
  const mid = Math.floor(len / 2);
  let last;
  for (let i = 1; i < mid; i++) {
    if(nums1[p] <= nums2[q]) {
      p++;
      last = 1;
    } if (nums1[p] > nums2[q]) {
      q++
      last = 2;
    } 
  }
  if(len % 2 === 0) {
    let last, n1, n2;
    if (nums1[p] >= nums2[q]) {
      n1 = nums1[p]
    }
    // const n1 =  ? nums1[p] : nums2[q];
    // const num2 = 
    let num2;
    if (nums1[p - 1] >= nums2[q]) {
      num2 = nums1[p - 1]
    } else if (num2)
    return 
  } else {
    return nums1[p] > nums2[q] ? nums1[p] : nums2[q]
  }
  
};
console.log(findMedianSortedArrays([1, 3, 5], [2, 3, 5, 6]))
// @lc code=end

