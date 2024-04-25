var orangesRotting = function(grid) {
    const gridMap = {};
    let total = 0;
    function interate(i, j, length) {
        if (grid[i][j] === 1 && (gridMap[`${i}-${j}`] > length || !gridMap[`${i}-${j}`])) {
            length++;
            gridMap[`${i}-${j}`] = Math.min(length, (gridMap[`${i}-${j}`]|| Infinity));
            if (i < grid.length - 1) interate(i + 1, j, length);
            if (i > 0) interate(i - 1, j, length);
            if (j < grid[i].length - 1) interate(i, j + 1, length);
            if (j > 0) interate(j, j - 1, length);
        }
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 2) {
                // gridMap[`${i}-${j}`] = 0;
                
                if (i > 0) {
                    interate(i - 1, j, 0);
                }
                if (i < grid.length-1) {
                    interate(i + 1, j, 0);
                }
                if (j > 0) {
                    interate(i, j - 1, 0);
                }
                if (j < grid[i].length - 1) {
                    interate(i, j + 1, 0);
                }
            }
            if (grid[i][j] === 1) {
                total++;
            }
        }
    }
    console.log(gridMap, '------->', total)
    // const rotingNums = Object.values(gridMap).length;
    const arr = Object.values(gridMap) || [];
    // console.log(rotingNums)
    return arr.length < total ? -1 : arr.length > 0? Math.max(...arr): 0;
};
let grid = [[2,0,1,1,1,1,1,1,1,1],[1,0,1,0,0,0,0,0,0,1],[1,0,1,0,1,1,1,1,0,1],[1,0,1,0,1,0,0,1,0,1],[1,0,1,0,1,0,0,1,0,1],[1,0,1,0,1,1,0,1,0,1],[1,0,1,0,0,0,0,1,0,1],[1,0,1,1,1,1,1,1,0,1],[1,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1]]
console.log(orangesRotting(grid))