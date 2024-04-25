var getCoprimes = function(nums, edges) {
    const fatherMap = edges.reduce((res, item, index) => {
        res[item[1]] = {
            value: nums[index],
            parent: item[0] // 
        };
        return res;
    }, {});
    let res = [];
    function interate(target, father) {
        return father === undefined ? -1 : gcd(target, fatherMap[father].value) === 1 ? father : interate(target, fatherMap[father].parent)
    }
    for(let i = 0; i <= edges.length; i++) {
        res.push(interate(fatherMap[edges[i][1]].value, edges[i][0]))
    }
    return res;
};
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}
console.log(
    getCoprimes([2, 3, 3, 2], [[0,1],[1,2],[1,3]]), '=========>'
)
