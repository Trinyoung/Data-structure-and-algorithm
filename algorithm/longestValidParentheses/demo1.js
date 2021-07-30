var longestValidParentheses = function (s) {
    if (s.length < 2) {
        return 0;
    }
    let max = 0;
    let left = '(';
    let right = ')';
    let leftNum = 0;
    let rightNum = 0;
    for (let i = 0; i < s.length; i++) {
        if (leftNum === 0 && s[i] === right) {
            leftNum = 0;
            if (max < rightNum) {
                max = rightNum;
            }
            rightNum = 0;
            continue;
        }
        if (left === s[i]) {
            leftNum++;
        } else {
            rightNum++;
            leftNum--;
        }
    }
    return max * 2;
};
console.log(longestValidParentheses('((((((()))(()()()()'));