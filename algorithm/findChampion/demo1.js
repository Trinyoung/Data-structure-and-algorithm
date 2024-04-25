// 一场比赛中共有 n 支队伍，按从 0 到  n - 1 编号。

// 给你一个下标从 0 开始、大小为 n * n 的二维布尔矩阵 grid 。对于满足 0 <= i, j <= n - 1 且 i != j 的所有 i, j ：如果 grid[i][j] == 1，那么 i 队比 j 队 强 ；否则，j 队比 i 队 强 。

// 在这场比赛中，如果不存在某支强于 a 队的队伍，则认为 a 队将会是 冠军 。

// 返回这场比赛中将会成为冠军的队伍。
var findChampion = function(grid) {
    let champion = new Array(grid.length).fill(true);
    for (let i = 0; i < grid.length; i++) {
        let row = grid[i];
        for (let j = 0; j < row.length; j++) {
            if (i === j) continue;
            if (row[j] === 1) {
                champion[j] = false;
            }
        }
    }
    return champion.indexOf(true);
};