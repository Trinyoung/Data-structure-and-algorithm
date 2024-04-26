var minOperationsQueries = function(n, edges, queries) {
    let map = {};
    for (let i = 0; i < edges.length; i++) {
        if (map[edges[i][0]]) {
            map[edges[i][0]][edges[i][1]] = edges[i][2];
        } else {
            map[edges[i][0]] = {
                [edges[i][1]]: edges[i][2]
            }
        }
        if (map[edges[i][1]]) {
            map[edges[i][1]][edges[i][0]] = edges[i][2];
        } else {
            map[edges[i][1]] = {
                [edges[i][0]]: edges[i][2]
            }
        }
    }
    console.log(map, 'map');
    function interate (item, dis, compare, res, finishedMap) {
        if (Number(item) === Number(compare)) {
            console.log(dis, 'dis');
            res.push(...dis)
            return;
        }
        for (let key in map[item]) {
            if (!finishedMap[key]) {
                interate(key, [...dis, map[item][key]], compare, res, {...finishedMap, [key]: true})
            }
        }
    }
    let res = [];
    for (let i = 0; i < queries.length; i++) {
        let item = queries[i][0]; // 
        let arr = []
        interate(item, [], queries[i][1], arr, {[item]: true});
        // console.log(arr, 'arr _____');
        let arrMap = {};
        for (let i = 0; i < arr.length; i++) {
            if (arrMap[arr[i]]) {
                arrMap[arr[i]] ++;
            } else {
                arrMap[arr[i]] = 1;
            }
        }
        res.push(arr.length - Math.max(...Object.values(arrMap)))
    }
    return res;
};
console.log(minOperationsQueries(8, [[1,2,6],[1,3,4],[2,4,6],[2,5,3],[3,6,6],[3,0,8],[7,0,2]], [[0,4]]))