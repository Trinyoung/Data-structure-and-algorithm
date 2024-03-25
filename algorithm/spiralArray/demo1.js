var spiralArray = function(array) {
    // row: 行, 坐标:（row, col）
    // col: 列
    // 向右就是 col 递增， 向下就是 row递增，向左就是col递减，向上就是row递减；
    let row = 0;
    let col = 0;
    let rows = array.length;
    let cols = array[0].length;
    let res = [];
    let rightEnd = cols - 1;
    let downEnd = rows - 1;
    let leftEnd = 0;
    let upEnd = 0;
    let direction = 'right';
    while (res.length < rows * cols) {
        console.log(res)
        while (direction === 'right' && col <= rightEnd) {
            res.push(array[row][col]);
            if (col !== rightEnd) {
                col ++;
            } else {
                direction = 'down';
                row ++;
                upEnd ++;
            }
        }
        while(direction === 'down' && row <= downEnd) {
            res.push(array[row][col])
            if (row !== downEnd) {
                row++;
            } else {
                direction = 'left';
                col--;
                rightEnd--;
            }
        }
        while(direction === 'left' && col >= leftEnd ) {
            res.push(array[row][col])
            if (col !== leftEnd) {
                col--;
            } else {
                direction = 'up';
                row--;
                downEnd--;
            }
        }
        while(direction === 'up' && row >= upEnd){
            res.push(array[row]?.[col])
            if (row !== upEnd) {
                row--;
            } else {
                direction = 'right';
                col++;
                leftEnd++;
            }
        }
    }
    return res;
};