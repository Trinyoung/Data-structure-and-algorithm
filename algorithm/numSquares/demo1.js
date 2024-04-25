function numSquares(n) {
    const dp = new Array(n + 1).fill(Infinity);
    // dp[0] = 0;
    dp[1] = 1;
    for (let i = 1; i  <= n; i++) { 
        for (let j = 1; j * j <= i; j++) {
            if (j * j ===i) {
                dp[i] = 1;
            } else {
                dp[i] = Math.min(dp[i], dp[j] + dp[i-j]);
            }
            
        }
    }
    // console.log(dp);
    console.log(dp[n]);
    return dp[n];
}
numSquares(12);
numSquares(13);
numSquares(14);
numSquares(15); // 2
numSquares(16);