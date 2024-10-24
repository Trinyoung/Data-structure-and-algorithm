// 中序遍历和后序遍历构建二叉树；
var buildTree = function(inorder, postorder) {
    const inorderMap = inorder.reduce((map, val, index) => {
        map[val] = index;
        return map;
    }, {});
    function interate(leftEnd, rightEnd, index) {
        if (index === -1) return null;
        const node = new TreeNode(postorder[index]);
        const inorderIndex = inorderMap[postorder[index]];
        const leftNums = inorderIndex - leftEnd;
        const rightNums = rightEnd - inorderIndex;
        if (rightNums > 0) {
            node.right = interate(inorderIndex + 1, rightEnd, index - 1)
        }
        if (leftNums > 0) {
            node.left = interate(leftEnd, inorderIndex - 1, index - rightNums - 1)
        }
        return node;
    }
    return interate(0, inorder.length - 1, postorder.length - 1)
};
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

buildTree([9,3,15,20,7], [9,15,7,20,3])
