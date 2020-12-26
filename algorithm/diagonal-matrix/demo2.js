// 对角填充矩阵；实现一个矩阵
//规律； 设每次确定的位置为（i,j）每一次斜行的行号为row（从0开始），则有
//  1.i+j=row；
//  2.每一斜行最后一个元素满足:i==0(row<n-1)或者j==n-1(row>n-1)
//  3.每一斜行第一个元素满足:i==row(row<m-1)或者i=m-1(row>m-1)
//  4。斜行中，i依次减1，j依次加1
// function f() {
//     var arr=[1,2,3,4,5,6,7,8,9,10,11,12];
//     var index = 0;
//     var i = 0, j = 0,row = 0;
//     var m = 3, n= 4;
//     var b = new Array();
// //生成一个二维数组b
//     for (let k = 0; k < m; k++) {
//         b[k] = new Array();
//         for (let j = 0; j < n; j++) {
//             b[k][j] = 0;
//         }
//     }
//     while (index < arr.length) {
//         //判断是否到达斜行最后一个元素
//         if (i < 0 || (j >n-1)) {
//             row++;
//             i = (row <= m - 1) ? row : m - 1;
//             //更新下一斜行的第一个元素位置
//             j = row - I;
//         }
//         b[i][j] = arr[index];
//         i--;
//         j++;
//         index++;
//     }
//     return  b;}
// console.log(f()); // [ [ 1, 3, 6, 9 ], [ 2, 5, 8, 11 ], [ 4, 7, 10, 12 ] ]
// 填充一个m 行， n列的对称矩阵；
function fillMatrix (m, n) {
    const matrix = [];
    let i = 0;
    let j = 0;
    for () {}
}

1 3
2 4