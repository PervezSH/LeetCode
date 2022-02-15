/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// 2 Dimensional Dynamic Programming
// Time Complexity: O(n*m), where n is length of text1, m is length of text2
// Space Complexity: O(n*m)
var longestCommonSubsequence = function(text1, text2) {
    // Create a Matrix
    // Size: length of text1 + 1, length of text2 + 1
    const dp = [];
    for (let i = 0; i < text1.length + 1; i++){
        // Fill the matrix with 0
        dp.push(Array(text2.length + 1).fill(0));
    }
    // Iterate through
    for (let i = 0; i < text1.length; i++){
        for (let j = 0; j < text2.length; j++){
            if (text1[i] === text2[j]) dp[i+1][j+1] = dp[i][j] + 1;
            else dp[i+1][j+1] = Math.max(dp[i+1][j], dp[i][j+1]);
        }
    }
    return dp[text1.length][text2.length];
};