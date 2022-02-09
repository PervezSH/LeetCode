class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        diff_dict = {}
        count = 0
        for num in nums:
            diff_val = target - num
            if num in diff_dict:
                return [diff_dict.get(num), count]
            else:
                diff_dict[diff_val] = count
            count = count + 1
        return []