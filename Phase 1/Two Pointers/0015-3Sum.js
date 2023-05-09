/*
Abeda Khanam
09 May 23
https://leetcode.com/problems/3sum/
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let n = nums.length;
  nums.sort(function (a, b) {
    return a - b;
  });
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (i != 0 && nums[i] == nums[i - 1]) continue;
    let lo = i + 1,
      hi = n - 1;
    while (lo < hi) {
      let curr = nums[i] + nums[lo] + nums[hi];
      if (curr == 0) {
        arr.push([nums[i], nums[lo], nums[hi]]);
        lo++;
        hi--;
        while (lo < hi && nums[lo] == nums[lo - 1]) {
          lo++;
        }
        while (lo < hi && nums[hi] == nums[hi + 1]) {
          hi--;
        }
      } else if (curr < 0) {
        lo++;
      } else {
        hi--;
      }
    }
  }
  return arr;
};
