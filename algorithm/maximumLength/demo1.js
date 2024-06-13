// 至少出现3次的子字符串，且字符串皆为同一个字符；
var maximumLength = function(s) {
    // s 长度仅为50；
    const strMap = {};
    for (let i = 0; i < s.length; i++) {
        if (strMap[s[i]]) {
            if (s[i] === s[i - 1]) {
                strMap[s[i]][strMap[s[i]].length - 1]++;
            } else {
                strMap[s[i]].push(1);
            }
        } else {
            strMap[s[i]] = [1];
        }
    }
    let max = 0;
    console.log(strMap, 'strMap')
    for (let value of Object.values(strMap)) {
        const sortValue = value.sort((a, b) => b - a);
        console.log(sortValue, 'sortValue')
        let len = sortValue[0];
        let count = 0;
        let i = 0;
        while ( i < sortValue.length && count < 3) {
            // console.log(i, len, count, '=====')
            if (sortValue[i] < len) {
                i = 0;
                len--;
                count = 0;
            } else {
                console.log(len, 'len dddd')
                count += (sortValue[i] - len + 1);
                if (i === sortValue.length - 1 && count < 3) {
                    i = 0;
                    len--;
                    count = 0;
                } else {
                    i++;
                }
            }
        }
        // console.log(count, 'coutn ======>')
        if (count >= 3) {
            max = Math.max(len, max)
        }
    }
    return max;
};
console.log(maximumLength('aaaa')); // 3