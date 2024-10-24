var solve = function(board) {
    if (board.length === 0) return;

    const m = board.length;
    const n = board[0].length;
    
    // 辅助函数，用于DFS标记
    const dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== 'O') {
            return;
        }
        board[i][j] = '#'; // 临时标记为 #
        dfs(i - 1, j); // 上
        dfs(i + 1, j); // 下
        dfs(i, j - 1); // 左
        dfs(i, j + 1); // 右
    };
    
    // 从边界上的 'O' 开始DFS
    for (let i = 0; i < m; i++) {
        if (board[i][0] === 'O') dfs(i, 0); // 左边界
        if (board[i][n - 1] === 'O') dfs(i, n - 1); // 右边界
    }
    for (let j = 0; j < n; j++) {
        if (board[0][j] === 'O') dfs(0, j); // 上边界
        if (board[m - 1][j] === 'O') dfs(m - 1, j); // 下边界
    }

    // 遍历整个矩阵，处理标记和转换
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X'; // 转换被围绕的 'O'
            } else if (board[i][j] === '#') {
                board[i][j] = 'O'; // 还原标记的 'O'
            }
        }
    }

    return board;
};