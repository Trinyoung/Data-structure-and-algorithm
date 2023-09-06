// 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
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