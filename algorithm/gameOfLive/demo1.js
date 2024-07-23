var gameOfLife = function(board) {
    const copyBoard = board.map(item => [...item]);
    for(let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let liveNums = 0;
            for (let k = j - 1; k < j + 2; k++) {
                for (let l = i - 1; l < i + 2; l++) {
                    if (k === j && l === i) {
                        continue;
                    }
                    if (k < 0 || k >= board[i].length || l < 0 || l >= board.length) {
                        continue;
                    }
                    if (board[l][k] === 1) {
                        liveNums++;
                    }
                }
            }
            console.log(liveNums, 'liveNums ======>')
            if (board[i][j] === 1) {
                if (liveNums < 2 || liveNums > 3) {
                    copyBoard[i][j] = 0;
                }
            } else {
                if (liveNums === 3) {
                    copyBoard[i][j] = 1;
                }
            }
        }
    }
    return copyBoard;
};
const board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
console.log(gameOfLife(board))
// board(board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]])