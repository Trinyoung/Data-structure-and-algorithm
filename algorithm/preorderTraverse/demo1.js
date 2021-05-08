/*
 * @Author: your name
 * @Date: 2021-03-16 12:43:27
 * @LastEditTime: 2021-03-16 13:04:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\preorderTraverse\demo1.js
 */
// 先序遍历，就是 从根节点出发，依次遍历左节点和右节点。
// 递归算法
var preorderTraversal = function(root) {
    const arr = [];
    function orderTraversal (node) {
        if (node!==null) {
            arr.push(node.val);
            orderTraversal(node.left);
            orderTraversal(node.right)
        }
    }
    orderTraversal(root);
    return arr;
};