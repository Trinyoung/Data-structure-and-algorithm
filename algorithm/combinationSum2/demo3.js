/*
 * @Author: your name
 * @Date: 2021-01-07 10:30:50
 * @LastEditTime: 2021-01-07 10:33:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\combinationSum2\demo3.js
 */
// 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。candidates 中的每个数字在每个集合中
// 只能使用一次
var combinationSum2 = function(candidates, target) {
    let res = []
    let len = candidates.length
    candidates.sort((a,b)=>{return a-b})
    function dfs(target, path, index){
        if(target == 0){
            res.push(path)
            return;
        }
        for(let i = index; i < len; i++){
            if(candidates[i] <= target){
                if(i != index && candidates[i] == candidates[i-1]) 
                    continue
                dfs(target-candidates[i], [...path, candidates[i]], i+1)
            }
        }
    }
    dfs(target, [], 0)
    return res
};