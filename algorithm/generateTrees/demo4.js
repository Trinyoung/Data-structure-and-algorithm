const generateTrees = (n) => {
    if (n === 0) {
        return [];
      }
      
    return generateTreesHelper(1, n);
}
function generateTreesHelper(start, end) {
    // 子龙大人啊，所以每个人的都是一样的。
    let res = [];
    // let left = [];
    // let right = [];
    if (start > end) {
        result.push(null);
        return result;
    }
    for (let i = start; i <= end; i++) {
        let left = generateTreesHelper(start, i - 1);
        let right = generateTreesHelper(i + 1, end);
        for (let k = 0; k < left.length; k++) {
            for (let j = 0; j < right.length; j++) {
                const root = new TreeNode(i);
                root.left = left[k];
                root.right = right[j];
                res.push(root);
            }
        }
    }
    
    return res;
}