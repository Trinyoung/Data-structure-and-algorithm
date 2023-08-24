// 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
function rotateRight(head, n) {
    let length = 0;
    let newHead = null;
    let h = head;
    while(head) {
        length ++;
        newHead = head;
        head = head.next;
    }
    newHead.next = h;
    let a = 0;
    let b = n%length;
    while(a < length -b){
        h = h.next;
        a++;
    }
    h.next = null;
    return newHead;
}
// 错误， 未考虑n > length的情况
// function rotateRight(head, n) {
    
// }