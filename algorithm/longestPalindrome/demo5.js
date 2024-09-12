const demo5 = (s) => {
    if (!s) return s;
    let maxString = s[0];
    function getLongest(left, right, length) {
        if (s[left] !== s[right]) {
            return s.substring(left + 1, right);
        } else {
            if (left > 0 && right < s.length - 1) return getLongest(left - 1, right+1, length+2);
            
            return s.substring(left, right + 1);
        }
    }
    for (let i = 1; i < s.length; i++) {
        const string1 = getLongest(i, i, 1);
        const string2 = getLongest(i - 1, i, 2);
        maxString = (maxString.length > string1.length && maxString.length > string2.length)? maxString: string1.length > string2.length? string1: string2;
    }
    return maxString;
}