/*
 * @Author: your name
 * @Date: 2021-03-09 15:09:48
 * @LastEditTime: 2021-03-09 15:09:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\mergeTwoLists\demo1.js
 */
const { LinkedList } = require('../../List/demo1');
var mergeKLists = function (lists) {
    const head = new ListNode();
    let previous = new ListNode();
    function ListNode(val, next) {
        this.element = (val===undefined ? null : val)
        this.next = (next===undefined ? null : next)
    }
    let currentVals = [];
    for (let i = 0; i < lists.length; i++) {
        if (lists[i] && lists[i].element !== null) {
            currentVals.push(lists[i].element);
        } else {
            lists.splice(i, 1);
            i--;
        }
    }
    if (currentVals.length === 0) {
        return null;
    }
    while (currentVals.length > 0) {
        let min = currentVals[0];
        let minIndex = 0;
        for (let i = 1; i < currentVals.length; i++) {
            if (min > currentVals[i]) {
                min = currentVals[i];
                minIndex = i;
            }
        }
        if (head.element === null) {
            head.element = min;
            previous = head;
        } else {
            previous.next = new ListNode(min);
            previous = previous.next;
        }

        if (lists[minIndex].next) {
            currentVals[minIndex] = lists[minIndex].next.element;
            lists[minIndex] = lists[minIndex].next;
        } else {
            currentVals.splice(minIndex, 1);
            lists.splice(minIndex, 1);
        }
    }
    return head;
};
// const arr1 = [1, 2, 4];
// const arr2 = [2, 3, 5];
// const arr3 = [1, 3, 5, 7, 9, 11, 12];

const [arr1, arr2, arr3] = [[0, 4, 5], [1, 3, 4], [2, 6]];
const l1 = new LinkedList();
const l2 = new LinkedList();
const l3 = new LinkedList();
for (let i = 0; i < arr1.length; i++) {
    l1.append(arr1[i]);
}

for (let i = 0; i < arr2.length; i++) {
    l2.append(arr2[i]);
}
for (let i = 0; i < arr3.length; i++) {
    l3.append(arr3[i]);
}
// console.log(JSON.stringify(l1.head), JSON.stringify(l2.head), '===================>')
console.log(JSON.stringify(mergeKLists([l1.head])));