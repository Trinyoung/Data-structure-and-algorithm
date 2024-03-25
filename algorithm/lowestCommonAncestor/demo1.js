var lowestCommonAncestor = function(root, p, q) {
    let dones = [false, false];
    let res = null;
    function interate(node){
        if (node) {
            console.log(node.val, p.val, q.val);
            if (node.val === p.val) {
                dones[0] = true;
                // node['p'] = true;
                return 'p';
            }
            if (node.val === q.val) {
                dones[1] = true;
                // node['q'] = true;
                return 'q';
            }
            if (dones.includes(false)) {
                const left = interate(node.left);
                const right = interate(node.right);
                console.log(left, right, '=======<');
                if (left && right) {
                    res = node.val;
                    console.log(res, 'res is ddddd');
                    return;
                }
                if (left) {
                    return left;
                }
                if (right) {
                    return right;
                }
            }
        }
    }
    interate(root);
    return res;
};