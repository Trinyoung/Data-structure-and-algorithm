/*
 * @Author: your name
 * @Date: 2021-01-08 13:19:37
 * @LastEditTime: 2021-01-08 15:11:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\longestPalindrome\demo3.js
 */
var longestPalindrome = function (s) {
    if (s.length <= 1) return s;
    let max = 1;
    let maxArr = [0, 1];
    let a = 0;
    function _getlongPalindrome(left, right) {
        // console.log(++a);
        if (right - left > max) {
            const matrix = Math.ceil((left + right)/2);
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
    _getlongPalindrome(0, s.length - 1);
    return s.substring(...maxArr);
}
// const a = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
console.time('reverse');
const a = 'abcddcbeaafsfasdfasasdfasdfasdfasdfasdfasdfasd';

// let b = a.split('');
// let c = b.reverse();
// // c.join();
// console.log(c.join(''))

console.log(longestPalindrome(a))
console.timeEnd('reverse');