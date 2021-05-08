function quickSelect(arr, index) {
    if (arr.length < index) {
        return null;
    }
    let atrix = arr.length - 1;
    return _quickSelect(arr, atrix, 0, atrix - 1, index);
}

function _quickSelect(arr, atrix, left, right, index) {
    const result = partion(arr, atrix, left, right);
    if (result < index - 1 ) {
        if (arr.length - result > 2) {
            return _quickSelect(arr, atrix, result + 1, atrix - 1, index);
        } else {
            return arr[arr.length - 2];
        }
        
    }
    if (result > index - 1 ) {
        if (result >= 2) {
            return _quickSelect(arr, result - 1, 0, result - 2, index);
        } else {
            return arr[0];
        }
    }
    if (result === index - 1) {
        return arr[result];
    }
}

function partion(arr, atrix, left, right) {
    while (left <= right) {
        if (arr[left] < arr[atrix] || arr[right] > arr[atrix]) {
            if (arr[left] < arr[atrix]) left++;
            if (arr[right] > arr[atrix]) right--;
        } else {
            const temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    const temp = arr[left];
    arr[left] = arr[atrix];
    arr[atrix] = temp;
    return left;
}
const arr = [0, 2, 1, 4, 3, 4];
console.log(quickSelect(arr, 6));
console.log(arr);