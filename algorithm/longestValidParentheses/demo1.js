/*
 * @Author: your name
 * @Date: 2021-03-16 13:52:08
 * @LastEditTime: 2021-04-13 13:04:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\longestValidParentheses\demo1.js
 */
// 未完成
var longestValidParentheses = function (s) {
    let leftNum = 0;
    let nums = 0;
    let max = 0;
    let template = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            leftNum++;
        } else {
            if (leftNum > 0) {
                template++;
                leftNum--;
                if (leftNum == 0) {
                    nums += template;
                    template = 0;
                    if (nums > max) {
                        max = nums;
                    }
                }
            } else {
                leftNum = 0;
                nums = 0;
                template = 0;
            }
        }
    }
    // console.log(template, max, leftNum, '-----------')
    if (template > max) {
        max = template;
    }
    return max * 2;
};
// 
// console.log(longestValidParentheses('()(()'));
// console.log(longestValidParentheses('(()()'));
console.log(longestValidParentheses("(()(((()"));
// console.log(longestValidParentheses('(()()(()((()()()()()((()()())(()'));