var maxUncrossedLines = function(nums1, nums2) {
    let dp = new Array(nums1.length + 1).fill(0);
    let pre = -1;
    for (let i = 1; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i -1] === nums2[j]) {
                if (j > pre) dp[i] = dp[i-1] + 1;
                pre = j;
                break;
            } 
        }
        if (pre < 0) {
            dp[i] = dp[i-1];
            pre = -1;
        }
    }
    return dp[nums1.length]
};
console.log(maxUncrossedLines([1,4,2], [1,2,4]));