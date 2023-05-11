/*
Abeda Khanam
11 May 23
https://leetcode.com/problems/trapping-rain-water/
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let n = height.length,
    max = 0;
  for (let i = 0; i < n; i++) {
    if (height[max] < height[i]) {
      max = i;
    }
  }
  let sum = 0,
    Lmax = 0,
    Rmax = n - 1;
  for (let i = 0; i < max; i++) {
    if (height[Lmax] < height[i]) {
      Lmax = i;
    }
    sum += Math.min(height[Lmax], height[max]) - height[i];
  }
  for (let i = n - 1; i > max; i--) {
    if (height[Rmax] < height[i]) {
      Rmax = i;
    }
    sum += Math.min(height[max], height[Rmax]) - height[i];
  }
  return sum;
};
