class Solution:
    # 2 Dimensional Dynamic Programming
    # Time Complexity: O(n*m), where n is length of text1, m is length of text2
    # Space Complexity: O(n*m)
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        # Create a Matrix
        # Size: length of text1 + 1, length of text2 + 1
        dp = []
        for i in range (0, len(text1) + 1):
            # Fill the matrix with 0
            dp.append([0]*(len(text2) + 1))
        # Iterate
        for i in range (0, len(text1)):
            for j in range (0, len(text2)):
                if text1[i] == text2[j]: dp[i+1][j+1] = dp[i][j] + 1
                else: dp[i+1][j+1] = max(dp[i+1][j], dp[i][j+1])
        return dp[len(text1)][len(text2)]