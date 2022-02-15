class Solution:
    # Time Complexity: O(n*2^n)
    # Space Complexity O(2^n)
    def subsets(self, nums: List[int]) -> List[List[int]]:
        queue = [[]]
        # Iterate through nums
        for num in nums:
            # Make a copy of queue and iterate through
            for curr in [*queue]:
                # Append modified set into the queue
                queue.append([*curr, num])
        return queue