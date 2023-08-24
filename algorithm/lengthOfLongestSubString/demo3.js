var lengthOfLongestSubstring = function(s) { //最优解
    let max = 0;
    let left = 0; // 左指针
    let map = new Map(); // map判断重复
    let sarr = s.split('')

    sarr.forEach((item, index) => {
        if (map.has(sarr[index]) && map.get(sarr[index]) >= left) {
            left = map.get(sarr[index]) + 1;
        }
        map.set(sarr[index], index);
        max = Math.max(max, index-left+1);
    });
    return max;
};