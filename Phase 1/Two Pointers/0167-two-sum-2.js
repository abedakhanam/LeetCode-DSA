/*
Abeda Khanam
03 May 23
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  //define pointers
  let L = 0,
    R = numbers.length - 1;
  while (L < R) {
    let sum = numbers[L] + numbers[R];
    if (sum == target) {
      return [L + 1, R + 1];
    } else if (sum < target) {
      L++;
    } else {
      R--;
    }
  }
  return [-1, -1];
};
