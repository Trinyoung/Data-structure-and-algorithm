/*
 * @Author: your name
 * @Date: 2021-01-06 20:04:51
 * @LastEditTime: 2021-01-07 10:51:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\combinationSum2\demo2.js
 */
var combinationSum2 = function (candidates, target) {
    const result = [];
    _combinationSum2(candidates, target, result, 0);
    return result;
}

function _combinationSum2(candidates, target, resultItems, index) {
    const item = candidates[index];
    if (index < candidates.length) {
        if (target + resultItems[resultItems.length - 1] === item) {
            resultItems.splice(resultItems.length - 1, 1, item);
            console.log(resultItems, '------>')
        }
        if (item < target) {
            resultItems.push(item);
            return _combinationSum2(candidates, target - item, Object.assign([], resultItems), ++index);
        }
        if (item === target) {
            resultItems.push(item);
            console.log(resultItems);
        }
    }
}

const arr = [10, 1, 2, 7, 6, 1];
console.log(combinationSum2(arr, 8));