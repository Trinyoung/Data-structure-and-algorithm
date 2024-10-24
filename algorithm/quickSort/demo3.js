const quickSort = (arr) => {
    if (arr.length <= 1) return arr;
    const [base, ...rest] = arr;
    return [
        ...quickSort(rest.filter(item => item < base)), 
        base, 
        ...quickSort(rest.filter(item => item >= base))
    ]
}

console.log(quickSort([4, 5, 3, 2, 1, 7, 6]))