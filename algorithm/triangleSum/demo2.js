var minimumTotal = function (triangle) {
    // let results = [{ sum: triangle[0][0], oldIndex: 0 }];
    let results = { sum: triangle[0][0], oldIndex: 0 };
    for (let i = 1; i < triangle.length; i++) {
        const list = triangle[i];
        results.sum += list[results.oldIndex] < list[results.oldIndex +1]? list[results.oldIndex]: list[results.oldIndex +1]
    }
    return results.sum;
};

const triangle = [[-1],[2,3],[1,-1,-3]];

console.log(minimumTotal(triangle));