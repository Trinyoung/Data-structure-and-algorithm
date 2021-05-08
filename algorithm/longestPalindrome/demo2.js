/*
 * @Author: your name
 * @Date: 2021-01-08 13:00:50
 * @LastEditTime: 2021-01-12 18:38:02
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
        _getlongPalindrome(0, item.length-1, item);
    }
    function _getlongPalindrome(left, right, palindromeItems) {
        if (palindromeItems[right] - palindromeItems[left] > max) {
            const matrix = Math.ceil((palindromeItems[left] + palindromeItems[right]) / 2);
            let leftStr = s.substring(palindromeItems[left], matrix);
            let rightStr = s.substring(matrix, palindromeItems[right] + 1);
            if (leftStr === rightStr.split("").reverse().join("")) {
                max = palindromeItems[right] - palindromeItems[left];
                maxArr = [palindromeItems[left], palindromeItems[right] + 1];
            } else {
                _getlongPalindrome(left + 1, right, palindromeItems);
                _getlongPalindrome(left, right - 1, palindromeItems);
            }
        }
    }
    return s.substring(...maxArr);
}
console.time('reverse');
// const a = 'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'
// const a = 'abcddcbeaafsfasdfasasdfasdfasdfasdfasdfasdfasd';
console.log(longestPalindrome(a))
console.timeEnd('reverse');