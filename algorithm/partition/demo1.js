var partition = function(head, x) {
    let smaller = null;
    let smallerPoint = null;
    let bigger = null;
    let biggerPoint = null;

    while (head) {
        const node = new ListNode(head.val)
        if (head.val >= x) {
            if (!bigger) {
                bigger = node;
            } else {
                biggerPoint.next = node;
            }
            biggerPoint = node;
            // biggerPoint.next = null;
        } else {
            if (!smaller) {
                smaller = node;
            } else {
                smallerPoint.next = node;
            }
            smallerPoint = node;
            // smallerPoint.next = null;
        }
        head = head.next;
    }
    if (smaller) {
        smallerPoint.next = bigger;
        return smaller;
    }
    return bigger;
};
const head = {
    val: 1,
    next: {
        val: 4,
        next: {
            val: 3,
            next: {
                val: 2,
                next: {
                    val: 5,
                    next: {
                        val: 2,
                        next: null
                    }
                }
            }
        }
    }
}
console.log(partition(head, 3));