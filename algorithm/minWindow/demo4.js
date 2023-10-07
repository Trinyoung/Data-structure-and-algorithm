var minWindow = function(s, t) {
    const tObj = {};
    let res = '';
    for (let i = 0; i < t.length; i++) {
        tObj[t[i]] = tObj[t[i]]? tObj[t[i]]+1: 1;
    }
    let rest = t.length;
    let i = 0;
    let resultArr = [];
    let sObj = {};
    let min = s.length;
    let spliceNum = 0;
    while (i < s.length) {
        if (tObj[s[i]] ) {
            if (!sObj[s[i]]?.length || sObj[s[i]].length < tObj[s[i]]) { // 查看事否全包围，如果没有继续减
                rest --;
            }
            resultArr.push(i); // 将所有的下标都存起来;
            if (sObj[s[i]]?.length) {
                sObj[s[i]].push(i);
            } else {
                sObj[s[i]] = [i];
            }
            
            if (sObj[s[i]].length > tObj[s[i]]) { // 如果超过了，就要清理掉最前面的;
                const index  = sObj[s[i]].shift();
                spliceNum++;
                
                if (index === resultArr[0]) {
                    resultArr.splice(0, spliceNum);
                }
                // resultArr.splice(resultArr.indexOf(index), 1);
            } 
            if (!rest) {
                let distance = resultArr[resultArr.length -1] - resultArr[0];
                if (min < distance) {
                    res = s.substr(resultArr[0], distance + 1);
                    min = distance;
                }
            }
        }
        i++;
    }
    return rest? '': res;
};