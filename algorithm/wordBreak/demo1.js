// 要解决这个问题，我们可以使用动态规划的方法。首先，我们创建一个数组 dp，其中 dp[i] 表示字符串 s 的前 i 个字符是否可以被拆分为字典中的单词组合。

//   我们可以使用一个循环来遍历字符串 s 的每个字符位置 i，对于每个位置 i，我们再次循环遍历字典中的单词列表，判断从位置 i 开始的子字符串是否可以匹配字典中的某个单词。

//   具体步骤如下：

//   1. 创建一个长度为 s.length + 1 的数组 dp，并将其初始化为 false。

//   2. 空字符串可以被拆分为字典中的任意单词，所以 dp[0] = true。

//   3. 外层循环遍历字符串 s 的每个字符位置 i，内层循环遍历字典中的单词列表。

//   4. 在内层循环中，对于每个单词 word，判断从位置 i 开始的子字符串是否以 word 开头，如果是，则说明从位置 i 开始的子字符串可以被拆分为字典中的单词，此时更新 dp[i + word.length] 为 true。

//   5. 最后返回 dp[s.length] 的值，即整个字符串 s 是否可以被拆分为字典中的单词组合。
function wordBreak(s, wordDict) {
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 0; i <= s.length; i++) {
        for (let j = 0; j < wordDict.length; j++) {
            const word = wordDict[j];
            if (s.startsWith(word, i) && dp[i]) {
                dp[i + word.length] = true;
            }
        }
    }

    return dp[s.length];
}
