import re

class Solution:
    def isPalindrome(self, s: str) -> bool:
        # Cleaning input string
        s = re.sub('[^a-zA-Z0-9]+', '',s).lower()
        left = 0
        right = len(s) - 1
        
        while (left < right):
            if (s[left] != s[right]): return False
            left = left + 1
            right = right - 1
        return True
        