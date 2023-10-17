var longestSubsequence = function(arr, difference) {
    let ans = 0;
    const dp = new Map();
    
    for (const v of arr) {
        dp.set(v, (dp.get(v - difference) || 0) + 1);
        ans = Math.max(ans, dp.get(v));
    }
    return ans;
};
// 下文为方便叙述将 difference\textit{difference}difference 简写成 ddd。

// 我们从左往右遍历 arr\textit{arr}arr，并计算出以 arr[i]\textit{arr}[i]arr[i] 为结尾的最长的等差子序列的长度，取所有长度的最大值，即为答案。

// 令 dp[i]\textit{dp}[i]dp[i] 表示以 arr[i]\textit{arr}[i]arr[i] 为结尾的最长的等差子序列的长度，我们可以在 arr[i]\textit{arr}[i]arr[i] 左侧找到满足 arr[j]=arr[i]−d\textit{arr}[j]=\textit{arr}[i]-darr[j]=arr[i]−d 的元素，将 arr[i]\textit{arr}[i]arr[i] 加到以 arr[j]\textit{arr}[j]arr[j] 为结尾的最长的等差子序列的末尾，这样可以递推地从 dp[j]dp[j]dp[j] 计算出 dp[i]dp[i]dp[i]。由于我们是从左往右遍历 arr\textit{arr}arr 的，对于两个相同的元素，下标较大的元素对应的 dp\textit{dp}dp 值不会小于下标较小的元素对应的 dp\textit{dp}dp 值，因此下标 jjj 可以取满足 j<ij<ij<i 且 arr[j]=arr[i]−d\textit{arr}[j]=\textit{arr}[i]-darr[j]=arr[i]−d 的所有下标的最大值。故有转移方程

// dp[i]=dp[j]+1\textit{dp}[i] = \textit{dp}[j] + 1
// dp[i]=dp[j]+1
// 由于我们总是在左侧找一个最近的等于 arr[i]−d\textit{arr}[i]-darr[i]−d 元素并取其对应 dp\textit{dp}dp 值，因此我们直接用 dp[v]\textit{dp}[v]dp[v] 表示以 vvv 为结尾的最长的等差子序列的长度，这样 dp[v−d]\textit{dp}[v-d]dp[v−d] 就是我们要找的左侧元素对应的最长的等差子序列的长度，因此转移方程可以改为

// dp[v]=dp[v−d]+1\textit{dp}[v] = \textit{dp}[v-d] + 1
// dp[v]=dp[v−d]+1
// 最后答案为 max⁡{dp}\max\{\textit{dp}\}max{dp}。
                                                                        