const mergeSort = arr => {
    const left = arr.slice(0, Math.floor(arr.length / 2));
    const right = arr.slice(Math.floor(arr.length / 2));
    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    const result = [];
    let il = 0;
    let ir = 0;
    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }
    while (il < left.length) {
        result.push(left[il++]);
    }
    while (ir < right.length) {
        result.push(right[ir++]);
    }
    return result;
}