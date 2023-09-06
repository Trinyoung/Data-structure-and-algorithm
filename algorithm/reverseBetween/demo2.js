var reverseBetween = function(head, left, right) {
    let n = 1;
    let rightHead = null;
    function reverse(head) {
        if (!head || !head.next || n === right - 1) {
            if (n === right -1 && head?.next) {
                rightHead = head.next;
            }
            return head;
        }
        const next = head.next;
        head.next = null;
        n++;
        const newHead = reverse(next);
        next.next = head;
        return newHead;
    }
    let rightFirst = null;
    let leftLast = null;
    function interate(head) {
        if (n < left - 1) {
            n++;
            return interate(head.next);
        } else {
            leftLast = head;
            rightFirst = leftLast?.next;
        }
    }
    let newHead = null;
    if (left === 1) {
        rightFirst = head;
        newHead = reverse(head);
    } else {
        interate(head);
        leftLast.next = reverse(leftLast?.next);
        
    }
    if (rightFirst) {
        rightFirst.next = rightHead;
    } 
    
    return left === 1? newHead: head;
};
