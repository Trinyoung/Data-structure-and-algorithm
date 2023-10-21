function coinChange(coins, amount) {
    // 创建一个数组来存储计算的结果
    let dp = new Array(amount + 1).fill(Infinity);
    
    // 设置初始条件
    dp[0] = 0;
  
    // 遍历所有金额
    for (let i = 1; i <= amount; i++) {
      // 遍历所有硬币
      for (let j = 0; j < coins.length; j++) {
        // 如果当前硬币的面额小于等于当前金额
        if (coins[j] <= i) {
          // 更新结果为取当前硬币和之前金额对应硬币数量+1的最小值
          dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
        }
      }
    }
    
    // 如果最后结果还是无穷大，则说明无法凑出总金额，返回-1
    return dp[amount] === Infinity ? -1 : dp[amount];
  }
  
  // 测试样例
  let coins = [1, 2, 5];
  let amount = 11;
  let result = coinChange(coins, amount);
  console.log(result);
