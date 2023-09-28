var isValidSudoku = function(board) {
    const numMap = {};
    for(let i = 0; i < board.length; i++) {
        const row = board[i];
        for (let j = 0; j < row.length; j++) {
            if (row[j] !== '.') {
                if (!numMap[row[j]]) {
                    numMap[row[j]] = [[i, j]];
                } else {
                    for(let k = 0; k < numMap[row[j]].length; k++) {
                        const item = numMap[row[j]][k];
                        const isSameSquare = Math.ceil((i+1)/3) === Math.ceil((item[0] + 1)/3) && Math.ceil((j + 1)/3) === Math.ceil((item[1] + 1)/3); // 判断是否在同一个3*3的正方形内
                        if (item[0] === i || item[1] === j || isSameSquare) {
                            return false;
                        }
                    }
                    numMap[row[j]].push([i, j]);
                }
            }
        }
    }
    return true;
};