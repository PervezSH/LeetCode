class Solution:
    # O(n) time | O (n) space
    def sortedSquares(self, nums: List[int]) -> List[int]:
        # declare squared array, initialized its value to 0
        squaredArray = [0 for _ in nums]
        # two pointer, left and right
        left = 0
        right = len(nums) - 1
        for index in reversed(range(len(nums))):
            leftVal = nums[left]
            rightVal = nums[right]
            if abs(leftVal) > abs(rightVal):
                # store square of leftVal, and increment left pointer
                squaredArray[index] = leftVal*leftVal
                left += 1
            else:
                # store square of rightVal, and decrement right pointer
                squaredArray[index] = rightVal*rightVal
                right -= 1
        return squaredArray