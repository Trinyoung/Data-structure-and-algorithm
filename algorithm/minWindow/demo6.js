// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
function minWindow2(s, t) {
    // 根据上面的注释写出代码
    let left = 0, right = 0;
    let min = s.length + 1;
    let res = '';
    const tObj = {};
    for (let i = 0; i < t.length; i++) {
        tObj[t[i]] = tObj[t[i]]? tObj[t[i]]+1: 1;
    }
    let rest = t.length;
    let sObj = {};
    while (right < s.length) {
        if (tObj[s[right]]) {
            if (!sObj[s[right]]?.length || sObj[s[right]].length < tObj[s[right]]) {
                rest--;
            }
            if (sObj[s[right]]?.length) {
                sObj[s[right]].push(right);
            } else {
                sObj[s[right]] = [right];
            }
            if (sObj[s[right]].length > tObj[s[right]]) {
                const index = sObj[s[right]].shift();
                if (index === left) {
                    left++;
                }
            }
            if (!rest) {
                if (right - left + 1 < min) {
                    min = right - left + 1;
                    res = s.substr(left, min);
                }
            }
        }
        right++;
    }
    return res;
}