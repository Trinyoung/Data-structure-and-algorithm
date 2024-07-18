var maxIncreaseKeepingSkyline = function(grid) {
    const rowsNum = grid.length;
    const columnNum = grid[0].length;
    const columnMax = new Array(columnNum).fill(0);
    const rowMax = new Array(rowsNum).fill(0);
    for (let i = 0; i < columnNum; i++) {
        for (let j = 0; j < rowsNum; j++) {
            columnMax[i] = Math.max(grid[j][i], columnMax[i]);
        }
    }
    console.log('columnMax:', columnMax)
    for (let i = 0; i < rowsNum; i++) {
        for (let j = 0; j < columnNum; j++) {
            rowMax[i] = Math.max(grid[i][j], rowMax[i]);
        }
    }
    console.log('rowMax:', rowMax)
    for (let i = 0; i < rowsNum; i++) {
        for (let j = 0; j < columnNum; j++) {
            grid[i][j] = Math.min(columnMax[j], rowMax[i])
        }
    }
    return grid
}
console.log(maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]))