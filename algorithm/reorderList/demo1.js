var reorderList = function(head) {
    function interate(node, level, pre) {
        if (node.next) {
            const last = interate(node.next, level + 1, node);
            if (level === 0) {
                const next = node.next;
                last.next = next;
                node.next = last;
                if (next) {
                    interate(next, 0);
                }
            } else {
                return last
            }
        } else {
            if (pre) {
                 pre.next = null;
            }
            return node;
        }
    }
    if (head) {
        interate(head, 0);
    }
    return head;
};
const list = {val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: null
            }
        }}}
console.log(reorderList(list), 'list++++++++>>>.');