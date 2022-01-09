var fib = function (n) {
    if (n <= 1) return n;
    const cont = 100000007;
    let [prev, cur] = [0, 1];
    for (let i = 0; i < n; i++) {
        [prev, cur] = [cur, (prev + cur) % cont];
    }
    return cur;
};
console.time('开始')
console.log(fib(44));
console.timeEnd('开始');