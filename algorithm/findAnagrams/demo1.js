function findAnagrams(s, p) {
    const result = [];
    const pMap = new Map();
    const sMap = new Map();

    // 统计 p 中字符的频率
    for (const char of p) {
        pMap.set(char, (pMap.get(char) || 0) + 1);
    }

    // 定义左右指针和需要匹配的字符数
    let left = 0, right = 0, count = p.length;

    // 移动右指针
    while (right < s.length) {
        const char = s[right];
        // 如果当前字符是 p 中的字符，则更新 s 中字符频率
        if (pMap.has(char)) {
            sMap.set(char, (sMap.get(char) || 0) + 1);
            // 如果 s 中字符频率不超过 p 中字符频率，则 count 减一
            if (sMap.get(char) <= pMap.get(char)) {
                count--;
            }
        }
        right++;

        // 当需要匹配的字符数为 0 时，表示找到一个合法的子串，记录起始索引
        if (count === 0) {
            result.push(left);
        }

        // 移动左指针
        if (right - left === p.length) {
            const leftChar = s[left];
            // 如果左指针所指向的字符在 p 中，则更新 s 中字符频率
            if (pMap.has(leftChar)) {
                sMap.set(leftChar, sMap.get(leftChar) - 1);
                // 如果 s 中字符频率小于 p 中字符频率，则 count 加一
                if (sMap.get(leftChar) < pMap.get(leftChar)) {
                    count++;
                }
            }
            left++;
        }
    }

    return result;
}
