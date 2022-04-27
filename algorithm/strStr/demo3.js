function strStr2(needle) {
    const partMatch = [];
    for (let i = 0; i < needle.length; i++) {
        let prefixStr = '';
        let subfixStr = '';
        let max = 0;
        for (let j = 0; j < i; j++) {
            prefixStr = needle.substr(0, j + 1);
            subfixStr = needle.substr(i - j, j + 1);
            if (prefixStr === subfixStr && prefixStr.length > max) {
                max = prefixStr.length;
            }
        }
        partMatch.push(max);
    }
    console.log(partMatch);
}