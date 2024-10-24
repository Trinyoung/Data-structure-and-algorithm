/*
 * @Author: your name
 * @Date: 2021-01-07 12:21:27
 * @LastEditTime: 2021-01-08 15:36:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\longestPalindrome\demo1.js
 */
// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
var longestPalindrome = function (s) {
    if (s.length <= 1) return s;
    let max = 1;
    let maxArr = [0, 1];
    function _getlongPalindrome(left, right) {
        let step = 0;
        if (right - left > max) {
            while (left + step <= right - step) {
                if (s[left + step] !== s[right - step]) {
                    _getlongPalindrome(left + 1, right);
                    _getlongPalindrome(left, right - 1);
                    break;
                }
    
                if ((left + step === right - step || left + step + 1 === right - step)) {
                    maxArr = [left, right + 1];
                    max = right - left;
                    break;
                }
                step++;
            }
        }
    }
    _getlongPalindrome(0, s.length - 1);
    return s.substring(...maxArr);
}
// 时间超长；
// 2n
console.time('longestPalindrome');
// const a = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
const a = 'asdfasdfasdfasdfasabagadf';
console.log(longestPalindrome(a));
console.timeEnd('longestPalindrome');
