class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        pairs = {
            '(' : ')',
            '{' : '}',
            '[' : ']'
        }
        
        for char in s:
            if char in pairs.keys():
                stack.append(char)
            else:
                if (len(stack) == 0): return False
                last = stack.pop()
                if (pairs[last] != char): return False
        if (len(stack) != 0): return False
        else: return True