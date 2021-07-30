function quickSort(arr) {
    quick(arr, 0, arr.length - 1);
}

function quick(arr, left, right) {
    if (arr.length > 1) {
        let index;
        index = partition(arr, left, right);
        if (index < right) {
            quick(arr, index, right);
        }
        
        if (index - 1 > left) {
            quick(arr, left, index - 1);
        }

    }
}

function partition(arr, left, right) {
    const privot = Math.floor((left + right) / 2);
    let l = left;
    let r = right;
    while (l <= r) {
        while (arr[l] < arr[privot]) {
            l++;
        }

        while (arr[r] > arr[privot]) {
            r--;
        }

        if (l <= r) {
            [arr[l], arr[r]] = [arr[r], arr[l]];
            l++;
            r--;
        }
    }
    return l;
}

const arr4 = [1, 3, 2, 7, 1, 2, 4, 8, 6];
quickSort(arr4)
console.log(arr4);