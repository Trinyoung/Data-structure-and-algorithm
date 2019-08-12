// 插入算法的意思是： 确定首位， 然后后面的和前面的元素进行比较，确定是放在先前元素的前面还是后面。以此类推
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            } else {
                break;
            }
        }
    }
    return arr;
}

console.log(insertionSort([9, 1, 4, 2, 4, 6, 4, 6, 7, 2]));