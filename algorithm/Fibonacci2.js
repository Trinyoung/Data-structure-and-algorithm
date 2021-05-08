/*
 * @Author: your name
 * @Date: 2020-12-24 12:44:44
 * @LastEditTime: 2020-12-24 13:31:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\Fibonacci2.js
 */
function fibonacciMemoization (n) {
    const memo = [0, 1];
    const fibonacci = n => {
        if (memo[n]!==null) return memo[n];
        return memo[n] = fibonacci(n-1, memo) + fibonacci(n -2, memo);
    };
    return fibonacci(n);
}
console.log(fibonacciMemoization(4), '=================>');