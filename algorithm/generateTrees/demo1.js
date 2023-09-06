const generateTress = (n) => {
    const res = [];
    function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
    let rests = [];
    for(let i = 1; i <= n; i++) {
        rests.push(i);
    }
    function interate(rests, res) {
        let newRes = [];
        for (let i = 0; i < rests.length; i++) {
            const newRests = [...rests];
            if (rests.length === n) { // 第一次进来
                newRests.splice(i, 1);
                node = new TreeNode(rests[i]);
                root = node;
                res.push(node);
                // interate(newRests, newRes)
                break;
            }
            
            const node = new TreeNode(rests[i]);
            for (let j = 0; j < res.length; j++) {
                const root = res[j];
                interateTree(root, node);
                newRes.push(root);
            }
        }
        return newRes;
    }
    function interateTree(root, node) {
        if (root.val > node.val) {
            if (root.left) {
                interateTree(root.left, node)
            } else {
                root.left = node;
            }
        }
        if (root.val < node.val) {
            if (root.right) {
                interateTree(root.right, node)
            } else {
                root.right = node;
            }
        }
    }
    interate(rests, res);
}