class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        triplets = []
        nums.sort()
        for base in range(len(nums) - 2):
            left = base + 1
            right = len(nums) - 1
            # Handle duplicates in outer loop
            if (base > 0 and nums[base] == nums[base-1]):
                continue
            while (left < right):
                total = nums[base] + nums[left] + nums[right]
                if (total == 0):
                    triplets.append([nums[base], nums[left], nums[right]])
                    # Handle duplicates in inner loop
                    # For Left pointer
                    while (left < right) and (nums[left + 1] == nums[left]):
                        left = left + 1
                    # For Right Pointer
                    while (left < right) and (nums[right - 1] == nums[right]):
                        right = right - 1
                    right = right - 1
                    left = left + 1
                elif (total > 0):
                    right = right - 1
                else:
                    left = left + 1
        return triplets