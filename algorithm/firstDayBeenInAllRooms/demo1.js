var firstDayBeenInAllRooms = function(nextVisit) {
    const n = nextVisit.length;
    let current = 0;
    let nums = 0; //访问的次数
    let resMap = nextVisit.reduce((res, item, index) => {
        res[index] = 0;
        return res;
    }, {})
    let res = nextVisit.length; // 剩余的个数
    while(res) {
        console.log(current, nums, 'current ');
        if (!resMap[current]) {
            res--;
        }
        resMap[current] ++;
        nums = (nums + 1) % (1e9 + 7);
        current =  resMap[current]%2 ? nextVisit[current]: (current + 1) % n;
    }
    return nums - 1;
};
console.log(firstDayBeenInAllRooms([0, 0]));