/*
Abeda Khanam
04 May 23
https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let n = nums.length;
  if (n < 3) return n;
  let L = 0,
    R = 1,
    C = 0;
  while (R < n) {
    if (nums[L] == nums[R] && C == 0) {
      nums[++L] = nums[R];
      C++;
    } else if (nums[L] != nums[R]) {
      L++;
      C = 0;
      nums[L] = nums[R];
    }
    R++;
  }
  return L + 1;
};
