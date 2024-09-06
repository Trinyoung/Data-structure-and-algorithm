function generateTrees(n) {
    if (n === 0) {
      return [];
    }
    
    return generateTreesHelper(1, n);
}
  
function generateTreesHelper(start, end) {
    const result = [];
    
    if (start > end) {
      result.push(null);
      return result;
    }
    
    for (let i = start; i <= end; i++) {
      const leftSubtrees = generateTreesHelper(start, i - 1);
      const rightSubtrees = generateTreesHelper(i + 1, end);
      
      for (const leftSubtree of leftSubtrees) {
        for (const rightSubtree of rightSubtrees) {
          const root = new TreeNode(i);
          root.left = leftSubtree;
          root.right = rightSubtree;
          result.push(root); // 反推
        }
      }
    }
    
    return result;
}
//   要生成由n个节点组成且节点值从1到n互不相同的不同二叉搜索树，我们可以使用递归的方法。

// 首先，我们需要定义一个函数来生成二叉搜索树。这个函数将接受一个范围参数，表示当前二叉搜索树可以使用的节点值的范围。然后，我们可以使用一个循环来遍历范围内的每个节点值，将其作为根节点，并递归地生成左子树和右子树。

// 具体步骤如下：

// 如果范围的起始值大于结束值，说明当前二叉搜索树为空树，返回一个空节点。
// 创建一个空的结果列表，用于存储生成的二叉搜索树。
// 使用一个循环来遍历范围内的每个节点值，将其作为根节点。
// 对于当前的根节点值，递归地生成左子树和右子树。
// 使用两个嵌套循环来遍历左子树和右子树的所有可能组合。
// 将左子树和右子树的根节点与当前根节点连接起来，形成一个完整的二叉搜索树。
// 将生成的二叉搜索树添加到结果列表中。
// 返回结果列表。