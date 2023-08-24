var rotateRight = function (head) {
    let p = null;
    let c = head;
    let newHead = null;
    while(c) {
       newHead = c;
       newHead.next = p;
       c = c.next;
       p = c;
    }
    return newHead;
}