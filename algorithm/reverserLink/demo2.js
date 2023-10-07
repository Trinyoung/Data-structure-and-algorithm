<<<<<<< HEAD
var reverseList = function(head) {
    var pre = null;
    var curr = head;

    while(curr) {
        var next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }

    return pre;
    
};
// // 以上算法的时间复杂度是 O(N)，其中 N 指的是链表的节点数量。空间复杂度是 O(1)。
=======
var rotateRight = function (head) {
    let p = null;
    let c = head;
    let newHead = null;
    while(c) {
       newHead = c;
       newHead.next = p;
       c = c.next;
       p = c;
    }
    return newHead;
}
>>>>>>> 02b4b6492b9e7fcc6d668c3acd9b7345c6d37f41
