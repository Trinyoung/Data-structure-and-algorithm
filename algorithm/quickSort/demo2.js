const quickSort = (arr) => {
    if (arr.length <= 1) return arr;
    const baseIndex = Math.floor(arr.length / 2);
    const base = arr.splice(baseIndex, 1)[0]
    return [
        ...quickSort(arr.filter(item => item < base)),
        base,
        ...quickSort(arr.filter(item => item >= base))
    ]
}
console.log(quickSort([4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))