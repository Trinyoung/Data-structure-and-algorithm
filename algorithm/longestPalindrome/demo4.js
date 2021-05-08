/*
 * @Author: your name
 * @Date: 2021-01-13 09:24:20
 * @LastEditTime: 2021-01-13 10:02:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\longestPalindrome\demo4.js
 */
var longestPalindrome = function (s) {
    if (s.length <= 1) return s;
    // let start = 0;
    let max = 1;
    let maxArr = [0, 1];
    for (let i = 1; i < s.length; i++) {
        let j = 0;
        let n = 0;
        while (s[i - j] == s[i + j] && j <= i) {
            j ++;
        }
        while (s[i - n - 1] == s[i + n] && n <= i - 1) {
            n ++;
        }
        if (max < 2 * j - 1 || max < 2* n) {
            if (2 * j - 1 >= 2 * n) {
                maxArr = [i - (j - 1), i + j];
                max = 2 * j - 1;
            } else {
                maxArr = [i - n, i + n];
                max = 2 * n;
            }
        }
    }
    return s.substring(...maxArr);
}
const a = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
console.time('reverse');
// const a = 'abcddcbeaafsfasdfasasdfasdfasdfasdfasdfasdfasd';
// const arr = a.split('');
// arr.join('-');
console.log(longestPalindrome(a));
console.timeEnd('reverse');

// s.split('');