/*
Abeda Khanam
04 Jan 24
https://leetcode.com/problems/minimum-size-subarray-sum/
 */
/**
 * }
 */
//0209-minimum-size-subarray-sum
class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int L=0,R=0;
        int min = Integer.MAX_VALUE;
        int sum=0, n=nums.length;
		//min sub array len
        while(R<n){
			//add current element
            sum += nums[R];
			//contract window
            while(target<=sum){
                min=Math.min(min, R-L+1);
                sum -= nums[L];
                L++;
            }
            R++;
        }
        return min== Integer.MAX_VALUE ? 0 : min;
    }
}