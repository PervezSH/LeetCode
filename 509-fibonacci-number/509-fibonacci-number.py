class Solution:
    # O(n) time | O(1) Space
    def fib(self, n: int) -> int:
        if n <= 1:
            return n
        f0 = 0
        f1 = 1
        sum = 1
        for i in range(2, n):
            temp = f1
            f1 += f0
            f0 = temp
            sum = f1 + f0
        return sum