var deleteAndEarn = function(nums) {
    let numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (numMap.has(nums[i])) {
            numMap.set(nums[i], numMap.get(nums[i])+nums[i])
        } else {
            numMap.set(nums[i], nums[i]);
        }
    }
    const uniqueNum = [...new Set(nums.sort((a, b) => a - b))];
    console.log(uniqueNum, numMap)
    const dp = new Array(uniqueNum.length + 1).fill(0);
    console.log(dp, '=====>');
    dp[0] = 0;
    dp[1] = numMap.get(uniqueNum[0]);
    dp[2] = uniqueNum[1] - uniqueNum[0] === 1 ? numMap.get(uniqueNum[1]): numMap.get(uniqueNum[0]) + numMap.get(uniqueNum[1]);
    for (let i = 3; i <= uniqueNum.length; i++) {
        const value1 = numMap.get(uniqueNum[i -1]);
        console.log(uniqueNum[i-1], uniqueNum[i-2], dp[i-2], dp[i-1])
        dp[i] = (uniqueNum[i-1] - uniqueNum[i-2] > 1 ? Math.max(dp[i-1] ,dp[i-2]) : Math.max(dp[i-2] , dp[i-3] )) + value1;
    }
    console.log(dp, 'dp==============')
    return Math.max(dp[uniqueNum.length -1], dp[uniqueNum.length]);
};
console.log(deleteAndEarn([2,2,3,3,3,4]), 'result');