var minimumTotal = function (triangle) {
    let results = [{ sum: triangle[0][0], oldIndex: 0 }];
    for (let i = 1; i < triangle.length; i++) {
        const list = triangle[i];
        const newItems = [];
        for (let j = 0; j < results.length; j++) {
            const newItem = {
                sum: results[j].sum + list[results[j].oldIndex + 1],
                oldIndex: results[j].oldIndex + 1
            };
            newItems.push(newItem);
            results[j].sum += list[results[j].oldIndex];
        }
        results = results.concat(newItems);
    }
    let min;
    for (let val of results) {
        if (min === undefined) {
            min = val.sum;
        } else if (val.sum < min) {
            min = val.sum;
        }
    }
    return min;
};

const triangle = [[-1],[2,3],[1,-1,-1]];
console.log(minimumTotal(triangle));