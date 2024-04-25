var removeKdigits = function(num, k) {
    if (num.length <= k) return "0"
    const numArr = num.split('');
    for (let i = 0; i < numArr.length - k; i++) {
        let min = numArr[i];
        let minIndex = i;
        for (let j = i + 1; j < (i + k-1 && numArr.length - k); j++) {
            if (min >= numArr[j]) {
                min = numArr[j]; // 只要是最小的
                minIndex = j;
            }
        }
        console.log(minIndex, 'minIndex==============')
        const len = minIndex - i;
        k -= len;
        numArr.splice(i, len);
    }
    console.log(numArr, '=====');
    return numArr.join('');
};
console.log(removeKdigits("10200", 1));