/*
 * @Author: your name
 * @Date: 2021-03-26 08:46:44
 * @LastEditTime: 2021-03-26 13:26:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\avl_tree\index.js
 */
import { BinarySearchTree } from '../tree/index'
class AVLTree extends BinarySearchTree {
    constructor() {
        this.root = null;
    }
    // 1. 节点的高度和平衡因子：节点的高度时从节点到其任意子节点的边的最大值。
    getNodeHeight (node) {
        if (node === null) {
            return -1;
        }
        return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1
    }
}