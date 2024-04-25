var findMaxForm = function(strs, m, n) { // ai 给的答案

    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    for (let str of strs) {
        const ones = str.split('0').length - 1;
        const zeros = str.length - ones;
        console.log(ones, zeros, 'ones, zeros ======>');
        for (let i = m; i >= zeros; i--) {
            for (let j = n; j >= ones; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1);
                
            }
        }
        // console.log(dp, 'dp[i][j] ======>');
    }
    // console.log(dp, 'dp ======>');
    return dp[m][n];
}
console.log(findMaxForm(["10","0001","111001","1","0"], 5, 3));