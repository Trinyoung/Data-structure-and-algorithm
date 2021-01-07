/*
 * @Author: your name
 * @Date: 2021-01-05 09:06:05
 * @LastEditTime: 2021-01-07 10:55:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\combinationSum2\demo1.js
 */
// 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。candidates 中的每个数字在每个集合中
// 只能使用一次
var combinationSum2 = function (candidates, target) {
    let result = []
    candidates = candidates.sort((a, b) => a - b);
    function _combinationSum2(candidates, target, result, baseArray) {
        for (let i = 0; i < candidates.length; i++) {
            const item = candidates[i];
            if (target >= item && item !== candidates[i - 1]) {
                let newBaseArr = [...baseArray, item];
                if (target === item) {
                    result.push(newBaseArr);
                }
                _combinationSum2(candidates.slice(i + 1, candidates.length), target - item, result, newBaseArr);
            }
        }
    }
    _combinationSum2(candidates, target, result, []);
    return result;
}
const arr = [10, 1, 2, 7, 6, 1, 5];
console.log(combinationSum2(arr, 8));