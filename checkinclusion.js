/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s2.length > s1.length) {
        return false;
    }
    const length2 = s2.length;
    const length1 = s1.length;
    let j = 0;
    let i = 0;
    let k = s2.length;
    while (i < length1) {
        if(s1[i]===s2[j]){
            i++;
            j++;
        }

        if(s1[i]!==s2[j]){
            j=0;
        }        
    }

};