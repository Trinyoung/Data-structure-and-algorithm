var letterCombinations = function(digits) {
    const digitMap = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };
    let result = [];
    for (let i = 0; i < digits.length; i++) {
        let digitItems = digitMap[digits[i]];
        if (i === 0) {
            result = digitItems;
        } else {
            const periodResult = [];
            
            for(let k = 0; k < result.length; k++) {
                const resultItem = result[k];              
                for (let j = 0; j < digitItems.length; j++ ) {
                    const digitItem = digitItems[j];
                    periodResult.push(resultItem + digitItem);
                }
            }
            result = periodResult;
        }
    }
    return result;
};

console.log(letterCombinations('23'), '======================?');