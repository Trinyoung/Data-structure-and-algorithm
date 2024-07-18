var reverseBetween = function(head, left, right) {
    function interate(head, index) {
        if (index === left - 1) {
            const after = reverse(head.next, index + 1, head.next);
            head.next  = after;
            return;
        }
        const next = head?.next;
        interate(next, index + 1);
    }
    function reverse(head, index, origin) {
        if (index === right) {
            if (origin !== head) origin.next = head.next;
            
            return head;
        } else {
            const next = head.next;
            const after = reverse(head.next, index+1, origin);
            next.next = head;
            return after;
        }
    }
    if (left === 1) {
        head = reverse(head, 1, head)
    } else {
        interate(head, 1);
    }
    
    return head;
};
// const head = {
//     val: 1,
//     next: {
//         val: 2,
//         next: {
//             val: 3,
//             next: {
//                 val: 4,
//                 next: {
//                     val: 5
//                 }
//             }
//         }
//     }
// }
const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3
        }
    }
}
console.log(JSON.stringify(reverseBetween(head, 3, 3)))