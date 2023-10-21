var numTrees = function(n) {
    if (n === 1) return 1;
    let result = 0;
    let arr = new Array(n).fill(0);
    arr = arr.map((_, i) => {
        return i + 1;
    } );
    function interate(list) {
        console.log(list);
        // if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
            const left = list.slice(0, i); // i是索引
            const right = list.slice(i + 1);
            console.log(left, right, 'left, right');
            if (left.length === 1 || right.length === 1) {
                result++;
            }
            if (left.length > 1) {
                interate(left);
            }
            if (right.length > 1) {
                interate(right);
            }
        }
    }
    
    interate(arr);
    
    return result;
};
console.log(numTrees(4));