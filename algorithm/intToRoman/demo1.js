var intToRoman = function(num) {
    const words = [['M', 1000], ['D', 500], ['C', 100], ['L', 50], ['X', 10], ['V', 5], ['I', 1]];
    let res = '';
    let rest = num;
    for (let i = 0; i < words.length; i++) {
        const k = Math.floor(rest / words[i][1]);
        const n = Math.floor(rest / words[i + 1]?.[1]);
        if (n === 9) {
            res += `${words[i+1][0]}${words[i-1][0]}`;
            rest = rest % words[i+1][1];
            i++;
            continue;
        }
        if (k === 4) {
            res += `${words[i][0]}${words[i-1][0]}`;
            rest = rest % words[i][1];
            i++;
            continue;
        }
        for (let j = 0; j < k; j++) {
            res += words[i][0];
        }
        rest = rest % words[i][1];
    }
    return res;
};