var reverseList = function (head, tail) {
    let prev = tail.next;
    let p = head;
    while (prev !== tail) {
      const nex = p.next;
      p.next = prev;
      prev = p;
      p = nex;
    }
    return [tail, head];
  };
  
  var reverseKGroup = function (head, k) {
    let dummy = new ListNode(0, head);
    let pre = dummy;
    while (head) {
      let n = k;
      let tail = pre;
      while (n--) {
        tail = tail.next;
        if (!tail) return dummy.next;
      }
      let nex = tail.next;
      [head, tail] = reverseList(head, tail);
      pre.next = head;
      tail.next = nex;
      pre = tail;
      head = tail.next;
    }
    return dummy.next;
  };