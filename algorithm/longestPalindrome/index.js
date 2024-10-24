/*
 * @Author: your name
 * @Date: 2021-01-13 10:09:14
 * @LastEditTime: 2021-01-13 10:32:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\longestPalindrome\index.js
 */

// Manacher 算法
function longestPalindrome(s) {
    // 预处理字符串
    const T = '#' + s.split('').join('#') + '#';
    const n = T.length;
    const P = new Array(n).fill(0); // P[i]表示以索引i为中心的最长回文子串的半径, 不包括中心。
    
    let C = 0, R = 0; 
    // C代表当前已知的最长回文子串中心位置
    // R代表当前已知最长回文子串的右边界
    let maxLen = 0, centerIndex = 0;
    
    for (let i = 1; i < n - 1; i++) {
        let iMirror = 2 * C - i;
        
        if (R > i) {
            P[i] = Math.min(R - i, P[iMirror]);
        }
        
        // 尝试扩展回文
        while (i + 1 + P[i] < n && i - 1 - P[i] >= 0 && T[i + 1 + P[i]] === T[i - 1 - P[i]]) {
            P[i]++;
        }
        
        // 如果回文超出了R，则更新C和R
        if (i + P[i] > R) {	
            C = i;
            R = i + P[i];
			
        }
        
        // 更新最长回文子串
        if (P[i] > maxLen) {
            maxLen = P[i];
            centerIndex = i;
        }
    }
    
    // 从处理后的字符串中提取原始回文子串
    const start = Math.floor((centerIndex - maxLen) / 2);
    return s.substring(start, start + maxLen);
}
longestPalindrome("babcbabcbaccba")