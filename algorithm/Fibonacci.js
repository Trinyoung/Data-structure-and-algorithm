/*
 * @Author: your name
 * @Date: 2020-12-24 12:29:36
 * @LastEditTime: 2020-12-24 12:43:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\Fibonacci.js
 */
// 求n 的斐波那契数列 0, 1, 1, 2 , 3,  5, 8, 13, 21, 34, 55, 89, 143, 232;
function Fibonacci (n) {
    if (n < 2 ) {
        return n;
    }
    return Fibonacci(n-1) + Fibonacci(n-2);
}
console.log(Fibonacci(0))
console.log(Fibonacci(1))
console.log(Fibonacci(2))
console.log(Fibonacci(3))
console.log(Fibonacci(5))
console.log(Fibonacci(6))
console.log(Fibonacci(7))
console.log(Fibonacci(8))
console.log(Fibonacci(9))