var reverseKGroup = function (head, k) {
    let i = 1;
    let pre = head;
    let res = null;
    let nextStart = head;
    let prePoint  = null;
    function reverse(head, i) {
        if (!(i%k)) {
            if (head.next) {
                prePoint = nextStart;
                nextStart = head.next;
            } else {
                nextStart = null;
            }
            return head;
        }
        if (!head || !head.next) {
            return null;
        }
        const next = head.next;
        const after = reverse(next, i + 1);
        if (after) {
            head.next = null;
            next.next = head;
            return after;
        } else {
            return null;
        }
    }
    
    while (nextStart) {
        const split = reverse(nextStart, i);
        if (split) {
            if (!res) {
                res = split;
            } else {
                pre.next = split;
                pre = prePoint;
            }
        } else {
            pre.next = nextStart;
            nextStart = null;
        }
    }
    return res;
};
const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: {
                        val: 6,
                        next: {
                            val: 7,
                            next: null
                        }
                    }
                }
            }
        }
    }
}
console.log(JSON.stringify(reverseKGroup(head, 4)));