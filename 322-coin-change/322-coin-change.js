/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// Time Complexity: O(nk), where n = amount , k = no. of coins
// Space Complexity: O(n), where n = amount

var coinChange = function(coins, amount) {
    // Create dp array, size is amount + 1
    // index is the amount
    const dp = Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
    dp[0] = 0
    // Traverse dp array
    for (let idx = 0; idx < dp.length; idx++){
        // calculate fewest num of coins you need to make up that amount
        for (let coin of coins)
            if (coin <= idx) dp[idx] = Math.min(dp[idx], dp[idx - coin] + 1)
    }
    const minCoinCount = dp[amount]
    if (minCoinCount < Number.MAX_SAFE_INTEGER) return minCoinCount
    return -1
};