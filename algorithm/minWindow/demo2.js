var minWindow = function(s, t) {
    const tObj = {};
    for (let i = 0; i < t.length; i++) {
        tObj[t[i]] = tObj[t[i]]? tObj[t[i]]++: 1;
    }
    let rest = t.length;
    let i = 0;
    let resultArr = [];
    let sObj = {};
    console.log(tObj, 'tObj');
    while (i < s.length) {
        if (tObj[s[i]] ) {
            if (!sObj[s[i]]?.length || sObj[s[i]].length < tObj[s[i]]) {
                rest --;
            }
            resultArr.push(i);
            if (sObj[s[i]]?.length) {
                sObj[s[i]].push(i);
            } else {
                sObj[s[i]] = [i];
            }
            
            if (sObj[s[i]].length > tObj[s[i]]) {
                sObj[s[i]].shift();
            } 
        }
        i++;
    }
    let start = -1;
    let end = -1;
    Object.entries(sObj).forEach(([key, value]) => {
        if (value[0] < start || start === -1) start = value[0];
        if (value[value.length -1] > end || end === -1) end = value[value.length -1];
    });
    console.log(start, end, 'start, end', sObj);
    return start > -1 && end > start && s.substr(start, end - start + 1) || '';
};
console.log(minWindow("cabwefgewcwaefgcf", "cae"));

// "cabwefgewc waefgcf"
// "0123456789 0123456" // 9 11 12;