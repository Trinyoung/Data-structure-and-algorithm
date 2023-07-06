var lengthOfLongestSubstring = function(s) {
    let letterObj = {};
    let maxLength = 0;
    let length = 0;
    let start = 0;
    for (let i = 0; i < s.length; i ++) {
        if(letterObj.hasOwnProperty(s[i]) && letterObj[s[i]] >= start ) {
            maxLength = maxLength > length ? maxLength: length;
            length = i - letterObj[s[i]];
            start = letterObj[s[i]] + 1;
            letterObj[s[i]] = i;
        } else {
            length++;
            letterObj[s[i]] = i;
        }
    }
    return maxLength> length? maxLength:length;
};
// start 0, 2, 4,