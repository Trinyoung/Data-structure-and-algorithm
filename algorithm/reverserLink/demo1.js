/*
 * @Author: your name
 * @Date: 2021-05-21 10:35:35
 * @LastEditTime: 2021-05-21 10:42:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\reverserLink\demo1.js
 */

const reverseList = function (head) {
    if (!head.next || !head) {
        return null;
    }
    let next = head.next;
    head.next = null;
    const newHead = reverseList(next);
    next.next = head;
    return newHead;
}
// 以上算法叫什么名字
// 1

// 
function reverserLink(list) {
    let prev = null;
    let curr = list;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
