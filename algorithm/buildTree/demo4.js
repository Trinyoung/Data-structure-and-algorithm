// 中序遍历和后序遍历可遍历成一个唯一的二叉树；
// 先序遍历和后序遍历不可遍历成一个唯一的二叉树；
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
function buildTree(inorder, postorder) {
    const inorderMap = {};
    inorder.forEach((item, index) => {
        inorderMap[item] = index;
    })
    /* 
        @params:
        index: postorder 中的所在的索引
        leftEnd: 当前节点在inorder中左子树的结束位置的索引；
        rightEnd: 当前节点在inorder中右子树的结束位置的索引；
     */
    function interate(index, leftEnd, rightEnd) { 
        const node = new TreeNode(postorder[index]); // 最后一个是根节点；
        const inorderIndex = inorderMap[postorder[index]]; // 根节点在中序遍历中的位置；
        const leftNums = inorderIndex - leftEnd; // 左子树节点个数；
        const rightNums = rightEnd - inorderIndex; // 右子树节点个数；
        node.left = leftNums > 0 ? interate(index - rightNums - 1, leftEnd, inorderIndex - 1) : null;
        node.right = rightNums > 0 ? interate(index - 1, inorderIndex + 1, rightEnd) : null;
        return node;
    }
    return interate(postorder.length - 1, 0, inorder.length - 1);
}
const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];
console.log(JSON.stringify(buildTree(inorder, postorder)))
