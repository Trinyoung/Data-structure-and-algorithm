const reverseLink = (head) => {
    if (!head?.next) return head;
    const next = head.next;
    head.next = null;
    const newHead = reverseLink(next);
    next.next = head;
    
    return newHead;
}
const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
}
console.log(JSON.stringify(reverseLink(head)))