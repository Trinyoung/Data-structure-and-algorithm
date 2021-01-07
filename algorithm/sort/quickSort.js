/*
 * @Author: your name
 * @Date: 2020-12-25 08:54:06
 * @LastEditTime: 2021-01-05 08:42:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\sort\quickSort.js
 */
// 1. 左指针逐个格子向右移动，当遇到大于或等于轴的值时，就停下来。
// 2. 右指针逐个搁置向左移动，当遇到小于或等于轴的值时，就停下来。
// 3. 将两指针所指的值交换位置。
// 4. 重复上述步骤，直至两指针重合，或左指针移到右指针的右边。
// 5. 将轴与左指针所指的位置交换位置。
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const axis = arr.length - 1;
    let left = 0;
    let right = arr.length - 2;
    partition(arr, axis, left, right);
}
function partition(arr, axis, left, right) {
    while (left <= right) {
        if (arr[left] < arr[axis] || arr[right] > arr[axis]) {
            if (arr[left] < arr[axis]) {
                left++;
            }
            if (arr[right] > arr[axis]) {
                right--;
            }
        } else {
            const temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    const temp = arr[left];
    arr[left] = arr[axis];
    arr[axis] = temp;
    if (left >= 2) {
        partition(arr, left - 1, 0, left - 2);
    }
    if (axis - left >= 2) {
        partition(arr, axis, left + 1, axis - 1)
    }

}
const arr = [0, 5, 2, 1, 6, 3];
quickSort(arr);
console.log(arr, '------------->')