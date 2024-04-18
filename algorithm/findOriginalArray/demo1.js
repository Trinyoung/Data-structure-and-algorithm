var findOriginalArray = function(changed) {
    if (changed.length % 2) return [];
    const changedNum = changed.length/2;
    let num = 0;
    const changedMap = changed.reduce((res, item) => {
        res[item] = (res[item] || 0) + 1;
        return res;
    }, {});
    let res = [];
    if (changedMap[0]) {
        changedMap[0]--;
    }
    const arr = changed.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        if (changedMap[arr[i]] > 0 && changedMap[arr[i] * 2] > 0 && num < changedNum) {
            changedMap[arr[i] * 2]--;
            changedMap[arr[i]]--;
            num++;
            console.log(arr[i], 'changed[i]=======>');
            res.push(arr[i]);
        }
    }
    console.log(res, 'res ------->')
    return res.length === changedNum ? res : [];
};

findOriginalArray([4,4,16,20,8,8,2,10])