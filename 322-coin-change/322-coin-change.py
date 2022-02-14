class Solution:
    
    ## Time Complexity: O(nk), where n = amount , k = no. of coins
    ## Space Complexity: O(n), where n = amount
    
    def coinChange(self, coins: List[int], amount: int) -> int:
        # Create dp array, size is amount + 1
        # index is the amount
        dp = [math.inf] * (amount + 1)
        dp[0] = 0
        # Traverse dp array
        for idx in range(0, len(dp)):
            # calculate fewest num of coins you need to make up that amount
            for coin in coins:
                if coin <= idx:
                    dp[idx] = min(dp[idx], dp[idx - coin] + 1)
        minCoinCount = dp[amount]
        if minCoinCount < math.inf: return minCoinCount
        return -1   