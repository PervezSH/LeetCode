class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        return self.mergeSort(nums)
    
    def mergeSort(self, nums: List[int]) -> List[int]:
        # Split the array into sub-array untill its length is 1
        if (len(nums) <= 1): return nums
    
        # Get the mid point to split array into half
        mid = len(nums) // 2
        # Left sub-array
        leftArray = nums[:mid]
        # Right sub-array
        rightArray = nums[mid:]
        
        # Call recursively
        leftArray = self.mergeSort(leftArray)
        rightArray = self.mergeSort(rightArray)
        
        # Empty block to store sorted sub-array
        block = []
        # Left pointer
        l = 0
        # Right Pointer
        r = 0
        
        # Compare and push to block
        while l < len(leftArray) and r < len(rightArray):
            if leftArray[l] < rightArray[r]:
                block.append(leftArray[l])
                l = l + 1
            else:
                block.append(rightArray[r])
                r = r + 1
                
        # Push remaining
        if l < len(leftArray): block.extend(leftArray[l:])
        if r < len(rightArray): block.extend(rightArray[r:])
            
        return block