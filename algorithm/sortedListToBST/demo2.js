// 错误的解题方式；
// 给定一个单链表的头节点  head ，其中的元素 按升序排序 ，将其转换为高度平衡的二叉搜索树。

// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差不超过 1。
function sortedListToBST(head) {
    let length = 0; // 得到它的长度；
    while(head.next) {
        length++;
        head = head.next;
    }
    let root = null;
    function buildTree(head, index, treeNode) {
        
    }

    return buildTree(head, 0, null);
}