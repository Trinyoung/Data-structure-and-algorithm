var takeCharacters = function(s, k) {
    const cnt = {
        a: 0,
        b: 0,
        c: 0
    };
    const len = s.length;
    let ans = len;

    for (let i = 0; i < len; i++) {
        cnt[s[i]]++;
    }

    if (cnt.a >= k && cnt.b >= k && cnt.c >= k) {
        ans = Math.min(ans, len);
    } else {
        return -1;
    }

    let l = 0;
    for (let r = 0; r < len; r++) {
        cnt[s[r]]--;
        while (l < r && (cnt.a < k || cnt.b < k || cnt.c < k)) {
            cnt[s[l]]++;
            l++;
        }
        if (cnt.a >= k && cnt.b >= k && cnt.c >= k) {
            ans = Math.min(ans, len - (r - l + 1));
        }
    }

    return ans;
};