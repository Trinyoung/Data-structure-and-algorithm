var reorderList = function (head) {
  let length = 0;
  function interate(node, level, pre) {
    if (node.next) {
      const returnNode = interate(node.next, level + 1, node);
      if (level >= Math.ceil(length / 2)) {
        if (level === Math.ceil(length / 2)) {
            node.next = null;
            return returnNode;
        }
        return node;
      } else {
        if (returnNode) {
            const resNode = returnNode.next;
            if (length % 2) {
                if (pre) {
                    pre.next = returnNode;
                    returnNode.next = node;
                }
            } else {
                const next = node.next;
                node.next = returnNode;
                returnNode.next = next;
            }
          return resNode;
        }
      }
    } else {
      length = level;
      return node;
    }
  }
  if (head) {
    interate(head, 0);
  }
  return head;
};
const list = {
  val: 1,
  next: { val: 2, next: { val: 3, next: { val: 4,  } } },
};
const list2 = {
    val: 1,
    next: { val: 2, next: { val: 3, next: { val: 4, next: {val: 5, next: null }  } } },
  };
console.log(JSON.stringify(reorderList(list)), "list++++++++>>>.");
console.log(JSON.stringify(reorderList(list2)), "list++++++++>>>.");
// console.log(reorderList(list2), "list++++++++>>>.");

