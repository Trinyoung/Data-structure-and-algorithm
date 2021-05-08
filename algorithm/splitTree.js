/*
 * @Author: your name
 * @Date: 2021-03-02 11:00:52
 * @LastEditTime: 2021-03-02 12:41:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\splitTree.js
 */
// 给顶一个数组， 每个数组元素代表一个树干的长度。现在将树干切割，怎样切割才能得到k段长度为m的树干。求m的最大值。
function splitTree(arr, k) {
    let length = 1;
    let i = 0;
    let num = 0;
    let result = length;
    while (i < arr.length) {
        if (arr[i] < length) {
            i ++;
            continue;
        }
        num += Math.floor(arr[i] / length);
        if (num >= k) {
            i = 0;
            result = length;
            length++;
            num = 0;
        } else {
            i++;
        }
    }
    return result;
}
console.log(splitTree([5, 7, 3, 10, 4], 6));