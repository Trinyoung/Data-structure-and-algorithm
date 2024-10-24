var getGoodIndices = function(variables, target) {
    let res = [];
    const arr = [[1], [2, 4, 8, 6], [3, 9, 7, 1], [4, 6], [5], [6], [7, 9, 3, 1], [8, 4, 2, 6], [9, 1]]
    for (let i = 0; i < variables.length; i++) {
        const [a, b, c, m] = variables[i];

        const aArr = arr[a%10 - 1]; // [2, 4, 8, 6]
        const temp = aArr[(b % aArr.length) - 1]?? aArr[0]; // a ** b % 10;
        const tempArr = arr[temp% 10 -1];
        const tempResult = tempArr[(c % tempArr.length) - 1]?? tempArr[0];
        if (tempResult % m === target) res.push(i)
    }
    return res;
};
console.log(getGoodIndices([[4,7,6,7],[7,6,6,4],[6,8,2,3],[8,3,5,8]], 4))
