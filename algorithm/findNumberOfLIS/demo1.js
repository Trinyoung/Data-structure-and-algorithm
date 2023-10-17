// 示例 1:

// 输入: [1,3,5,4,7, 9, 8, 10]

// 输出: 2
// 解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7, 9, 10] 和 [1, 3, 5, 7, 9, 10], [1, 3, 5, 7, 8, 10], [1, 3, 4, 7, 8, 10]。
// var lengthOfLIS = function(nums) {
//     const dp = [];
//     for (let i = 0; i < nums.length; i++) {
//         dp[i] = 1;
//         for (let j = 0; j < i; j++) {
//             if (nums[i] > nums[j]) {
//                 dp[i] = Math.max(dp[i], dp[j] + 1);
//             }
//         }
//     }
//     return Math.max(...dp);
// };
var findNumberOfLIS = function(nums) {
    let [dp, cnt, maxLen, ans] = [[], [], 0, 0];
    for (let i = 0; i < nums.length; i++) {
        dp[i] = 1;
        cnt[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    cnt[i] = cnt[j];
                } else if (dp[j] + 1 === dp[i]) {
                    cnt[i] += cnt[j];
                }
            }
            
        }
        if (maxLen < dp[i]) {
            maxLen = dp[i];
            ans = cnt[i];
        } else if (maxLen === dp[i]) {
            ans += cnt[i];
        }
    }
    return ans;
};
var findNumberOfLIS = function(nums) {
    let dp = []; // 记录nums[i]结尾的长度
    let cnt = []; // 记录nums[i]结尾的最长上升子序列个数。
    let maxLen = 0; // 最长上升子序列的长度；
    let ans = 0; // 答案；
    for (let i = 0; i < nums.length; i++) {
        dp[i] = 1;
        cnt[i] = 1;
        for (let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    cnt[i] = cnt[j];
                } else if (dp[j] + 1 === dp[i]){
                    cnt[i] += cnt[j]
                }
            }
        }
        if (dp[i] > maxLen) {
            maxLen = dp[i];
            ans = cnt[i];
        } else if (dp[i] === maxLen) {
            ans += cnt[i];
        }
    }
    return ans;
};