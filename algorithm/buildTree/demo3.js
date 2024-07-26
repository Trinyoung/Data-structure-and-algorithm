// 通过前序遍历和中序遍历构建二叉树
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
function buildTree(preorder, inorder) {
    // let index = 0;
    if (index >= preorder.length) return null;
    const inorderMap = inorder.reduce((map, val, index) => {
        map[val] = index;
        return map;
    }, {});
    function interate(leftEnd, rightEnd, index) {
        const node = new TreeNode(preorder[index]);
        const inorderIndex = inorderMap[preorder[index]];
        const leftNums = inorderIndex - leftEnd;
        const rightNums = rightEnd - inorderIndex;
        if (rightNums > 0) {
            node.right = interate(inorderIndex + 1, rightEnd, index + leftNums + 1)
        }
        if (leftNums > 0) {
            node.left = interate(leftEnd, inorderIndex - 1, index + 1)
        }
        return node;
    }
    return interate(0, inorder.length - 1, 0)
}
// 测试用例
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
console.log(JSON.stringify(buildTree(preorder, inorder)));

// 测试预期结果
const result = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}
