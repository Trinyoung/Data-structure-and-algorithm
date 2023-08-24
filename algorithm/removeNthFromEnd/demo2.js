// 这是一种单链表的二次扫描法
// 首先定义两个指针， fast 和 slow， 它们都指向 head；
// 将fast 的 指针向右以哦对那个n次，然后移动slow和fast直到fast指向链表的末尾，而此时的slow正好指向要删除的节点的前一个节点。
// 最后将slow.next指向slow.next.next。即删除倒数第`n`个节点了。
var removeNthFromEnd = function(head, n) {
    if(!head || !head.next) return null
    let slow = head
    let fast = head
    let pre = null
    while(n--){
      fast = fast.next
    }
    if(!fast){
      //注意特殊情况
      return head.next
    }
    while(fast){
      pre = slow
      slow = slow.next
      fast = fast.next
    }
    pre.next = pre.next.next
    return head
  };