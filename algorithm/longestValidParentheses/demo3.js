// 步骤一：
// 步骤二：

var longestValidParentheses = function (s) {
    let left = 0, right = 0, maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            left++;
        } else {
            right++;
        }
        if (left === right) {
            maxLength = Math.max(maxLength, 2 * right);
        } else if (right > left) { // 如果right 大于 left 那么从左往右就没有了有效的括号了
            left = right = 0;
        }
    }
    left = right = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == '(') {
            left++;
        } else {
            right++;
        }
        if (left == right) {
            maxLength = Math.max(maxLength, 2 * left);
        } else if (left > right) {
            left = right = 0;
        }
    }
    return maxLength;
};
console.log(longestValidParentheses('()))))(((('), 'longestValidParentheses ==================>');
console.log(longestValidParentheses("(())()()))"));
