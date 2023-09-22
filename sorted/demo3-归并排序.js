function sortArr(arr) {
    function split(arr) {
        if (arr.length === 1) return arr;
        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        return merge(split(left), split(right));
    }
    function merge(left, right) {
        let res = [];
        while(left.length && right.length) {
            res.push(left[0] < right[0] ? left.shift() : right.shift());
        }
        return res.concat(left, right);
    }
    return split(arr);
}

console.log(sortArr([3, 4, 2, 1,1,3, 6, 5]));