/* 给你一个下标从 0 开始的二维数组 variables ，其中 variables[i] = [ai, bi, ci, mi]，以及一个整数 target 。

如果满足以下公式，则下标 i 是 好下标：

0 <= i < variables.length
((aibi % 10)ci) % mi == target
返回一个由 好下标 组成的数组，顺序不限 。

 

示例 1：

输入：variables = [[2,3,3,10],[3,3,3,1],[6,1,1,4]], target = 2
输出：[0,2]
解释：对于 variables 数组中的每个下标 i ：
1) 对于下标 0 ，variables[0] = [2,3,3,10] ，(23 % 10)3 % 10 = 2 。
2) 对于下标 1 ，variables[1] = [3,3,3,1] ，(33 % 10)3 % 1 = 0 。
3) 对于下标 2 ，variables[2] = [6,1,1,4] ，(61 % 10)1 % 4 = 2 。
因此，返回 [0,2] 作为答案。 */
var getGoodIndices = function(variables, target) {
    let res = [];
    const arr = [[1], [2, 4, 8, 6], [3, 9, 7, 1], [4, 6], [5], [6], [7, 9], [8, 4, 2, 6], [9, 1]]
    for (let i = 0; i < variables.length; i++) {
        const [a, b, c, m] = variables[i]; // [2, 3, 3, 10]
        const baseA = arr[a % 10 - 1]; // baseA: [2, 4, 8, 6]
        const tempTail = baseA[b % baseA.length - 1]; // 8
        const baseTemp = arr[tempTail - 1]; // [8, 4, 2, 6]
        // ((ai ** bi % 10)**ci) % mi == target
        console.log(baseTemp, 'baseTemp: =======>')
        const resultTail = baseTemp[c % baseTemp.length - 1]; // 2
        console.log(resultTail, 'resultTail: =======>')
        if (resultTail % m === target) res.push(i)
    }
    return res;
};
console.log(getGoodIndices([[2,3,3,10],[3,3,3,1],[6,1,1,4]], 2));