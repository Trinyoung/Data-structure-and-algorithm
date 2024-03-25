function coinChange(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for(let i = 1; i <= amount; i++) {
        // 遍历所有的硬币
        for(let j = 0; j < coins.length; j++) {
            // 更新结果为取当前硬币和之前金额对应硬币数量+1的最小值；
            if (coins[j] <= i) { // 2
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    // 如果最后结果还是无穷大，则说明无法凑出总金额，返回-1
    console.log(dp, 'dp======>');
    return dp[amount] === Infinity ? -1 : dp[amount];
}
console.log(coinChange([1, 2, 5], 11));