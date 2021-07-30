/*
 * @Author: your name
 * @Date: 2021-03-10 09:06:30
 * @LastEditTime: 2021-03-10 17:08:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\mergeTwoLists\demo2.js
 */
var mergeTwoLists = function (l1, l2) {
    let previous = {};
    let current2 = l2;
    let current1 = l1;
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
    function getNewCurrent (current1, current2, previous) {
        if (current1 || current2) {
            if (current1 && current2) {
                if (current1.val < current2.val) {
                    const node = new ListNode(current1.val);
                    previous.next = node;
                    getNewCurrent(current1.next, current2, node);
                } else {
                    const node = new ListNode(current2.val);
                    previous.next = node;
                    getNewCurrent(current1, current2.next, node)
                }
            } else {
                previous.next = current1 || current2;
                return;
            }
        }
        return;
    }
    getNewCurrent(current1, current2, previous);
    return previous.next;
};