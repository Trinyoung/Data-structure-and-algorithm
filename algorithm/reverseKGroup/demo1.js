/*
 * @Author: your name
 * @Date: 2021-02-04 16:11:29
 * @LastEditTime: 2021-02-04 16:55:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\reverseKGroup\demo1.js
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    const arr1 = [];
    let a = k;
    while (k >= 0) {
        arr1.push(head[--k]);
    }
    while (a < head.length) {
        arr1.push(head[a++]);
    }
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
    const node = new ListNode();
    insertNode(node, arr1);
    function insertNode(node, val) {
        if (!node.val) { 
            node.val = val.splice(0,1)[0];
            node.next = new ListNode();
            insertNode(node.next, val)
        }
    }
    return node;
};