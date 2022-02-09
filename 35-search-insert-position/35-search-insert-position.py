class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        lo = 0
        hi = len(nums) - 1
        while (lo <= hi):
            mid = (lo + hi)//2
            mid_val = nums[mid]
            if(target == mid_val): return mid
            elif (target < mid_val) : hi = mid - 1
            else: lo = mid + 1
        return lo
            