class Solution:
    # O(n) time | O(1) space
    def isSubsequence(self, s: str, t: str) -> bool:
        subseqIndex = 0
        for letter in t:
            if subseqIndex == len(s): break
            if s[subseqIndex] == letter: subseqIndex += 1
        return subseqIndex == len(s)