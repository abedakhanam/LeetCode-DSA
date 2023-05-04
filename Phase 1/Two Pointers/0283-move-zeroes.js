/*
Abeda Khanam
03 May 23
https://leetcode.com/problems/move-zeroes/
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let n = nums.length;
  if (n < 2) {
    return;
  }
  let L = 0,
    R = 1;
  while (R < n) {
    if (nums[L] != 0) {
      L++;
      R++;
    } else if (nums[R] == 0) {
      R++;
    } else {
      let temp = nums[R];
      nums[R] = nums[L];
      nums[L] = temp;
    }
  }
};
