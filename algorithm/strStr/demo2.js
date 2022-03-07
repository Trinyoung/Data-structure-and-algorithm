// kmp算法
var strStr = function (haystack, needle) {
    const partialMatch = [];
    for (let i = 0; i < needle.length; i++) {
        if (i === 0) {
            partialMatch.push(0)
        } else {
            // 前缀是什么
            let max = 0;
            let index = 0;
            while (index < i) {
                let str1 = needle.substr(0, index + 1);
                let str2 = needle.substr(i - index, index + 1);
                if (str1 === str2 && str1.length > max) max = str1.length;
                index++;
            }
            partialMatch.push(max);
        }
    }
    let start = 0;
    let result = -1;
    while (start <= haystack.length - needle.length - 1) {
        let index1 = 0; // needle 的起始值
        let index2 = start;
        let step = 1;
        while (index1 <= needle.length - 1) {
            if (haystack[index2] === needle[index1] && index1 < needle.length - 1) {
                index1++;
                index2++;
            } else if (haystack[index2] === needle[index1] && index1 === needle.length - 1) {
                result = index1;
            } else {
                step = index1 - partialMatch[index1];
            }
        }
        if (result > -1) {
            return;
        }
        start += step;
    }
    return result;
}
console.log(strStr('ad', 'abcdabdab'), '=======================>');
// 'abcdabdab';

// 'a': 0
// 'ab': 0;
// 'abc': ['a', 'ab']['bc', 'c']; 0;
// 'abcd': 0;
// 'abcda': 1;
// 'abcdab': 2;
// 'abcdaba': ['a', 'ab', 'abc', 'abcd', 'abcda', 'abcdab'], ['bcdaba', 'cdaba', 'daba', 'aba', 'ba', 'a']: 1
// 'abcdabab': ['a', 'ab', 'abc', 'abcd', 'abcda', 'abcdab', 'abcdaba'], ['bcdabab', 'cdabab', 'dabab', 'abab', 'bab', 'ab', 'b']2;

// [0, 0, 0, 0, 1, 2, 1, 2]
// 移动的位数：已匹配的字数 - 对应的匹配值