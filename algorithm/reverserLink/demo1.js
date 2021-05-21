/*
 * @Author: your name
 * @Date: 2021-05-21 10:35:35
 * @LastEditTime: 2021-05-21 10:42:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\reverserLink\demo1.js
 */

function reverserLink(list) {

    let current = list.next;
    let next = { value: list.value }
    current.next = next;
    if (current.next) {

    }
}