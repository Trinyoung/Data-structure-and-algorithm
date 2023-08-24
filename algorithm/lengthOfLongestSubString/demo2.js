var lengthOfLongestSubstring = function(s) {
    if (!s) return 0
    const set = new Set()
    let i = 0 , res = j = 1
    set.add(s[0])
    while (j !== s.length) {
        if (set.has(s[j])) {
            res = Math.max(set.size, res)
            while (s[i] !== s[j]) {
                set.delete(s[i++])
            }
            i++
        }
        set.add(s[j])
        j++
    }
    return Math.max(set.size, res)
};