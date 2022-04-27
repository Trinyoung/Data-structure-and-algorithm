function strStr(hayStack, needle) { // KMP算法;
    let partMatch = [];
    if (hayStack === needle) return 0;
    let pre = -1;
    for (let i = 0; i < needle.length; i++) {
        if (i > 0) {
            if (needle[i] === needle[pre + 1]) {
                pre++;
            } else {
                pre = -1;
            }
        }
        partMatch.push(pre + 1);
    }
    let indexHayStack = 0;
    let result = -1;
    while (indexHayStack <= hayStack.length - needle.length) {
        let index1 = indexHayStack; // haystack 的索引;
        let index2 = 0; // needle的索引;
        while (index2 <= needle.length - 1 && needle[index2] === hayStack[index1]) {
            index1++;
            index2++;
        }
        console.log(index2, indexHayStack, 'index2');
        if (index2 > needle.length - 1) {
            result = indexHayStack;
            return result;
        }
        if (partMatch[index2 - 1] > 0) {
            indexHayStack += index2 - partMatch[index2 - 1];
        } else {
            indexHayStack++;
        }
    }
    return result;
}
console.log(strStr('mississippi', 'isisip'));

