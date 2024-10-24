const minimumOperations = (s) => {
    //  当结尾是25， 50， 75 或者 00 时，它才有可能是 25的倍数；
    // let count = 0;
    let firstZero = s.length;
    let firstFive = s.length;
    let compareZero = s.length;
    let compareFive = s.length;
    let i = s.length - 1;
    while (i >= 0) {
        if (s[i] === '0') {
            if (firstZero === s.length) {
                firstZero = i;
            } else {
                if (compareZero === s.length) {
                    compareZero = i;
                }
            }
        }
        if (s[i] === '5') {
            if (compareZero === s.length && firstZero < s.length) {
                compareZero = i;
            }
            if (firstFive === s.length) {
                firstFive = i;
            }
        }
        if ((s[i] === '2' || s[i] === '7') && firstFive < s.length && compareFive === s.length) {
            compareFive = i;
        }
        i--;
    }
    console.log(firstFive, firstZero, compareZero, compareFive, 'firstFive, firstZero, compareZero, compareFive')
    const length1 =  compareFive < s.length ? s.length - 1 - firstFive + firstFive - compareFive - 1 : s.length;
    const length2 = compareZero < s.length? s.length - 1 - firstZero + firstZero - compareZero -1 : firstZero === s.length? s.length: s.length - 1;
    return Math.min(length1, length2);
}
console.log(minimumOperations("10"))