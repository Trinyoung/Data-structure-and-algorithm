function arrMin(arr) {
    let min = 1;
    const itemObj = {};
    arr.forEach(item => {
        if (item === min) {
            min++;
            if (itemObj[min]) {
                min = itemObj[min] + 1
                delete itemObj[min]
            }
        } else {
            if (item > 0) {
                itemObj[item] = item;
            }
        }
    });
    return min;
}
console.log(arrMin([1,2,4, 3]));