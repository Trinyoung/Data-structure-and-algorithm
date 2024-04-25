var spiralOrder = function(matrix) {
    const res = [];
    const rowNum = matrix.length;
    const colsNum = matrix[0].length;
    let rows = matrix.length;
    let cols = matrix[0].length;
    let direction = 0; // 0 : 偶数为水平方向， 1: 奇数为垂直方向；
    let step = 1;
    let start = 0;
    let end = matrix.length - 1;
    let i = 0; // 移动坐标；
    let j = 0; // 固定坐标；
    while (i <= end && i >= start) {
        if (direction % 2 === 0) {
            res.push(matrix[j][i]);
        } else {
            res.push(matrix[i][j]);
        }
        // if (i === end && Math.floor(direction/2)%2 === 0) {
        //     direction ++;
        // }
        // if (i === start && Mat) {
        //     direction ++;
        // }
       
        if (Math.floor(direction/2) % 2 === 0 && i === end) { // 前半个周期结束；
            start +=1;
            direction ++;
            console.log('前半个周期');
            [i, j] = [j, i]
        }
        if (Math.floor(direction/2) %2 === 1 && i === start) { // 后半个周期结束；
            // step = 1;
            end -= 1;
            direction ++;
            [i, j] = [j, i]
            console.log('后半个周期');
        }
        console.log(i, direction, start, end, step, 'i=======>');
        i += step;
    }
    return res;
};
matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(spiralOrder(matrix), '++++++++====>');