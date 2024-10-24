var flatten = function(root) {
    if (!root) return null;
    let head = new TreeNode(root.val);
    function interate(node, head) {
        if (!node) return head;
        head.right = new TreeNode(node.val);
        head.left = null;
        head = head.right;
        const newHead = interate(node.left, head);
        return interate(node.right, newHead);
    }
    const newHead = interate(root.left, head);
    interate(root.right, newHead);
    return head;
};