var removeNthFromEnd = function(head, n) {
    function interator(node) {
        if (node.next) {
            node.next.pre = node;
            return interator(node.next);
        } else {
            return reverseIntervator(node, 1)
        }
    }
    function reverseIntervator(node, index) {
        if (index !== n) { // 倒序
            delete node.next?.pre;
        } else {
            if (node.pre) {
                node.pre.next = node.next;
            } else {
                head = node.next;
            }
        }
        index ++;
        if (node.pre) {
            return reverseIntervator(node.pre, index)
        }
    }
    interator(head);
    return head;
};