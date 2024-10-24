// 计算前缀表（部分匹配表）
function computePrefixTable(pattern) {
    const m = pattern.length;
    const prefixTable = new Array(m).fill(0);
    let length = 0; // 前缀的长度
    let i = 1;

    while (i < m) {
        if (pattern[i] === pattern[length]) {
            length++;
            prefixTable[i] = length;
            i++;
        } else {
            if (length !== 0) {
                length = prefixTable[length - 1];
            } else {
                prefixTable[i] = 0;
                i++;
            }
        }
    }
    return prefixTable;
}

// KMP主算法
function KMP(text, pattern) {
    const n = text.length;
    const m = pattern.length;
    if (m === 0) return 0; // 空模式串，返回起始位置0

    const prefixTable = computePrefixTable(pattern);
    let i = 0; // text的索引
    let j = 0; // pattern的索引

    while (i < n) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
        } else {
            if (j !== 0) {
                j = prefixTable[j - 1];
            } else {
                i++;
            }
        }

        // 完全匹配
        if (j === m) {
            return i - j; // 返回匹配的起始位置
        }
    }

    return -1; // 未找到匹配
}

// 测试示例
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const result = KMP(text, pattern);

if (result !== -1) {
    console.log(`模式串在位置 ${result} 匹配成功。`);
} else {
    console.log("未找到匹配的模式串。");
}
/* 
代码说明：
computePrefixTable 函数：

用于计算模式串的前缀表（部分匹配表）。
prefixTable[i] 表示模式串中从开头到位置 i（包括 i）的子串的最长相等前后缀长度。
KMP 函数：

实现 KMP 主算法，在文本串中查找模式串的位置。
通过比较文本串 text 和模式串 pattern 的字符，如果字符匹配，则同时移动 i 和 j。
如果字符不匹配，利用前缀表 prefixTable 来更新 j 的位置，避免重复比较。
测试示例：

给定文本串和模式串，调用 KMP 函数，输出匹配结果。
运行结果：
复制代码
模式串在位置 10 匹配成功。
进一步解释：
为什么使用前缀表：

当字符不匹配时，前缀表告诉我们下一个应该将模式串移动到的位置。
这避免了将文本串的索引回退，从而实现线性时间复杂度。
复杂度分析：

预处理阶段（计算前缀表）的时间复杂度为 O(m)，其中 m 是模式串的长度。
匹配阶段的时间复杂度为 O(n)，其中 n 是文本串的长度。
总的时间复杂度为 O(n + m)。
举例说明：
假设有以下文本串和模式串：

文本串："ABC ABCDAB ABCDABCDABDE"
模式串："ABCDABD"
在这个例子中，KMP算法能够高效地找到模式串在文本串中的位置。

总结：
使用 KMP 算法，可以在较长的文本串中高效地搜索模式串，避免了朴素字符串匹配算法中的重复比较，提高了匹配效率。
 */