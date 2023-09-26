

var minimumTotal = function(triangle) {
    const n = triangle.length;
    const dp = new Array(n).fill(0);
  
    // Initialize the DP array with the last row of the triangle
    for (let i = 0; i < n; i++) {
        dp[i] = triangle[n - 1][i];
    }
  
    // Build up the DP array from the second last row to the first
    for (let row = n - 2; row >= 0; row--) {
        for (let col = 0; col <= row; col++) {
            dp[col] = Math.min(dp[col], dp[col + 1]) + triangle[row][col];
        }
    }
  
    return dp[0];
};
// 解释上面的代码
// 1. 定义minimumTotal函数