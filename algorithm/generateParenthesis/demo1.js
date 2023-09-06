/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // 三个左，三个右；
    const left = "(";
    const right = ")";
    // 只要前面的）的数量不比(多即为所有答案；
    const result = [];
    // 典型的二叉树写法；
    function generator2(res, leftNum, rightNum) {
        console.log(res, leftNum, rightNum, 'res---------')
        if (leftNum === rightNum && leftNum > 0) {
            return generator2(res+=left, leftNum--, rightNum)
        } else if (leftNum < rightNum && leftNum > 0) {
            let a = res + left;
            let b = res + right;
            generator2(a, leftNum--, rightNum)
            generator2(b, leftNum, rightNum--)
        } else if (leftNum < rightNum && leftNum === 0) {
            generator2(res+=right,leftNum, rightNum--)
        } else if (leftNum === 0 && rightNum ===0) {
            result.push(res);
        }
    }
    generator2('', n, n)
    return result;
};