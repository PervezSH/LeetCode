impl Solution {
    // O(n) time | O(1) space
    pub fn max_profit(prices: Vec<i32>) -> i32 {
        let mut max_profit = 0;
        let mut low = i32::MAX;
        for price in prices {
            // update low
            low = i32::min(low, price);
            // update maximum profit
            max_profit = i32::max(max_profit, price - low);
        }
        max_profit
    }
}