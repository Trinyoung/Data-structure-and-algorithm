// 升序链表， 将其转化成平衡二叉树
function sortedListToBST(head) {
    // 边界情况：空链表返回null
    if (!head) {
      return null;
    }
    
    // 边界情况：只有一个节点，直接返回该节点作为根节点
    if (!head.next) {
      return new TreeNode(head.val);
    }
    
    // 利用快慢指针找到中间节点
    let slow = head;
    let fast = head;
    let prev = null;
    while (fast && fast.next) { // 快慢指针fast 走两步， slow走一步，当fast走到尾节点时，slow刚好走到中间节点；
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    
    // 断开链表，将前半部分链表的尾节点指向null
    prev.next = null;
    
    // 以中间节点为根节点，递归地构建左右子树
    const root = new TreeNode(slow.val);
    root.left = sortedListToBST(head);
    root.right = sortedListToBST(slow.next);
    
    return root;
  }
  