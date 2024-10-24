
/* 给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。

请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。

假设每一种面额的硬币有无限个。 

题目数据保证结果符合 32 位带符号整数。 */
var change = function(amount, coins) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 0;
    for (let j = 0; j < coins.length; j++) {
        dp[coins[j]] = 1;
    }
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            dp[i] += dp[i - coins[j]]
        }
    }
    return dp[amount]
}