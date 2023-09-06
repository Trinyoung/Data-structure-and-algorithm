var reverseList = function(head) {
    var pre = null;
    var curr = head;

    while(curr) {
        var next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }

    return pre;
    
};
// // 以上算法的时间复杂度是 O(N)，其中 N 指的是链表的节点数量。空间复杂度是 O(1)。