function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const axis = arr.length - 1; // 指定轴的位置
    let left = 0; // 指定左指针位置
    let right = arr.length - 2; // 指定右指针位置
    partition(arr, axis, left, right);
}
function partition(arr, axis, left, right) {
    while (left <= right) {
        if (arr[left] < arr[axis] || arr[right] > arr[axis]) {
            if (arr[left] < arr[axis]) { // 当左指针所指位置的值 < 轴的值；左指针向右移动
                left++;
            }
            if (arr[right] > arr[axis]) { // 当右指针所指位置的值 > 轴的值；右指针向左移动
                right--;
            }
        } else {
            const temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            // 将左指针所指大于轴的值 与 右指针所指值小于轴的值进行交换。
            left++; 
            right--;
        }
    }
    const temp = arr[left];
    arr[left] = arr[axis];
    arr[axis] = temp;
    // 将最后确定的左指针所指值与 轴交换。	
    if (left >=2) { // 如果left 的值 大于等于2， 说明轴左边的值数量大于等于2。如果小于2，则只有一个值，那么就已经确定排序，无需排序了
        partition(arr, left - 1, 0, left - 2); // 左边以 仍以最右边的值为新轴， 0 为左指针， 轴左手第二位为右指针；
    }
    if (axis - left >=2) { //
        partition(arr, axis, left + 1, axis-1); // 右边 以 仍以数组最右边为轴， 左指针为 确定值 左手第一个， 右指针为 轴的最近值； 
    }
}