/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (!head || !head.next) {
        return head;
    }
    const cur = head;
    const [newHead, next] = reverse(head, k);
    console.log(cur.next, 'newHead is bbb', newHead)
    if (next) {
        head.next = reverseKGroup(next, k);
    }
    return newHead;
};
function reverse(head, k) {
    if ( k === 1 && head) {
        return [head, head.next];
    }
    if (!head) {
        return [head, null, true];
    }
    const next = head.next;
    
    const [newHead, nextNext, isBreak] = reverse(next, k - 1);
    if (!isBreak) {
        head.next = null;
        next.next = head;
        return [newHead, nextNext];
    } else {
        // head.next = next;
        return [head, null, isBreak];
    }
}