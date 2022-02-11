class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # Initialize lowest price with maximum possible value
        low = math.inf
        # Initialize maximum profit with 0
        maxProfit = 0
        for price in prices:
            # Update low
            if low > price: low = price
            # Calculate profit
            profit = price - low
            # Update maximum profit
            if profit > maxProfit: maxProfit = profit
        return maxProfit