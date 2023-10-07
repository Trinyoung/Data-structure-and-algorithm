var reverseKGroup = function (head, k) {
    if(!head || !head.next) {
        return head;
    }
    let i = 1;
    reverse(head, head.next, i, k, head);
}

var reverse = function (head, current, i, k, origin) {
    if(!head || !head.next ) {
        return head;
    }
    if (i === k){
        i = 1;
        origin.next = current.next;
    }
    const next = current.next;
    current.next = head;
    i++;
    return reverse(current, next, i, k);
}

