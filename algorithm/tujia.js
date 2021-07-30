/*
 * @Author: your name
 * @Date: 2021-04-30 08:41:10
 * @LastEditTime: 2021-04-30 09:06:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\tujia.js
 */
function calc(n) {
    const result = [];
    function cal(a, b) {
        if (b <= a / 2) {
            if (a % b === 0) {
                result.push(b);
                return cal(a / b, b);
            } else {
                return cal(a, b + 1);
            }
        } else {
            result.push(a);
        }
    }
    cal(n, 2);
    return result;
}
console.log(calc(0))
console.log(calc(1))
console.log(calc(2));
console.log(calc(8));
console.log(calc(12));
console.log(calc(13))
console.log(calc(42))