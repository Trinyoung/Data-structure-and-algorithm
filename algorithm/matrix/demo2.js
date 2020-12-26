/*
 * @Author: Trinyoung.Lu
 * @Date: 2020-09-24 13:26:14
 * @LastEditors: Trinyoung.Lu
 * @LastEditTime: 2020-09-24 13:40:44
 * @PageTitle: XXX页面
 * @Description: XXX
 * @FilePath: \Data-structure-and-algorithm\algorithm\matrix\demo2.js
 */
function f(m, n) {
    var index = 1;
    var i = 0, j = 0, row = 0;
    var b = new Array();
    //生成一个二维数组b
    for (let k = 0; k < m; k++) {
        b[k] = new Array();
        for (let j = 0; j < n; j++) {
            b[k][j] = 0;
        }
    }
    while (index <= m * n) {
        //判断是否到达斜行最后一个元素
        if (i < 0 || (j > n - 1)) {
            row++;
            i = (row <= m - 1) ? row : m - 1;
            //更新下一斜行的第一个元素位置
            j = row - i;
        }
        b[i][j] = index;
        i--;
        j++;
        index++;
    }
    return b;
}
console.log(f(3, 4))