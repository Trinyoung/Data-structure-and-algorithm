// 给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。
// 输入：n = 3
// 输出：[[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]

var generateTrees = function(n) {
    if(n < 1) {
      return []
    }
    return getAns(1, n)
  
    function getAns(start, end) {
      const list = []
  
      if(start > end) {
        list.push(null)
        return list
      }
  
      for(let i = start; i <= end; i++) {
          let lefts = getAns(start, i - 1)
          let rights = getAns(i + 1, end)
  
          for(let l of lefts) {
              for (let r of rights) {
                  let root = new TreeNode(i)
                  root.left = l
                  root.right = r
                  list.push(root)
              }
          }
      }
      return list
    }
  };
