var swapPairs = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    const next = head.next; // 1. 保存下一个节点；
    // head.next = next.next; // 2. 将当前节点的 next 指向下下个节点；
    head.next = swapPairs(next.next); // 3. 递归调用，将下下个节点作为当前节点；
    return next;
};