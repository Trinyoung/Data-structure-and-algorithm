function reverseKGroup(head, k) {
    const length = getLength(head);
    if (!head || !head.next || length < k) {
        return head;
    }
    let c = Math.floor(length/k);
   
}

function getLength(head) {
    let length = 0;
    while (head) {
        length++;
        head = head.next;
    }
    return length;
}

function reverse(head, current, i, k, origin, c) {
    if (!head || !head.next) {
        return head;
    }
    if (i === k) {
        i = 1;
        origin.next = current.next;
        c--;
        return reverse(current, current.next, i, k, current, c);
    }
    const next = current.next;
    current.next = head;
    return reverse(current, next);
}