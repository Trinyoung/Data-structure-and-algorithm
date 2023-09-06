function reverse(head) {
    // const next = head.next;
    // reverse(head.next);
    // head.next.next = head;
    // const next = head.next;
    // head.next = reverse(next.next);
    // next.next = head;
    // return next;
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