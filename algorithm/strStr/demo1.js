var strStr = function (haystack, needle) {
    let start = 0;
    let end = needle.length - 1;
    if (haystack === "" && needle === "") {
        return 0;
    }
    if (haystack === needle) {
        return 0
    }
    let result = -1;
    while (end <= haystack.length - 1) {
        let left = 0;
        let right = needle.length - 1;
        let left2 = start;
        let right2 = start + needle.length - 1;
        while (left <= right && haystack[left2] === needle[left] && haystack[right2] === needle[right]) {
            left++;
            right--;
            left2++;
            right2--;
        }
        if (left <= right) {
            start++;
            end++;
        } else {
            return result = start;
        }
    }
    return result;
};
