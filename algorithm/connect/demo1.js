var connect = function(root) {
    function interate(node, parent, direction) {
        if (node) {
            if (direction === 'left') {
                node.next = parent?.right?? interateNext(parent?.next);
            } else {
                node.next = interateNext(parent?.next);
            }
            interate(node.right, node, 'right');
            interate(node.left, node, 'left');
            
        }
    }
    function interateNext(node) {
        if (node?.left) {
            return node.left
        }
        if (node?.right) {
            return node.right;
        }
        if (node?.next) {
            console.log();
            return interateNext(node.next)
        }
        return null;
    }
    interate(root, null);
    return root;
};
const root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: {
                val: 7,
            }
        },
        right: {
            val: 5
        }
    },
    right: {
        val: 3,
        right: {
            val: 6,
            right: {
                val: 8
            }
        }
    }
};

connect(root);