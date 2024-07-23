// 先序遍历和中序遍历构建二叉树
var buildTree = function(preorder, inorder) {
    const inorderMap = inorder.reduce((acc, cur, i) => {
        acc[cur] = i;
        return acc;
    }, {});
    let index = 0;
    function interate(leftEnd, rightEnd) {
        // 左子节点的根节点是
        if (index >= preorder.length) return null;
        const nodeVal = preorder[index];
        const node = new TreeNode(nodeVal);
        const inorderIndex = inorderMap[nodeVal];
        inorder[inorderIndex] = null;
        if (preorder[index + 1] && inorderMap[preorder[index + 1]] > leftEnd && inorderMap[preorder[index + 1]] < inorderIndex) {
            index++;
            node.left = interate(leftEnd, inorderIndex);
        }
        if (preorder[index + 1] && inorderMap[preorder[index + 1]] < rightEnd && inorderMap[preorder[index + 1]] > inorderIndex) {
            index++;
            node.right = interate(inorderIndex, rightEnd);
        }
        
        return node;
    }
    return interate(-1, inorder.length)
};
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
console.log(JSON.stringify(buildTree([1, 2, 3], [2, 3, 1])))