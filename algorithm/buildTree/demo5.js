class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
// 通过前序遍历和中序遍历构建二叉树
function buildTree(preorder, inorder) {
    const inorderMap = new Map();
    inorder.forEach((item, index) => {
        inorderMap.set(item, index);
    })

    function buildTree2(index, leftStart, rightEnd) {
        const node = new TreeNode(preorder[index]);
        // const leftLength = inorderMap.get(preorder[index]) - leftStart;
        const inorderIndex = inorderMap.get(preorder[index]);
        const leftNums = inorderIndex - leftStart;
        const rightNums = rightEnd - inorderIndex;
        if (rightNums > 0) {
            node.right = buildTree2(index + leftNums + 1, inorderIndex + 1, rightEnd);
        }
        if (leftNums > 0) {
            node.left = buildTree2(index + 1, leftStart, inorderIndex - 1);
        }
        // node.left = buildTree2(index + 1, leftStart, inorderIndex - 1);
        return node;
    }
    return buildTree2(0, 0, inorder.length - 1);
}
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
console.log(JSON.stringify(buildTree(preorder, inorder)))
const tree = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};