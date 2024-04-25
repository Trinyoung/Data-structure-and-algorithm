var maxAncestorDiff = function(root) {
    let res = -Infinity;
    function interate(node, pre) {
        if (pre) {
            const left = node.left;
            const right = node.right;
            res = Math.max(res, Math.abs(node.val - pre.val));
            if (left) {
                if ((left.val > node.val && node.val > pre.val) || (left.val < node.val && node.val < pre.val)) {
                    interate(left, pre);
                } else {
                    interate(left, node);
                }
            }
            if (right) {
                if ((right.val > node.val && node.val > pre.val) || (right.val < node.val && node.val < pre.val)) {
                    interate(right, pre);
                } else {
                    interate(right, node);
                } 
            }
        } else {
            if (node.left) interate(node.left, node);
            if (node.right) interate(node.right, node);
        }
    }
    if (root) interate(root, null)
    return res;
};
maxAncestorDiff({
    val: 8,
    left: {
        val: 3,
        left: {
            val: 1,
            left: null,
            right: null
        },
        right: {
            val: 6,
            left: {
                val: 4,
                left: null,
                right: null
            },
            right: {
                val: 7,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 10,
        left: {
            val: 14,
            left: null,
            right: null
        },
        right: {
            val: 13,
            left: null,
            right: null
        }
    }
})