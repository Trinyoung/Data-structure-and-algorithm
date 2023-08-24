var reverseBetween = function(head, left, right) {
    let front = null;
    let current = head;
    let after = null;
    let newHead = null;
    let pre = null;
    let i = 1;
    while(i <= right) {
        let next = current.next;
        if (i < left) {
            front = current;
            pre = current;
        }
        if (i >= left && i <= right) {
            current.next = pre;
            pre = current;
        }
        if (i === right) {
            after = next;
        }
        
        current = next;
        
        i++;
    }
    front.next = pre;
    pre.next = after;
    return front;
};