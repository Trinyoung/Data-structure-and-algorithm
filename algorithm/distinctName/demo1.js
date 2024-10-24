var distinctNames = function(ideas) {
    const letterMap = ideas.reduce((res, item, index) => {
        if (res.firstMap[item[0]]) {
            res.firstMap[item[0]].push(index);
        } else {
            res.firstMap[item[0]]=[index]
        }
        if (res.lastMap[item.substring(1)]) {
            res.lastMap[item.substring(1)].push(index)
        } else {
            res.lastMap[item.substring(1)] = [index]
        }
        return res;
    }, {
        firstMap: {},
        lastMap: {}
    })
    // 4 - 1 - 1 = 2 * 2 = 4 
    
    let res = 0;
    let i = 0;
    const {firstMap, lastMap}= letterMap;
    console.log(firstMap, lastMap, '========>');
    // (3 - 0 - 1) * 2 = 4;
    // (2 - 0 - 1) * 2 = 2;
    // 
    const total = ideas.length;
    while ( i < ideas.length - 1) {
        let item = ideas[i];
        let firstLetter= item[0];
        let restLetter = item.substring(1);
        firstMap[firstLetter].shift();
        lastMap[restLetter].shift();
        
        // res += (total - i - 1 - firstMap[firstLetter].length + 1 -lastMap[restLetter].length + 1) * 2;
        const num = total - i - 1 - firstMap[firstLetter].length - lastMap[restLetter].length;
        res += num * 2;
        
        i++;
    }
    return res;
};
ideas = ["coffee","donuts","time","toffee"] 
distinctNames(ideas)