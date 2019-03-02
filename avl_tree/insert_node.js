var insertNode = function (node, element) {
  // node 为root 结点， element 为插入的元素
  if (node === null) {
    node = new Node(element);
  } else if (element < node.key) {
    node.left = insertNode(node.left, element);
    if (node.left !== null) {
      if ((heightNode(node.left) - heightNode(node.left)) > 1) {
        if (element < node.left.key) {
          node = rotationLL(node);
        } else {
          node = rotationLR(node);
        }
      }
    }
  } else if (element > node.key) {
    node.right = insertNode(node.right, element);
    if (node.right !== null) {
      if ((heightNode(node.right) - heightNode(node.left) > 1)) {
        if (element < node.right.key) {
          node = rotationRR(node);
        } else {
          node = rotationRL(node);
        }
      }
    }
  }
}

var heightNode = function () {
  if (node === null) {
    return -1
  } else {
    return Math.max(heightNode(node.left), heightNode(node.right)) + 1;
  }
}

var rotationLL = function (node) {
  var temp = node.left;
  node.left = temp.right;
  temp.right = node;
  return temp;
}


var rotationRR = function (node){
  var temp = node.right;
  node.right = temp.left;
  temp.left = node;
  return temp;
}

var rotationLR = function (node){
  node.left = rotationRR(node.left);
  return rotationLL(node);
}

var rotationRL = function (node){
  node.right = rotationLL(node.right);
  return rotationRR(node);
}