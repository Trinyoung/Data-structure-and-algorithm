var removeKdigits = function(num, k) {
    if (num.length <= k) return "0"
    const numArr = num.split('');
    for (let i = 0; i < numArr.length - k; i++) {
        let min = numArr[i];
        let minIndex = i;
        for (let j = i + 1; j < (i + k - 1 && numArr.length - k); j++) {
            if (min >= numArr[j]) {
                min = numArr[j]; // 只要是最小的
                minIndex = j;
            }
            // if (min >= numArr[j]) {
            //     if (i !== 0) { // 原有的的逻辑就是判断它补位的值不能大于它，也就是说比它大的都可以去掉；
            //         min = numArr[j];
            //         minIndex = j;
            //     } else {
            //         // if (j === i + 1 && numArr[j] === '0') {
            //         //     // 判断为0的情况是什么对不对，如果前面都是0那么会是怎么样的？，
            //         // }
            //         // if (numArr[j] !== '0') {
            //         //     min = numArr[j]
            //         //     minIndex = j;
            //         // }
            //     }
            // }
        }
        const len = minIndex - i;
        k -= len;
        console.log(i, len, 'dddddd');
        numArr.splice(i, len);
    }
    console.log(numArr, '=====');
    return numArr.join('');
};
removeKdigits("10200")