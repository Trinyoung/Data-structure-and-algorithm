var uniquePaths = function(m, n) {
    let dp = new Array(m).fill([]);
    dp = dp.map((_, index) => {
        const ele = new Array(n)
        if (index === 0) {
            ele.fill(1);
        } else {
            ele.fill(0)
        }
        ele[0] = 1;
        return ele;
    });
    console.log(dp, 'dp');
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j -1]
        }
    }
    console.log(dp)
    return dp[m -1][n-1];
};
console.log(uniquePaths(3, 7));