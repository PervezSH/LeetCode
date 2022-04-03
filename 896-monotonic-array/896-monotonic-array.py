# O(n) time | O(1) space
class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        # handle edge case
        if len(nums) <= 2:
            return True
        # determine whether array is decreasing or increasing
        dir = nums[1] - nums[0]
        startIdx = 2
        for idx in range(2, len(nums)):
            if dir == 0:
                dir = nums[idx] - nums[idx - 1]
                startIdx = idx
                continue
            break
        # check for the entire array
        for idx in range(startIdx, len(nums)):
            if dir > 0 and not nums[idx] >= nums[idx - 1]: return False
            elif dir < 0 and not nums[idx] <= nums[idx - 1]: return False
        return True