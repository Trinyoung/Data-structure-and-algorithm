/*
 * @Author: your name
 * @Date: 2021-03-16 12:50:47
 * @LastEditTime: 2021-03-16 13:16:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\postOrderTraversal\demo1.js
 */
// 后续遍历，从最左边的节点出发，同层级遍历
var postorderTraversal = function(root) {
    const arr = [];
    function postOrder (node) {
        if (node) {
            postOrder(node.left);
            postOrder(node.right);
            arr.push(node.val);
        }
    }
    postOrder(root);
    return arr;
};