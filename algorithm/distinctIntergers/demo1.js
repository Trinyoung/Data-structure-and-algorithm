var distinctIntegers = function(n) {
    let res = 1;
    let obj = {};
    function interate(x) {
        for (let i = 2; i < x; i++) {
            if ((x % i) === 1 && !obj[i]) {
                res ++;
                obj[i] = true;
                interate(i)
            }
        }
    }
    interate(n)
    return res;
};
console.log(distinctIntegers(5))