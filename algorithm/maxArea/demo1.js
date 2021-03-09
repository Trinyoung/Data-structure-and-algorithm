/*
 * @Author: your name
 * @Date: 2021-03-02 14:23:47
 * @LastEditTime: 2021-03-02 14:46:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\maxArea\demo1.js
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        for (let k = height.length - 1; k > i; k--) {
            const realHegiht = height[k] > height[i] ? height[i] : height[k];
            const area = realHegiht * (k - i);
            max = area > max ? area : max;
        }
    }
    return max;
};
console.log(maxArea([4, 3, 2, 1, 4]));