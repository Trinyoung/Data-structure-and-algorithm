var uniquePathsWithObstacles = function(obstacleGrid) {
    let row = obstacleGrid.length;
    let col = obstacleGrid[0].length;
    let dp = new Array(row).fill([]);
    let rowObstacle = false;
    let colObstacle = false;
    dp = dp.map((_, index) => {
        let ele = [];
        if (index === 0) {
            ele = obstacleGrid[0].map(e => {
                if (e === 1) {
                    rowObstacle = true;
                }
                return rowObstacle? 0: 1;
            });
        } else {
            ele.fill(0)
        }
        if (obstacleGrid[index][0] === 1) {
            colObstacle = true;
        }
        ele[0] = colObstacle? 0 : 1;
        return ele;
    });
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
            }
        }
    }
    return dp[row - 1][col - 1];
};
console.log(uniquePathsWithObstacles([[0, 1]]));