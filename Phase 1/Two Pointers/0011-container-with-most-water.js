/*
Abeda Khanam
08 May 23
https://leetcode.com/problems/container-with-most-water/
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let n = height.length;
  let L = 0,
    R = n - 1;
  let area = 0;
  let x, y;
  while (L < R) {
    x = Math.abs(R - L);
    if (height[L] > height[R]) {
      y = height[R];
      R--;
    } else {
      y = height[L];
      L++;
    }
    if (area < x * y) {
      area = x * y;
    }
  }
  return area;
};
