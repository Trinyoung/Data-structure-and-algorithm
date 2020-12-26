/*
 * @Author: Trinyoung.Lu
 * @Date: 2020-09-24 10:19:15
 * @LastEditors: Trinyoung.Lu
 * @LastEditTime: 2020-09-24 13:49:45
 * @PageTitle: XXX页面
 * @Description: XXX
 * @FilePath: \Data-structure-and-algorithm\algorithm\matrix\demo1.js
 */
function fillMatrix(m, n) {
    const arr = [];
    for (let i = 0; i < m; i++) {
        arr.push([]);
    }
    let init = 1;
    let row = 0;
    while (row < m + n - 1) {
        if (row < m) {
            let i = row;
            let j = row - i;
            while (i >= 0) {
                arr[i][j] = init;
                init++;
                i--;
                j++;
            }
        } else {
            let i = m -1;
            let j = row - i;
            while (j < n) {
                arr[i][j] = init;
                init++;
                i--;
                j++;
            }
        }
        row ++;
    }
    return arr;
}
console.log(fillMatrix(3, 4));