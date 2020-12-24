/*
 * @Author: your name
 * @Date: 2020-12-24 10:15:58
 * @LastEditTime: 2020-12-24 10:30:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\jiecheng.js
 */
function factorial (num, result = 1) {
    if (num > 1) {
        result = result * num;
        return factorial(num -1, result);
    }
    return result * num;
}

console.log(factorial(5));