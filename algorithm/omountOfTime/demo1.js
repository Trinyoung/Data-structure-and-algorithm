var amountOfTime = function(root, start) {
    let res = 0;
    function interate(node, num, noReturn) {
        if (node.val === start) {
            if (node.left) {
                interate(node.left, 1, true);
            }
            if (node.right) {
                interate(node.right, 1, true)
            }
            return 1;
        } else {
            let left, right;
            if (noReturn) {
                res = Math.max(num, res)
                if (node.left) {
                    interate(node.left, num+1, true);
                }
                if (node.right) {
                    interate(node.right, num+1, true) 
                }
            } else {
                if (node.left) {
                    left = interate(node.left, 0, false);
                }
                if (node.right) {
                    right = interate(node.right, 0, false) 
                }
                res = Math.max(left||0, right||0, res);
                if (left && node.right) {
                    interate(node.right, left + 1, true)
                }
                if (right && node.left) {
                    interate(node.left, right + 1, true)
                }
                return (left || right) + 1;
            }
        }
    }
    interate(root, 0, false);
    return res;
};
const tree = {
    val: 1,
    left: {
        val: 5,
        right: {
            val: 4,
            left: {
                val: 9
            },
            right: {
                val: 2
            }
        }
    },
    right: {
        val: 3,
        left: {
            val: 10
        },
        right: {
            val: 6
        }
    }
}

console.log(amountOfTime(tree, 3), 'tree is dddd')