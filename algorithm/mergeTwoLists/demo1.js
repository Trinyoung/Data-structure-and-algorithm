/*
 * @Author: your name
 * @Date: 2021-03-09 15:09:48
 * @LastEditTime: 2021-03-10 17:38:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\mergeTwoLists\demo1.js
 */
const { LinkedList } = require('../../List/demo1');
var mergeTwoLists = function (l1, l2) {
    let previous = {};
    let current2 = l2;
    let current1 = l1;
    function ListNode(val, next) {
        this.element = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
    while (current2 && current1) {
        if (current2.element > current1.element) {
            previous.next = new Node(current1.element);
        }
    }
    return previous.next;
};
let list1 = new LinkedList();
let list2 = new LinkedList();
const arr1 = [1, 3, 4, 7, 8];
const arr2 = [2, 3, 5, 6];
for (let i = 0; i < arr1.length; i++) {
    list1.append(arr1[i]);
}
for (let i = 0; i < arr2.length; i++) {
    list2.append(arr2[i]);
}
console.log(JSON.stringify(list1), JSON.stringify(list2))
console.log(JSON.stringify(mergeTwoLists(list1.head, list2.head)));
