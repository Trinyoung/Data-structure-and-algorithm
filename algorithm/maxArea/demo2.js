/*
 * @Author: your name
 * @Date: 2021-03-02 14:46:44
 * @LastEditTime: 2021-03-02 16:23:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\maxArea\demo2.js
 */
/**
 * @param {number[]} height
 * @return {number}
 */
// 双指针法
var maxArea = function (height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        let realHeight = 0;
        if (height[left] > height[right]) {
            realHeight = height[right];
            width = right -left;
            right --;
        } else {
            realHeight = height[left];
            width = right -left;
            left ++;
        }
        console.log(realHeight, width, left, right)
        const area = realHeight * width;
        
        max = area > max? area: max;
    }
    return max;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
1, 8