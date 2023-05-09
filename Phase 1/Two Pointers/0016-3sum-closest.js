/*
Abeda Khanam
09 May 23
https://leetcode.com/problems/3sum-closest/
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  //define gap & min
  let gap = Number.MAX_VALUE,
    min = 0;
  let n = nums.length;
  nums.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < n; i++) {
    let L = i + 1;
    let R = n - 1;
    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R];
      if (sum == target) {
        min = sum;
        break;
      } else if (sum < target) {
        L++;
      } else {
        R--;
      }
      if (gap > Math.abs(target - sum)) {
        gap = Math.abs(target - sum);
        min = sum;
      }
    }
  }
  return min;
};
