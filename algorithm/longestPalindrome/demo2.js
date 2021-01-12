/*
 * @Author: your name
 * @Date: 2021-01-08 13:00:50
 * @LastEditTime: 2021-01-08 17:01:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\longestPalindrome\demo2.js
 */
var longestPalindrome = function (s) {
    const items = {};
    const palindromeItems = {};
    let palindrome = false;
    for (let i = 0; i < s.length; i++) {
        if (items[s[i]]) {
            items[s[i]].push(i);
            palindromeItems[s[i]] = items[s[i]];
            palindrome = true;
        } else {
            items[s[i]] = [i];
        }
    }
    if (!palindrome) {
        return s[0];
    }
    let max = 1;
    let maxArr = [];
    for (let key in palindromeItems) {
        const item = palindromeItems[key];
        const left = item[0], right = item[item.length - 1];
        // for (let i = 0; i < item.length; i++) {
        //     if (right - left > max) {
        //         const matrix = Math.ceil((left + right) / 2);
        //         let leftStr = s.substring(left, matrix);
        //         let rightStr = s.substring(matrix, right + 1);
        //         if (leftStr === rightStr.split("").reverse().join("")) {
        //             max = right - left;
        //             maxArr = [left, right + 1];
        //         } else {
        //             _getlongPalindrome(left + 1, right);
        //             _getlongPalindrome(left, right - 1);
        //         }
        //     }
        // }
    }
    function _getlongPalindrome(left, right, palindromeItems) {
        if (right - left > max) {
            const matrix = Math.ceil((left + right) / 2);
            let leftStr = s.substring(left, matrix);
            let rightStr = s.substring(matrix, right + 1);
            if (leftStr === rightStr.split("").reverse().join("")) {
                max = right - left;
                maxArr = [left, right + 1];
            } else {
                _getlongPalindrome(left + 1, right);
                _getlongPalindrome(left, right - 1);
            }
        }
    }
}