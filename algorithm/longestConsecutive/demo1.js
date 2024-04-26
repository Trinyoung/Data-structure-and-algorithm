var longestConsecutive = function(nums) {
    const map = new Map();
    let max = 1;
    // for(let value of nums) {
    //     map.set(value, 1);
    // }
    for (let value of nums) {
        map.set(value, 1 + (map.get(value + 1)?? 0) + (map.get(value - 1) ?? 0));
        if (map.get(value + 1)) {
            map.set(value + 1, map.get(value));
        }
        if (map.get(value - 1)) {
            map.set(value - 1, map.get(value));
        }
        
        max = Math.max(map.get(value), max);
    }
    console.log(map);
    return max;
};
longestConsecutive([0,3,7,2,5,8,4,6,0,1]);