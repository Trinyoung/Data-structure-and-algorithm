var mostPoints = function (questions) {
    const n = questions.length;
    let dp = new Array(n).fill(0);
    dp[n -1] = questions[n-1][0];
    console.log(dp, '===');
    for (let i = n -2; i >=0; i--) {
        dp[i] = Math.max(dp[i + 1], questions[i][0] + (dp[i + (questions[i][1]) + 1] || 0));
    }
    console.log(dp, '=====');
    return dp[0];
}
mostPoints([[12,46],[78,19],[63,15],[79,62],[13,10]]);