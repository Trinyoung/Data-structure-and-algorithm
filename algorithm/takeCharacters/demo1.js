var takeCharacters = function(s, k) {
    let i = -1;
    const numMap = {
        a: 0,
        b: 0,
        c: 0
    }
    const reverseMap = {
        a: 0,
        b: 0,
        c: 0
    };
    while ((numMap.a < k || numMap.b < k || numMap.c < k) && i < s.length) {
        i++;
        if (s[i] === 'a') numMap.a++;
        if (s[i] === 'b') numMap.b++;
        if (s[i] === 'c') numMap.c++;
    }
    let j = s.length;
    while ((reverseMap.a < k || reverseMap.b < k || reverseMap.c < k) && i < s.length) {
        j--;
        if (s[j] === 'a') reverseMap.a++;
        if (s[j] === 'b') reverseMap.b++;
        if (s[j] === 'c') reverseMap.c++;
    }
    const reverseLength = s.length - j;
    if (numMap.a < k || numMap.b < k || numMap.c < k) return -1;
    let l = i > s.length - 1? s.length - 1: i;
    let r = s.length - 1;
    let res = l + 1;
    while (l >= 0) {
        let left = s[l];
        let right = s[r];
        if (l === r) {
            l--;
            numMap[right]--;
            continue;
        }
        
        if (numMap[left] - 1 >= k) {
            numMap[left]--;
            l--;
        } else {
            numMap[right] ++;
            r--;
        }
    }
   
    return Math.min(res, reverseLength);
};
let s = 'caccbbba', k = 1;

console.log(takeCharacters(s, k))