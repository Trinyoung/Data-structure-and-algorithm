/*
 * @Author: Trinyoung.Lu
 * @Date: 2020-09-24 10:19:15
 * @LastEditors: Trinyoung.Lu
 * @LastEditTime: 2020-09-24 14:01:20
 * @PageTitle: XXX页面
 * @Description: XXX
 * @FilePath: \Data-structure-and-algorithm\algorithm\matrix\demo3.js
 */
function fillMatrix(m, n) {
    const arr = [];
    for (let i = 0; i < m; i++) {
        arr.push([]);
    }
    let init = 1;
    let row = 0;
    while (row < m + n - 1) {
        let i = row < m ? row : m - 1;
        let j = row - i;
        while (row < m && i >= 0 || row >=m && j < n) {
            arr[i][j] =init;
            init ++;
            i--;
            j++;
        }
        row++;
    }
    return arr;
}
console.log(fillMatrix(3, 4));
1 + m + 1 + 1 + (m + n) * (2 + 1 + ())