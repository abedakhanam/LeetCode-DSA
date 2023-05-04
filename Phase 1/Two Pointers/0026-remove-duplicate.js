/*
Abeda Khanam
04 May 23
https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let n = nums.length;
  let L = 0,
    R = 1;
  while (R < n) {
    if (nums[L] == nums[R]) {
      R++;
    } else {
      nums[L + 1] = nums[R];
      L++;
    }
  }
  return L + 1;
};
