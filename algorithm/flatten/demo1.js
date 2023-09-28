var flatten = function (root) {
    if (!root) return;
    flatten(root.left);
    flatten(root.right);
    let left = root.left;
    let right = root.right;
    root.left = null;
    root.right = left;
    let p = root;
    while (p.right) {
        p = p.right;
    }
    p.right = right;
}