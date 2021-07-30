// 1. 左指针逐个格子向右移动，当遇到大于或等于轴的值时，就停下来。
// 2. 右指针逐个格子向左移动，当遇到小于或等于轴的值时，就停下来。
// 3. 将两指针所指的值交换位置。
// 4. 重复上述步骤，直至两指针重合，或左指针移到右指针的右边。
// 5. 将轴与左指针所指的位置交换位置。
function quickSort(arr) {
    quick(arr, 0, arr.length - 1);
}

function quick (arr, left, right) {
    // let index = 0;
    if (arr.length > 1) {
        const index = partition2(arr, left, right);
        if (index > left + 1) {
            quick(arr, left, index -1);
        }

        if (index < right) {
            quick(arr, index, right);
        }
    }
}
function partition2 (arr, left, right) {
    let privot = Math.floor((left + right)/2);
    while (left <= right) {
        while (arr[left] < arr[privot]) {
            left ++;
        }
        while (arr[right] > arr[privot]) {
            right --;
        }
        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left ++;
            right --;
        }
    }
    return left;
}
const arr1 = [0, 5, 2, 1, 6, 3];
quickSort(arr1);
console.log(arr1, '------------->')