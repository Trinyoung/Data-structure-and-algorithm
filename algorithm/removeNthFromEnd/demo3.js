var removeNthFromEnd = function(head, n) {
    if (!head.next) {
        return n === 1 ? null: --n;
    } else {
        const next = head.next;
        const rest = removeNthFromEnd(next, n);
        if (typeof rest !== 'number') {
            head.next = rest;
            return head;
        }
        if (rest === 1) { // 当前节点
            return next;
        } else {
            return rest - 1;
        }
    }
};
const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: null
        }
    }
}
console.log(removeNthFromEnd(head, 3))