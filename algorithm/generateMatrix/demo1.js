var generateMatrix = function(n) {
    let x = 0;
    let y = 0;
    let direction = 'right';
    let i = 0;
    const res = new Array(n).fill([]).map(item => new Array(n).fill(0));
    while (i < n * n) {
        i ++;
        console.log(x, y, direction, i, res, '===============>');
        res[x][y] = i;
        if (direction === 'right') {
            if (y === n - 1 || res[x][y + 1]) {
                x++;
                direction = 'down';
            } else {
                y++;
            }
            continue;
        }
        if (direction === 'down') {
            if (x === n - 1 || res[x + 1]?.[y]) {
                y--;
                direction = 'left';
            } else {
                x++;
            }
            continue;
        }
        if (direction === 'left') {
            if (y === 0 || res[x]?.[y-1]) {
                x--;
                direction = 'up'
            } else {
                y--;
            }
            continue;
        }
        if (direction === 'up') {
            if (res[x-1]?.[y]) {
                y++;
                direction = 'right';
            } else {
                x--;
            }
        }
    }
    return res;
};

console.log(generateMatrix(3));