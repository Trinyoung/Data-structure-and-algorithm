const quickSort = (arr) => {
    if (arr.length <= 1) return arr;
    const [base, ...extraArr] = arr;
    return [
        ...quickSort(extraArr.filter(item => item < arr[0])),
        base,
        ...quickSort(extraArr.filter(item => item >= arr[0]))
    ]
}
console.log(quickSort([1, 3, 2, 4,5, 5, 5, 7, 6, 8]))