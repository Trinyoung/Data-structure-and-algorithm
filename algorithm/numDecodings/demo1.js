var numDecodings = function(s) {
    if (s[0] === '0' || /00/.test(s) || (s[1]=== '0' && Number(s[0] + s[1]) > 26)) return 0; 
    let dp = new Array(s.length).fill(0);
    dp[0] = s[0] === '0'? 0: 1;
    dp[1] = s[1] === '0'? dp[0]: Number(s.slice(0, 2)) <= 26? dp[0] + 1: dp[0];
    for (let i = 2; i < s.length; i++) {
        if (s[i] === '0') {
            if (Number(s[i-1]+s[i]) > 26) {
                return 0;
            }
            dp[i] = dp[i-2];
            dp[i-1] = dp[i-2];
        } else if (Number(s.slice(i-1, i+1)) > 26 || s[i-1] === '0') {
            dp[i] = dp[i-1];
        } else {
            dp[i] = dp[i-1] + dp[i-2];
        }
    }
    return dp[s.length - 1]
};