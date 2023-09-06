// 写一个反转链表的算法
// 1->2->3->4->5->6->7->8->9->10
// 10->9->8->7->6->5->4->3->2->1
function reverseList(head) {
    var pre = null;
    var curr = head;

    while(curr) {
        var next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }

    return pre;
    
}