/*
Abeda Khanam
04 May 23
https://leetcode.com/problems/squares-of-a-sorted-array/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let n = nums.length;
  let L = 0,
    R = n - 1,
    i = n - 1;
  let output = [];
  while (i >= 0) {
    let lnum = nums[L] * nums[L];
    let rnum = nums[R] * nums[R];
    if (lnum < rnum) {
      output[i--] = rnum;
      R--;
    } else {
      output[i--] = lnum;
      L++;
    }
  }
  return output;
};
