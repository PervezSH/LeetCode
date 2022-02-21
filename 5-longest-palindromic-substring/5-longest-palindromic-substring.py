class Solution:
    # O(n^2) time | O(n) space
    def longestPalindrome(self, s: str) -> str:
        currentLongest = [0, 1] # 0th and nth indices of the longest palindromic substring
        for i in range(1, len(s)): # iterate string
            odd = self.getPalindromic(s, i-1, i+1) # check for odd length
            even = self.getPalindromic(s, i-1, i) # check for even length
            longest = max(odd, even, key=lambda x: x[1] - x[0]) # get the longest one
            currentLongest = max(longest, currentLongest, key=lambda x: x[1] - x[0])
        return s[currentLongest[0] : currentLongest[1]]
    
    def getPalindromic(self, string, leftIndex, rightIndex):
        while leftIndex >= 0 and rightIndex < len(string):
            if string[leftIndex] != string[rightIndex]: break
            leftIndex -= 1
            rightIndex += 1
        return [leftIndex + 1, rightIndex]