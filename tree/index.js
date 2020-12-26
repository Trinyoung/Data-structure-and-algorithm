/*
 * @Author: your name
 * @Date: 2020-12-24 14:21:29
 * @LastEditTime: 2020-12-24 18:43:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\tree\index.js
 */
class BinarySearchTree {
    constructor(arr) {
        this.root = null;
        if (arr && arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                this.insert(arr[i]);
            }
        }
    }

    insert(item) {
        const node = new Node(item);
        if (this.root === null) {
            return this.root = node;
        }
        this._insertNode(this.root, node)
    }

    _insertNode(parent, node) {
        if (parent.key < node.key) {
            if (!parent.right) {
                return parent.right = node;
            }
            return this._insertNode(parent.right, node);
        }
        if (parent.key > node.key) {
            if (!parent.left) {
                return parent.left = node;
            }
            return this._insertNode(parent.left, node);
        }
    }
    // 查找二叉树中是否存在该节点；
    search(item) {
        return this._searchNode(this.root, item);
    }

    _searchNode(parent, item) {
        if (!parent) {
            return false;
        }
        if (parent.key === item) {
            return true;
        }
        if (parent.key < item) {
            return this._searchNode(parent.right, item);
        }
        if (parent.key > item) {
            return this._searchNode(parent.left, item);
        }
    }
    //-------- 中序遍历 --------
    // 中序遍历就是按照节点大小的顺序遍历；中序遍历的复杂度是O(N)
    inOrderTraverse() {
         this._inOrderTraverse(this.root)
    }
    _inOrderTraverse(node) {
        if (node.left!==null) {
            this._inOrderTraverse(node.left);
        }
        console.log(node.key);
        if (node.right!==null) {
            this._inOrderTraverse(node.right);
        }
    }

    preOrderTraverse() {
        this._preOrderTraverse(this.root);
    }
    _preOrderTraverse(node) {
        if (node) {
            console.log(node.key);
            this._preOrderTraverse(node.left);
            this._preOrderTraverse(node.right);
        }
    }

    afterOrderTraverse() {
        this._afterOrderTraverse(this.root);
    }
    _afterOrderTraverse (node) {
        if (node) {
            this._afterOrderTraverse(node.left);
            this._afterOrderTraverse(node.left);
        }
    }
    // 移除一个值， 这个应该是最难的。
    // 规则说明下：
    // 1. 删除没有子节点的： 直接删除即可；
    // 2. 删除只有一个子节点的：删掉该节点之后，还要将子节点填到被删除节点的位置上。
    // 3. 删除拥有两个子节点的：删掉该节点之后，填入后继节点，后继节点是被删除节点的子节点中比它大的子节点中最小值。剩余的节点保留本身位置。
    remove(key) {
        this.root = this._removeNode(this.root, key);
    }

    _removeNode(node, key) {
        // 当只有一个节点的时候
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = this._removeNode(node.left, key);
            return node;
        }

        if (key > node.key) {
            node.right = this._removeNode(node.right, key);
            return node;
        }

        if (key === node.key) {
            if (!node.right && !node.left) {
                node = null;
                return node;
            }
            if (!node.right && node.left  || node.right && !node.left) {
                node = node.left || node.right || null;
                return node;
            }
            if (node.right !== null && node.left !== null) {
                const minNode = this._findMinNode(node.right);
                node.key = minNode.key;
                node.right = this._removeNode(node.right, minNode.key);
            }
            return node;
        }

    }
    
    _findMinNode (node) {
        if (node && node.left) {
            return this._findMindNode(node.left)
        }
        return node;
    }
}

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

const tree1 = new BinarySearchTree([3, 1, 4, 2, 5]);
console.log(JSON.stringify(tree1), '---------------->tree1')
tree1.inOrderTraverse();