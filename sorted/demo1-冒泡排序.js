function sortArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[j], arr[i]] = [arr[i], arr[j]];
            }
        }
    }
    return arr;
}

console.log(sortArr([3, 4, 2, 1,1,3, 6, 5]));