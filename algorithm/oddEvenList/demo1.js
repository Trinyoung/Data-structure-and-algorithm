const oddEvenList = (head) => {
    // let i = 1;
    let current = head;
    function interate(current, pre, double) {
        const next = current.next;
        current.next = next?.next;
        if (pre) {
            pre.next = next;
        }
        if (current.next) {
            interate(current.next, pre.next, double);
        } else {
            current.next = double;
        }
    }
    interate(current, current.next, current.next)
    return head;
}
console.log(JSON.stringify(oddEvenList({
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
})))
// 
// 1. 他们如果想要胜利的话，会怎么做呢？首先就是政府的支持。