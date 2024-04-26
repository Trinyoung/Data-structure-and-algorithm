function findAnagrams(s, p) {
    let pMap = {};
    let sMap = {};
    let left = 0;
    let right = 0;
    let count = p.length;
    // 初始化pMap
    for (let char of p) {
        pMap[char] = (pMap[char] || 0) + 1;
    }

    let result = [];
    while(right < s.length) {
        let char = s[right];
        right++;
        if (pMap[char]) {
            pMap[char]--;
        }
    }
}