var deleteDuplicates = function(head) {
    function interate(node, pre, isContinue) {
        if (node) {
            // const current = node;
            // const next = node.next;
            let current = node;
            let next = node.next;
            if (current.val === next?.val) {
                current.next = next?.next;
                interate(current, pre, true)
            } else {
                if (isContinue) {
                    if (pre) {
                        pre.next = next;
                    } else {
                        head = next;
                    }
                    return interate(next, pre)
                }
                interate(next, current);
            }
        }
    }
    if (head) {
        interate(head);
    }
    console.log(head, 'head');
    return head;
};
const head = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 3,
                    next: {
                        val: 4,
                        next: {
                            val: 4,
                            next: {
                                val: 5,
                                next: null
                            }
                        }
                    }
                }
            }
        }
    }
};
deleteDuplicates(head);