var numTrees = function(n) {
    let C = 1;
    for (let i = 0; i < n; ++i) {
        C = C * 2 * (2 * i + 1) / (i + 2);
    }
    return C;
};
// 这个社会只有他们的资本维持特权阶层，还有一个就是通过暴力手段来维持特权阶层。