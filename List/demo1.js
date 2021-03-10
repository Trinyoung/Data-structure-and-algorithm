/*
 * @Author: your name
 * @Date: 2021-03-09 15:11:02
 * @LastEditTime: 2021-03-10 16:10:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\List\demo1.js
 */
// import {} from './util';
class LinkedList {
  constructor() {
    this.count = 0;
    this.head = undefined;
  }

  append(element) {
    const node = new Node(element);
    let current;
    if (this.head === undefined) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next
      }
      current.next = node;
    }
    this.count ++;
  }

  insert(element, position) {
    let node = new Node(element);
    
    if (position >=0 && position <= this.count) {
      if (position === 0) {
        node.next = this.head;
        this.head = node;
      } else  {
        let current = this.head;
        let index = 0;
        let previous;
        while (index < position) {
          previous = current;
          current = previous.next;
          index ++;
        }
        node.next = current;
        previous.next = node;
      }
      
      this.count ++;
      return true;
    }
    return false;
  }

  getElementAt(ele) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.element === ele) return index
      current = current.next;
      index++;
    }
    return -1;
  }
  remove () {
    
  }
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}
module.exports = {
  LinkedList
}
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(4);
list.insert(3, 2);
1324;
// console.log(list.getElementAt(2));
console.log(JSON.stringify(list), '------------->');