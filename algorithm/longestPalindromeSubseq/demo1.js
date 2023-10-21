var longestPalindromeSubseq = function(s) {
    let result = 0;
    for (let i =0; i < s.length; i++) {
        expandAroundCenter(i, i, -1);
        expandAroundCenter(i, i + 1, 0);
    }
    function expandAroundCenter(left, right, len) {
        if (left >=0 && right < s.length) {
            if (s[left] === s[right]) {
                left--;
                right++;
                len+=2;
                expandAroundCenter(left, right, len);
            } else {
                expandAroundCenter(left, ++right, len);
                expandAroundCenter(--left, right, len);
            }
        } else {
          result = Math.max(result, len);
        }
    }
    return result;
};