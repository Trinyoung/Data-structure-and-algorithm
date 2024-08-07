function reverse(head) {
    function reverseLink(pre, current) {
        if (current.next) {
            reverseLink(current, current.next);
        } else {
            return current;
        }
        current.next = pre;
    }
    reverseLink(null, head);
}