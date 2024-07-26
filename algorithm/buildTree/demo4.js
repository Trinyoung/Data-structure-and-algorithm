// 通过先序遍历和后序遍历来构建二叉树
// 先序遍历和后序遍历不可遍历成一个唯一的二叉树；
function buildTree(preorder, postorder) {
    function interate(index) {
        const node = new TreeNode(preorder[index]);
    }
}
const preorder = [3, 9, 20, 15, 7];
const postorder = [9, 15, 7, 20, 3];
