/*
 * @Author: your name
 * @Date: 2021-01-13 10:37:21
 * @LastEditTime: 2021-01-13 13:01:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\sudu\demo1.js
 */
var solveSudoku = function (board) {
    const arrs = {};
    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        for (let j = 0; j < row.length; j++) {
            const item = row[j];
            if (!Number(item)) {
                for (let k = 0; k < row.length; k++) { // 行
                    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].splice(k, 1);

                }
            }
        }
    }
};