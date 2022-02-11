/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // Initialize lowest price with maximum possible value
    let low = Number.MAX_SAFE_INTEGER
    // Initialize maximum profit with 0
    let maxProfit = 0
    for (let price of prices){
        // Update low
        if (low > price) low = price
        // Calculate profit
        const profit = price - low
        // Update maximum profit
        if (profit > maxProfit) maxProfit = profit
    }
    return maxProfit
};