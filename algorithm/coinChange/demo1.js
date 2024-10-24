/* 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

你可以认为每种硬币的数量是无限的。 */
function coinChange(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity)
    for (let i = 0; i < coins.length; i++) {
        dp[coins[i]] = 1;
    }
    for (let i = 1; i <= amount; i++) {
        if (dp[i] !== Infinity) {
            continue;
        }
        dp[i] = Math.min(...coins.map(item => {
            if (i < item) return Infinity;
            return dp[i - item] + 1;
        }))
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
}
console.log(coinChange([1, 2, 5], 11));
