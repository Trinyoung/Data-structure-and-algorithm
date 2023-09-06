// 默写demo3
function longestValidParentheses(s) {
    let [left, right, maxLength] = [0, 0, 0];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            left ++;
        } else {
            right ++;
        }
        if (left === right) {
            maxLength = Math.max(maxLength, 2 * right);
        } else if (right > left) {
            left = right = 0;
        }
    }
    left = right = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ')') {
            right ++;
        } else {
            left ++;
        }
        if (left === right) {
            maxLength = Math.max(maxLength, 2 * left);
        } else if (left > right){
            left = right = 0;
        }
    }
    return maxLength;
}