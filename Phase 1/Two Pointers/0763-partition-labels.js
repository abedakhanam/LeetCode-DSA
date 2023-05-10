/*
Abeda Khanam
10 May 23
https://leetcode.com/problems/partition-labels/
 */

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let n = s.length;
  let maxindex = [];
  for (let i = 0; i < n; i++) {
    let temp = s[i];
    maxindex[temp] = i;
  }
  let L = 0,
    R = 0,
    index = 0;
  let result = [];
  while (index < n) {
    let temp = s[index];
    R = Math.max(R, maxindex[temp]);
    if (R == index) {
      result.push(R - L + 1);
      R++;
      L = R;
    }
    index++;
  }
  return result;
};
