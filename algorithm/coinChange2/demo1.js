var change = function(amount, coins) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (const coin of coins) {
        for(let i = coin; i <= amount; i++) {
            dp[i] += dp[i-coin];
        }
    }
    return dp[amount]
};
 change(5, [1, 2, 5]);
//  解释下上面的算法：
// 1. 
//  2: 1 + 1, 2
//  3: 2 + 1, 1 + 1 + 1
//  4: 2 + 2, 1 + 1 + 1 + 1, 1 + 1 + 2
//  5: 2 + 2 + 1, 1 + 1 + 1 + 1 + 1, 1 + 1 + 1 + 2, 5