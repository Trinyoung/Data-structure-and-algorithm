/*
 * @Author: your name
 * @Date: 2021-01-07 14:51:10
 * @LastEditTime: 2021-01-07 17:01:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\minCoinChange\demo2.js
 */
// var combinationSum = function (candidates, target) {
//     const result = [];
//     // candidates = candidates.sort((a, b) => a - b);
//     function _combinationSum(baseArray, target, index) {
//         for (let i = index; i < candidates.length; i++) {
//             const item = candidates[i];
//             if (target >= item) {
//                 if (target === item) {
//                     result.push([...baseArray, item]);
//                     continue;
//                 };
//                 if (target > item) {
//                     _combinationSum([...baseArray, item], target - item, i);
//                 }
//             }
//         }
//     }
//     _combinationSum([], target, 0);
//     return result;
// };
function minCoinChange (coins, amount) {
    let min = Infinity;
    let minArr = [];
    function coinChange (amount, index, baseArray) {
        for (let i = index; i < coins.length; i ++ ) {
            const item = coins[i];
            if (amount > item && baseArray.length < min - 1) {
                let newBaseArr = [...baseArray, item];
                coinChange(amount - item, i, newBaseArr);
            }
            if (amount === item && baseArray.length < min -1) {
                minArr = [...baseArray, item];
            }
        }
    }
    coinChange(amount, 0, []);
    return minArr;
}
console.log(minCoinChange([2, 1, 3, 6, 4 , 5], 7))