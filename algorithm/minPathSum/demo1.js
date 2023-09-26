function minPathSum(grid) {
    const m = grid.length; // 行数
    const n = grid[0].length; // 列数
  
    // 创建dp数组，初始化第一行和第一列
    const dp = Array.from(Array(m), () => Array(n));
    dp[0][0] = grid[0][0];
    for (let i = 1; i < m; i++) {
      dp[i][0] = dp[i-1][0] + grid[i][0];
    }
    for (let j = 1; j < n; j++) {
      dp[0][j] = dp[0][j-1] + grid[0][j];
    }
  
    // 遍历网格，更新dp数组
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
      }
    }
  
    return dp[m-1][n-1];
  }

// 要解决这个问题，可以使用动态规划的方法。我们可以创建一个与原始网格大小相同的二维数组dp，用于存储到达每个位置的最小路径和。

// 首先，我们可以初始化dp数组的第一行和第一列。对于第一行，累计从左到右的路径和。对于第一列，累计从上到下的路径和。

// 然后，我们可以从左上角开始遍历网格的每个元素。对于每个位置grid[i][j]，我们可以选择从上方的位置dp[i-1][j]到达，或者从左边的位置dp[i][j-1]到达。我们选择路径和较小的一条，并将其与当前位置的值相加，更新dp[i][j]。

// 最后，当遍历完成后，dp[m-1][n-1]中存放的就是从左上角到右下角的最小路径和。

// 下面是使用JavaScript实现的代码示例：

```javascript
function minPathSum(grid) {
  const m = grid.length; // 行数
  const n = grid[0].length; // 列数

  // 创建dp数组，初始化第一行和第一列
  const dp = Array.from(Array(m), () => Array(n));
  dp[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i-1][0] + grid[i][0];
  }
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j-1] + grid[0][j];
  }

  // 遍历网格，更新dp数组
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
    }
  }

  return dp[m-1][n-1];
}

// 示例
const grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
];
console.log(minPathSum(grid)); // 输出: 7
```

在上述示例中，我们使用了一个二维数组dp来存储最小路径和。我们从左上角开始，逐步计算每个位置的最小路径和，直到到达右下角。最后，我们返回dp[m-1][n-1]即可得到最小路径和。