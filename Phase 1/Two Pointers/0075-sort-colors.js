/*
Abeda Khanam
08 May 23
https://leetcode.com/problems/sort-colors/
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let n = nums.length;
  let L = 0,
    i = 0,
    R = n - 1;
  if (n < 2) {
    return;
  }
  while (i <= R) {
    if (nums[i] == 2) {
      let temp = nums[i];
      nums[i] = nums[R];
      nums[R] = temp;
      R--;
    } else if (nums[i] == 0) {
      let temp = nums[i];
      nums[i] = nums[L];
      nums[L] = temp;
      L++;
      i++;
    } else {
      i++;
    }
  }
};
