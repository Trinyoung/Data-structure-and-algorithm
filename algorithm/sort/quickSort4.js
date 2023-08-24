// 1. 左指针逐个格子向右移动，当遇到大于或等于轴的值时，就停下来。
// 2. 右指针逐个搁置向左移动，当遇到小于或等于轴的值时，就停下来。
// 3. 将两指针所指的值交换位置。
// 4. 重复上述步骤，直至两指针重合，或左指针移到右指针的右边。
// 5. 将轴与左指针所指的位置交换位置。
function quickSort(arr) {
    let axis = arr[Math.ceil((arr.length-1)/2)];
    let l = 0;
    let r = arr.length - 1;
    quick(arr, axis, l, r);
}
function quick(arr, axis, l, r) {
    console.log(l, r, 'heheheheheheehehx')
    const index = partition4(arr, axis, l, r);
    console.log(l, r, index, 'heheheheheheehehhe')
    // console.log(index, arr, 'arr is heheehehehehehe')
    if (index > l) {
        axis = arr[Math.ceil((index + l)/2)];
        quick(arr, axis, l, index);
    }

    if (index+1 < r ) {
        console.log(index, r, 'hhehheehehehehe')
        axis = arr[Math.ceil((index+1 + r)/2)];
        quick(arr, axis, index, r);
    }
}
function partition4(arr, axis, l, r) {
    let axis = Math.floor((left + right)/2);
    while(l < r) {
        while (arr[l] < axis) {
            l++;
        }
        while (arr[r] > axis) {
            r--;
        }
        if (arr[l] >= axis && arr[r] <= axis) {
            [arr[l], arr[r]] = [arr[r], arr[l]];
            l++;
            r--;
        }
    }
    // console.log(l, 'l isd')
    return l;
}
const arr = [0, 5, 2, 1, 6, 3];
quickSort(arr);