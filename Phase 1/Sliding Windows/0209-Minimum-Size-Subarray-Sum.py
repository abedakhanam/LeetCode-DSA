#
#Abeda Khanam
#04 Jan 24
#https://leetcode.com/problems/minimum-size-subarray-sum/
#you cant use function name in python
#also have to define every variable each time
#for r itself a loop with r++ , no need to add r++
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        #min & sum
        mini = float('inf')
        sums, l, r = 0, 0, 0

        #min-sub array len
        for r in range(len(nums)):
            #add current element
            sums += nums[r]
            while(target <= sums):
                mini = min(mini, r - l + 1)
                sums -= nums[l]
                l += 1
        
        return mini if mini != float('inf') else 0