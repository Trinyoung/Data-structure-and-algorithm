/*
 * @Author: your name
 * @Date: 2021-01-13 10:09:14
 * @LastEditTime: 2021-01-13 10:32:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\longestPalindrome\index.js
 */
var longestPalindrome = function(s) {
    if (s == '') return ''
	const len = s.length
	let index = 0, maxL=0, begin=0;
	while (index < len) {
		let right = index, left = index;
		while (s[index + 1] == s[index]) { // 如果下一个 字符和当前字符相同，那么基准点和右指针保持一致。
			index++;
			right++;
		}
		while (right < len && left >= 0 && s[right] == s[left]) {
			right++;
			left--;
		}
		right--, left++;
		if (right - left + 1 > maxL) {
            maxL = right - left + 1;
            begin = left;
		}
		index++;
	}
	return s.substr(begin, maxL);
};