function swapPairs(head) {
    if (head === null || !head.next ) {
        return head;
    }
    const next = head.next;
    head.next = swapPairs(next.next);
    next.next = head;
    return next;
}