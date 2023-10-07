// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

var swapPairs = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    const next = head.next;
    head.next = swapPairs(next.next);
    next.next = head;
    return next;
};

// 作者：LeetCode-Solution

// 给你一个链表，进行整体反转，即头变成了尾，尾变成了头，返回反转后的链表，你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
