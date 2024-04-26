var findMaxForm = function(strs, m, n) {
    const strsMap = strs.reduce((res, item) => {
        let zeroNum = 0;
        let oneNum = 0;
        for (let i = 0; i < item.length; i++) {
            if (item[i] === '0') {
                zeroNum++;
            }
            if (item[i] === '1') {
                oneNum++;
            }
        }
        res.push([zeroNum, oneNum]);
        return res;
    }, []);
    let dp = new Array(strs.length).fill({
        zeroNum: 0,
        oneNum: 0
    });
    let zeros = 0;
    
    let ones = 0;
    let max = 0;
    for (let i = 0; i < strsMap.length; i++) {
        const item = strsMap[i];
        const [zeroNum, oneNum] = item;
        for (let j = 0; j < i; j++) {
            
        }
    }

};