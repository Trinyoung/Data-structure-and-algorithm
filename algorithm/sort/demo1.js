// 正向排序， 从小到大
function bubbleSort(arr) {
    for (let i = 0; i < arr.length -1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
        console.log(arr);
    }
    return arr;
}
console.log(bubbleSort([5, 4, 2, 1, 2, 2, 3, 2, 5, 6, 3])); // 

// console.log(bubbleSortReverse([5, 4, 2, 1, 2, 2, 3, 2, 5, 6, 3]));
function bubbleSort(arr) { // 从小到大排序
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    return arr;
}