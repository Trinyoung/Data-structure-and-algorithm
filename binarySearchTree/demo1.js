// 二叉树从左往右依次变大。
class BinarySearchTree {
    constructor(arr) {
        this.root = null;
        if (arr && arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                this.insert(arr[i]);
            }
        }
    }
    // ------插入节点-------------------------
    insert(key) {
        const newNode = new Node(key);
        if (this.root === null) {
            this.root = newNode;
        } else {
            // console.log(this.root,'------>');
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (node.key > newNode.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                return this._insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                return this._insertNode(node.right, newNode);
            }
        }
    }

    // ------搜索节点-------------------------
    search(key) {
        if (this.root === null) {
            return false;
        } else {
            return this._searchNode(this.root, key);
        }

    }

    _searchNode(node, key) {
        if (node !== null) {
            if (key === node.key) return true;
            if (node.key > key) {
                return this._searchNode(node.left, key);
            }

            if (node.key < key) {
                return this._searchNode(node.right, key);
            }
        } 
        return false;
    }

    //-----中序遍历---------------------
    // 中序遍历就是从小到大的遍历树的结构
    inOrderTraverse(callback) {
        this._inOrderTraverseNode(this.root, callback);
    }

    _inOrderTraverseNode(node, callback) {
        if (node !== null) {
            this._inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this._inOrderTraverseNode(node.right, callback);
        }
    }

    //-----先序遍历------------------------------------------
    // 先序遍历是优先于后代遍历的方式, 常见的应用场景就是打印树状结构。例如团队结构， 文档结构等。
    preOrderTraverse(callback) {
        this._preOrderTraverseNode(this.root, callback);
    }

    _preOrderTraverseNode(node, callback) {
        if (node !== null){
            callback(node.key);
            this._preOrderTraverseNode(node.left, callback);
            this._preOrderTraverseNode(node.right, callback);
        }
    }
    // ----- 后序遍历--------------------------------
    // 后序遍历是先访问自身的后代节点，然后再访问自身。后序遍历的一种运用是计算一个目录和它的子目录中所有的文件所占空间的大小。
    postOrderTraverse(callback) {
        this._postOrderTraverseNode(this.root, callback);
    }

    _postOrderTraverseNode(node, callback){
        if (node !== null){
            this._postOrderTraverseNode(node.left, callback);
            this._postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    // 最小值， 也就是最左边的那个呗。
    min() {
        return this._getMin(this.root);
    }

    _getMin(node) {
        console.log(node,'----------->');
        if (node !== null) {
            if (node.left !== null) {
                return this._getMin(node.left);
            }
            return node.key;
        }
        return null;
    }

    max(){
        return this._getMax(this.root);
    }

    _getMax(node){
        if (node !== null){
            if (node.right !==null){
                return this._getMax(node.right);
            }
            return node.key;
        }
        return null;
    }

    //移除一个值， 这个应该是最难的。
    // 规则说明下， 如果删除没有子节点的， 如果删除有一个子节点的，如果删除有两个子节点的。
    remove(key) {
        this.root = this._removeNode2(this.root, key);
    }

    _removeNode(node, oldNode, key) {
        if (oldNode === null && node) {
            if(node.key === key){
                if (node.left=== null && node.right === null ){
                    this.root = null;
                }

                if ((node.left === null && node.right !== null) || (node.left !== null && node.right === null)) {
                    this.root = node.left || node.right;
                }

                if (node.left !== null && node.right !== null){
                    const minNode = this._findMinNode(node.right);
                    this._removeNode(node.right, this.root, minNode.key);
                    minNode.left= node.left;
                    minNode.right = node.right;
                    this.root = minNode;
                    
                }
            }
           
        } else if (node !== null) {
            if (key === node.key) {
                if (node.left === null && node.right === null) {
                    if (oldNode !== null) {
                        if (oldNode.key < node.key) {
                            oldNode.right = null;
                        }

                        if (oldNode.key > node.key) {
                            oldNode.left = null;
                        }
                    }
                }

                if ((node.left === null && node.right !== null) || (node.left !== null && node.right === null)) {
                    if (oldNode !== null) {
                        if (oldNode.key < node.key) {
                            oldNode.right = node.left || node.right;
                        }

                        if (oldNode.key > node.key) {
                            oldNode.left = node.left || node.right;
                        }
                    }
                }

                if (node.left !== null && node.right !== null) {
                    const minNode = this._findMinNode(node.right);
                    if (oldNode !== null){
                        if (oldNode.key < node.key) {
                            this._removeNode(oldNode.right, null, minNode.key);
                            oldNode.right = minNode;
                        }
    
                        if (oldNode.key > node.key) {
                            this._removeNode(oldNode.left, null, minNode.key);
                            oldNode.left = minNode;
                        }
                        minNode.left = node.left;
                        minNode.right = node.right;
                    }
                    
                }
            }

            if (key < node.key) {
                return this._removeNode(node.left, node, key);
            }

            if (key > node.key) {
                return this._removeNode(node.right, node, key);
            }
        }

    }

    _findMinNode (node) {
        if (node !== null) {
            if (node.left !== null) {
                return this._findMinNode(node.left);
            }
            return node;
        }
        return null;
    }

    _removeNode2(node, key) {
        if (node === null){
            return null;
        }
        if (key < node.key) {
            node.left = this._removeNode2(node.left, key);
            return node;
        }

        if (key > node.key) {
            node.right = this._removeNode2(node.right, key);
            return node;
        }

        if (key === node.key) {
            if (node.right === null && node.left === null) {
                node = null;
                return node;
            }

            if (node.right === null && node.left !== null || node.right!==null && node.left === null) {
                node = node.left || node.right || null;
                return node;
            }

            if (node.right !== null && node.left !== null) {
                const minNode = this._findMinNode(node.right);
                node.key = minNode.key;
                node.right = this._removeNode2(node.right, minNode.key);
            }
            return node;
        }
    }
}

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}


const arr = [3, 7, 5, 4,  9, 8, 11, 2];
const tree = new BinarySearchTree(arr);
// tree.inOrderTraverse(console.log);
// tree.preOrderTraverse(console.log); // 3, 7, 5,4,8,9,11
// tree.postOrderTraverse(console.log); //4,5,11,9,8,7,3
// console.log(tree.search(4));

// console.log(tree.min()); // 2
// console.log(tree.max()); // 11
tree.remove(3);
console.log(tree,'tree');
tree.preOrderTraverse(console.log); // 4, 2, 7, 5, 9, 8, 11
// for(let i = 0; i< arr.length; i++){
//     tree.insert(arr[i]);
// }
// console.log(tree);

//    3
// 2     7
//    5      9 
//  4      8    11


//    3
// 2     7
//    5      9 
//  4      8    11


//    3
// 2     
      