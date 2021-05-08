/*
 * @Author: your name
 * @Date: 2021-03-16 12:44:50
 * @LastEditTime: 2021-03-16 12:51:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\preorderTraverse\demo2.js
 */
// 迭代算法
var preorderTraversal = function(root, ret = []) {

    if(!root) {
        return ret
    }

    let stack = []
    stack.push(root)

    while(stack.length !== 0) {
        let node = stack.pop();
        ret.push(node.val)
		if (node.right !== null) {
			stack.push(node.right);
		}

		if (node.left !== null) {
			stack.push(node.left);
		}
    }

    return ret
};