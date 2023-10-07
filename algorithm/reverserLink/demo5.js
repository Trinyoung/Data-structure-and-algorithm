var reverseList = function(head) {
    if (!head) {
        return head;
    }
    function reverse(node, newList) {
        if (node) {
            // let newNode = new ListNode(node.val);
            node.next = newList;
            newList = node;
            return reverse(node.next, newList)
        }
        return newList;
    }
    return reverse(head.next, head)
    // return newList;
};