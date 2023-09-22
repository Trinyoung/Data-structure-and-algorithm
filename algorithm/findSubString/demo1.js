/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const wordMap = words.reduce((res, item) => {
        res[item] = res[item]? res[item] + 1 : 1;
        return res;
    }, {});
    const sliceLength = words[0].length;
    let i = 0;
    const result = [];
    while(i < s.length) {
        let slice = s.substr(i, sliceLength);
        let j = words.length;
        let k = i;
        let wordMap2 = {...wordMap}
        
        while(j > 0 && wordMap2[slice]) {
            console.log(wordMap2, slice, 'wordMap---------------->');
            j--;
            wordMap2[slice] --;
            k+=sliceLength;
            slice = s.substr(k, sliceLength);
            console.log(j, slice, 'slice-----------');
           
        }
        if (j === 0) {
            result.push(i);
            i+= sliceLength;
        } else {
            i++;
        }
    }
    return result;
};
console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));