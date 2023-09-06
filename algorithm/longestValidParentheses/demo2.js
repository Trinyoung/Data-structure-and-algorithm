/*
 * @Author: your name
 * @Date: 2021-04-13 13:04:26
 * @LastEditTime: 2021-05-21 13:33:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\longestValidParentheses\demo2.js
 */
// 类似于最长回文字符串，找到最长的有效括号；
var longestValidParentheses = function (s) {
    if (s.length <= 1) {
        return 0;
    }
    const left = '(';
    const right = ')';
    const arr = s.split('');
    let prev = 0; // 索引
    let next = 1; // next 和 prev 组成一个完整的();
    const marked = {};
    let max = 0;
    while (next < arr.length) {
        if (arr[next] === right && arr[prev] === left) {
            if (marked[next - 1]) {
                marked[next] = marked[next - 1] + 2; // 到它的时候，最长有效括号长度；
            } else {
                marked[next] = 2;
            }
            if (marked[prev - 1]) {
                marked[next] += marked[prev - 1];
                prev -= (marked[prev - 1] + 1);
            } else {
                prev--;
            }
            if (marked[next] > max) {
                max = marked[next];
            }
            next++;
        } else {
            prev = next;
            next++;
        }
    }
    console.log(marked, 'marked');
    return max;
};

console.log(longestValidParentheses("(())()()))"));