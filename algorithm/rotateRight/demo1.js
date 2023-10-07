// 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
<<<<<<< HEAD
// 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) {
      return head;
    }
  
    let length = 1;
    let currentNode = head;
  
    while (currentNode.next) {
      currentNode = currentNode.next;
      length++;
    }
  
    k = k % length;
    if (k === 0) {
      return head;
=======
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
>>>>>>> 02b4b6492b9e7fcc6d668c3acd9b7345c6d37f41
