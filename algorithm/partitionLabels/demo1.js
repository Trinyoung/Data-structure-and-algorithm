var partitionLabels = function(s) {
    const strMap = s.split('').reduce((res, item, index) => {
        if (res[item]) {
            res[item][0] = Math.min(res[item][0]??Infinity, index);
            res[item][1] = Math.max(res[item][1]??-Infinity, index);
        } else {
            res[item] = [index, index];
        }
        return res;
    }, {});
    // 左右两个区间；
    let arr = [];
    console.log(strMap, Object.keys(strMap).length, 'strMap ====')
    for (let key in strMap) {
        const value = strMap[key]
        let isMix = false;
        for(let i = 0; i < arr.length; i++) {
            if (arr[i][0] < value[1] && arr[i][1] > value[0]) {
                console.log('here')
                arr[i][0] = Math.min(arr[i][0], value[0]);
                arr[i][1] = Math.max(arr[i][1], value[1]);
                isMix = true;
            }
        }
        // console.log(isMix, 'mix ')
        // console.log('key:', key, value)
        if (isMix === false) {
            arr.push(value)
        };
    }
    console.log(arr.length, 'arr lenght')
    return arr.map(item => (item[1] - item[0] + 1));
};
partitionLabels("ababcbacadefegdehijhklij")