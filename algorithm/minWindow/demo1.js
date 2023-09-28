/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * 给定两个字符串 s 和 t 。返回 s 中包含 t 的所有字符的最短子字符串。如果 s 中不存在符合条件的子字符串，则返回空字符串 "" 。
 * 如果 s 中存在多个符合条件的子字符串，返回任意一个。
 * 注意： 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 **/

var minWindow = function (s, t) {
    const sMap = {};
    if (s.length < t.length) return '';
    for (let i = 0; i < s.length; i++) {
        if (sMap[s[i]]) {
            sMap[s[i]].push(i);
        } else {
            sMap[s[i]] = [i];
        }
    }
    let tMap = {};
    for (let i = 0; i < t.length; i++) {
        let val = t[i];
        tMap[val] = tMap[val] ? tMap[val] + 1 : 1;
        if (!sMap[val] || sMap[val].length < tMap[val]) return '';
    }

    for (let key in sMap) {
        if (tMap[key]) {
            tMap[key]
        }
    }
};