var minPathSum = function(grid) {
    let result = {'0-0': grid[0][0]};
    let row = grid.length - 1;
    let col = grid[0].length - 1;
    function interate(i, j) {
        if (i ===0) {
            result[`${i}-${j}`] = result[`${i}-${j-1}`] + grid[i][j];
        } else if (j === 0) {
            result[`${i}-${j}`] = result[`${i - 1}-${j}`] + grid[i][j];
        } else {
            result[`${i}-${j}`] = Math.min(result[`${i - 1}-${j}`], result[`${i}-${j-1}`]) + grid[i][j];
        }
        
        if (i < row) {
            interate(i + 1, j);
        }
        if (j < col) {
            interate(i, j + 1)
        }
    }
    if (row >= 1) {
        interate(1, 0);
    }
    if (col >= 1) {
        interate(0, 1);
    }
    return result[`${row}-${col}`];
};