var buildTree = function(inorder, postorder) {
    const inorderMap = new Map()
    const postorderMap = new Map()
    inorder.forEach((item, i) => inorderMap.set(item, i))
    postorder.forEach((item, i) => postorderMap.set(item, i))
    function interate(nodeVal, nodePIndex) {
        if (inorderMap.has(nodeVal) && postorderMap.has(nodeVal)){
            const node = new TreeNode(nodeVal); // 定义一个节点；
            const nodeValIndex = inorderMap.get(nodeVal); // 该节点所处中序数组里的位置；
            inorderMap.delete(nodeVal);
            // 确定它的左节点和右节点；
            // if (inorderMap.has(postorder[nodePIndex-1]) && postorderMap.has(inorder[nodeValIndex - 1])){
            node.right = interate(postorder[nodePIndex-1], nodePIndex - 1);
            // }
            // if () {
            const NPI = postorderMap.get(inorder[nodeValIndex - 1]);
            postorderMap.delete(inorder[nodeValIndex - 1]);
            node.left = interate(inorder[nodeValIndex - 1], NPI);
            return node;
        }
       
        // }
        
    }
    return interate(postorder[postorder.length - 1], postorder.length - 1);
};
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

 buildTree([9,3,15,20,7], [9,15,7,20,3])