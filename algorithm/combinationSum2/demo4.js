/*
 * @Author: your name
 * @Date: 2021-01-07 10:50:28
 * @LastEditTime: 2021-01-07 12:08:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\combinationSum2\demo4.js
 */
var combinationSum2 = function (candidates, target) {
    let result = []
    candidates = candidates.sort((a, b) => a - b);
    function _combinationSum2(index, target, baseArray) {
        for (let i = index; i < candidates.length; i++) {
            const item = candidates[i];
            if (i !== index && item === candidates[i - 1]) continue
            if (target >= item) {
                let newBaseArr = [...baseArray, item];
                if (target === item) {
                    result.push(newBaseArr);
                    continue;
                }
                _combinationSum2(i + 1, target - item, newBaseArr);
            }
        }
    }
    _combinationSum2(0, target, []);
    return result;
}
const arr = [10, 1, 2, 7, 6, 1, 5];
console.log(combinationSum2(arr, 8));