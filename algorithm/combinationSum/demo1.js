/*
 * @Author: your name
 * @Date: 2021-01-07 11:51:23
 * @LastEditTime: 2021-01-07 16:49:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\combinationSum\demo1.js
 */
// 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的数字可以无限制重复被选取。

// 说明：

// 所有数字（包括 target）都是正整数。
// 解集不能包含重复的组合。 
var combinationSum = function (candidates, target) {
    const result = [];
    // candidates = candidates.sort((a, b) => a - b);
    function _combinationSum(baseArray, target, index) {
        for (let i = index; i < candidates.length; i++) {
            const item = candidates[i];
            if (target >= item) {
                if (target === item) {
                    result.push([...baseArray, item]);
                    continue;
                };
                if (target > item) {
                    _combinationSum([...baseArray, item], target - item, i);
                }
            }
        }
    }
    _combinationSum([], target, 0);
    return result;
};
const candidates = [2, 1, 3, 6, 7, 4 , 5], target = 7;
console.log(combinationSum(candidates, target));
[2, 2, 3]