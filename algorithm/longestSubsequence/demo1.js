// 超时
var longestSubsequence = function(arr, difference) {
    let dp = [];
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!dp[i]) {
            dp[i] = 1;
            let pre = arr[i];
            for (let j = i + 1; j < arr.length; j++) {
                if ( arr[j] === pre + difference) {
                    dp[i]++;
                    pre = arr[j];
                    dp[j] = true;
                }
            }
            max = Math.max(dp[i], max)
        }
    }
    return max;
};
console.log(longestSubsequence([1,5,7,8,5,3,4,2,1], -2));