/*
 * @Author: your name
 * @Date: 2021-03-16 13:16:59
 * @LastEditTime: 2021-03-16 13:40:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\postOrderTraversal\demo2.js
 */
var postorderTraversal = function (root) {
    let ret = [];
    if (!root) {
        return ret
    }

    let stack = [root]

    while (stack.length !== 0) {
        let node = stack.shift();
        ret.unshift(node.val)
        if (node.left !== null) {
            stack.unshift(node.left);
        }
        if (node.right !== null) {
            stack.unshift(node.right);
        }
    }
    return ret
};