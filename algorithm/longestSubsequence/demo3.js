// 超时
var longestSubsequence = function(arr, difference) {
    let dp = [];
    let max = 0;
    for (let i = arr.length -1; i >= 0; i--) {
        dp[i] = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === arr[i] + difference) {
                dp[i] += dp[j];
                break;
            }
        }
        max = Math.max(dp[i], max);
    }
    return max;
};
console.log(longestSubsequence([1,5,7,8,5,3,4,2,1], -2));