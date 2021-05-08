/*
 * @Author: your name
 * @Date: 2021-03-09 10:30:40
 * @LastEditTime: 2021-03-09 14:41:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\divide\demo1.js
 */
var divide = function (dividend, divisor) {
    const dividend1 = Math.abs(dividend);
    const divisor1 = Math.abs(divisor);
    let sum = divisor1;
    let num = 1;
    const arr = [{ num: 1, sum: divisor1 }];
    while (sum < dividend1) {
        sum += sum;
        num += num;
        arr.push({ num, sum });
    }

    if (sum > dividend1) {
        for (let i = arr.length - 2; i >= 0; i--) {
            if (sum >= dividend1 + divisor1) {
                sum = sum - arr[i].sum;
                num = num - arr[i].num;
            } else if (sum < dividend1) {
                sum += arr[i].sum;
                num += arr[i].num;
            }
            if (sum < dividend1 + divisor1 && sum >= dividend1) {
                num = sum === dividend1 ? num : num - 1;
                break;
            }
        }
    }

    if (dividend < 0 && divisor > 0 || dividend > 0 && divisor < 0) {
        num = 0 - num;
    }
    if (num >= Math.pow(2, 31)) {
        num = Math.pow(2, 31) - 1
    }
    return num;
};
console.time('开始')
console.log(divide(-1021989372,
    -82778243))
console.timeEnd('开始');