/* 给你一个二维整数数组 envelopes ，其中 envelopes[i] = [wi, hi] ，表示第 i 个信封的宽度和高度。

当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。

请计算 最多能有多少个 信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。

注意：不允许旋转信封。

 
示例 1：

输入：envelopes = [[5,4],[6,4],[6,7],[2,3]]
输出：3
解释：最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。 */

// const a = 1; 
function maxEnvelopes(envelopes) {
    const sortEnvs = envelopes.sort((a, b) => { 
        if (a[0] === b[0]) {
            return b[1] - a[1];
        } else {
            return a[0] - b[0];
        }
    }); // 排序
    console.log(sortEnvs)
    let dp = new Array(envelopes.length).fill(1);
    dp[0] = 1;
    for (let i = 1; i < envelopes.length; i++) {
        for (let j = 0; j < i; j++) {
            if (sortEnvs[i][0] > sortEnvs[j][0] && sortEnvs[i][1] > sortEnvs[j][1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp)
}
const envelopes = [[5,4],[6,4],[6,7],[2,3]]
console.log(maxEnvelopes(envelopes))