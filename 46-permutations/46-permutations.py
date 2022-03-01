class Solution:
    # DFS
    # O(n*n!) time | O(n*n!) space
    def permute(self, nums: List[int]) -> List[List[int]]:
        # Store all possible permutations
        permutations = []
        self.permuteHelper(nums, [], permutations)
        return permutations
        
    def permuteHelper(self, nums, perm, permutations):
        if not nums:
            # This means perm is ready to append
            permutations.append(perm)
        else:
            # For each items in nums
            for i in range(len(nums)):
                # Recursively call permuteHelper, after
                # removing item from nums, and
                # adding removed item to perm
                self.permuteHelper(nums[:i] + nums[i + 1:], perm + [nums[i]], permutations)