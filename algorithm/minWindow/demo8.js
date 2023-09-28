var minWindow = function (s, t) {
    let m = s.length, n = t.length, res = ''
    if (m < n) return res
    let map = {}
    for (let i = 0; i < n; i++) {
        let tmp = t[i]
        map[tmp] = (map[tmp] || 0) + 1
    }
    let need = n
    let l = 0, r = 0
    while (l < m || r < m) {
        while (r < m && need > 0) {
            let tmp = s[r]
            if (map[tmp] !== undefined) {
                map[tmp]--
                if (map[tmp] >= 0) {
                    need--
                }
            }
            r++
        }
        if (need > 0) return res
        while (need <= 0 && l < r) {
            if (!res.length || res.length > r - l) res = s.slice(l, r)
            let tmp = s[l]
            if (map[tmp] !== undefined) {
                map[tmp]++
                if (map[tmp] > 0) {
                    need++
                }
            }
            l++
        }
    }
    return res
};