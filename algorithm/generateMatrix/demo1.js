var generateMatrix = function(n) {
    const res = new Array(n).fill([]);
    let x = 0;
    let y = 0;
    let i = 0;
    // let res = [];
    let direction = 'right';
    console.log(res, 'res ======')
    while (i < n * n) {
        i++;
        console.log(x, y, 'x and y', direction, res[2]?.[2],);
        res[x][y] = i;
        if (direction === 'right') {
            if (y === n - 1 || res[x]?.[y + 1]) {
                direction = 'down';
                x++;
            } else {
                y++;
            }
            continue;
        }
        if (direction === 'left') {
            if (y === 0 || res[x]?.[y - 1]) {
                direction = 'up';
                x--;
            } else {
                y--;
            }
            continue;
        }
        if (direction === 'down') {
            if (x === n - 1 || res[x + 1]?.[y]) {
                direction = 'left';
                y--;
            } else {
                x++;
            }
            continue;
        }
        if (direction === 'up') {
            if (res[x - 1]?.[y]) {
                direction = 'right';
                y++;
            } else {
                x--;
            }
        }
    }
    return res;
};
console.log(generateMatrix(3));