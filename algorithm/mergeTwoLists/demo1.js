/*
 * @Author: your name
 * @Date: 2021-03-09 15:09:48
 * @LastEditTime: 2021-03-16 13:45:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\mergeTwoLists\demo1.js
 */
const { LinkedList } = require('../../List/demo1');
var mergeTwoLists = function(l1, l2) {
    const head = {};
    let current1 = l1;
    let current2 = l2;
    let previous= new ListNode();
    function ListNode (val) {
        this.val = val;
        this.next = null;
    }
    while (current1 && current2) {
        let val;
        if (current1.val > current2.val) {
            val = current2.val;
            current2 = current2.next;
        } else {
            val = current1.val;
            current1 = current1.next;
        }
        if (!head.val) {
            head.val = val;
            previous = head;
            continue;
        }
        previous.next = new ListNode(val);
        previous = previous.next;
    }
    previous.next = current1 || current2;
    return head;
};
const arr1 = [1];
const arr2 = [];

const l1 = new LinkedList();
const l2 = new LinkedList();
for (let i = 0; i< arr1.length; i++) {
    l1.append(arr1[i]);
}

for (let i = 0; i < arr2.length; i++) {
    l2.append(arr2[i]);
}
console.log(JSON.stringify(l1.head),JSON.stringify(l2.head), '===================>')
console.log(mergeTwoLists(l1.head, l2.head));
