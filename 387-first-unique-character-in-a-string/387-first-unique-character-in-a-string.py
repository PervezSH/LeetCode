class Solution:
    def firstUniqChar(self, s: str) -> int:
        hashT = {}
        for char in s:
            if char in hashT:
                hashT[char] = hashT[char] + 1
            else:
                hashT[char] = 1
        for index in range(len(s)):
            char = s[index]
            if hashT[char] == 1:
                return index
        return -1
            