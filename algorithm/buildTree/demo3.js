var buildTree = function(preorder, inorder) {
    const inorderMap = inorder.reduce((acc, cur, i) => {
        acc[cur] = i;
        return acc;
    }, {});
    function interate(leftEnd, rightEnd, index) {
        if (index >= preorder.length) return null
        const node = new TreeNode(preorder[index]);
        const inorderIndex = inorderMap[node.val];
        // 左子树的数量
        const leftNums = inorderIndex - leftEnd;
        const rightNums = rightEnd - inorderIndex;
        node.right = rightNums ? interate(inorderIndex + 1, rightEnd, index + leftNums + 1) : null;
        node.left = leftNums > 0 ? interate(leftEnd, inorderIndex - 1, index + 1) : null;
        // 右子树的数量
        return node;
    }
    interate(0, inorder.length - 1, 0);
}

 
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
