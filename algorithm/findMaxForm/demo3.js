function findMaxForm(strs, m, n) {
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    for (const str of strs) {
        const count = getCount(str);
        for (let i = m; i >= count[0]; i--) {
            for (let j = n; j >= count[1]; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - count[0]][j - count[1]] + 1);
            }
        }
    }

    return dp[m][n];
}

function getCount(str) {
    let countZero = 0;
    let countOne = 0;
    for (const char of str) {
        if (char === '0') {
            countZero++;
        } else if (char === '1') {
            countOne++;
        }
    }
    return [countZero, countOne];
}

// 示例输入
const strs = ["10", "0001", "111001", "1", "0"];
const m = 5;
const n = 3;

// 输出最大子集长度
console.log(findMaxForm(strs, m, n)); // 输出 4
