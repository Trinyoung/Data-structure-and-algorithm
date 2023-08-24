/*
 * @Author: your name
 * @Date: 2021-05-21 10:35:35
 * @LastEditTime: 2021-05-21 10:42:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\reverserLink\demo1.js
 */

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