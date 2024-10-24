/* 
二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。

路径和 是路径中各节点值的总和。

给你一个二叉树的根节点 root ，返回其 最大路径和 。
 */
var maxPathSum = function(root) {
    let res = -Infinity;
    
    function interate(node) {
        if (!node) return 0;
        let left = Math.max(interate(node.left), 0);
        let right = Math.max(interate(node.right), 0);
        res = Math.max(res, left + right + node.val);
        return Math.max(left, right) + node.val;
    }
    interate(root);
    return res;
};