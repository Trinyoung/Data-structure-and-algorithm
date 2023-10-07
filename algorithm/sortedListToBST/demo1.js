// 错误的解题方式；
function sortedListToBST(head) {
    let length = 0; // 得到它的长度；
    while(head.next) {
        length++;
        head = head.next;
    }
    let root = null;
    function buildTree(head, index, treeNode) {
        const next = head.next;
        if (index < Math.floor(length/2)) {
            let current = new TreeNode(head.val);
            current.left = treeNode;
            return buildTree(next, index + 1, current);
        }
        if  (index === Math.floor(length/2)) {
            root = new TreeNode(head.val);
            root.left = treeNode;
            return buildTree(next, index+1, root);
        }
        if (index > Math.floor(length/2)) {
            treeNode.right = new TreeNode(head.val);
            return buildTree(next, index + 1, treeNode.right);
        }
    }

    return buildTree(head, 0, null);
}