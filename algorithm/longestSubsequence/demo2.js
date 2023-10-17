var longestSubsequence = function(arr, difference) {
    let dp = [];
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!dp[i]) {
            let pre = arr[i];
            let arr2 = [i];
            let isBreak = false;
            for (let j = i + 1; j < arr.length; j++) {
                if (dp[j] && pre + difference === arr[j]) {
                    arr2.forEach((item, index) => {
                        dp[item] = arr2.length - index + dp[j];
                    });
                    isBreak = true;
                    break;
                }
                if (arr[j] === pre + difference) {
                    pre = arr[j];
                    arr2.push(j);
                }
            }
            if (!isBreak) {
                arr2.forEach((item, index) => {
                    dp[item] = arr2.length - index;
                });
            }
            
            max = Math.max(dp[i], max)
        }
    }
    return max;
};
console.log(longestSubsequence([1,5,7,8,5,3,4,2,1], -2));