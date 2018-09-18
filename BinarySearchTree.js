function BinarySearchTree() {

    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.rigth = null;
    };

    var root = null;

    this.insert = function (key) {
        var newNode = new Node(key);

        if (root == null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    //verify first if the node will go to the left, if yes then in the left side verify in what side
    // will be inserted until really insert.
    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left == null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.rigth == null) {
                node.rigth = newNode;
            } else {
                insertNode(node.rigth, newNode);
            }
        }
    };

    // visit all nodes in order, from the smallest to the biggest.
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root, callback);
    };

    var inOrderTraverseNode = function (node, callback) {
        if (node != null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.rigth, callback);
        }
    };

    // That way visit the node before visit yours descendants
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback);
    }

    var preOrderTraverseNode = function (node, callback) {
        if (node != null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.rigth, callback);
        }
    }

    // they visit a node after visit the descendants
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root, callback);
    };

    var postOrderTraverseNode = function (node, callback) {
        if (node != null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.rigth, callback);
            callback(node.key);
        }
    };

    this.min = function () {
        return minNode(root);
    };

    var minNode = function (node) {
        if (node) {
            while (node && node.left != null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    };

    this.max = function () {
        return maxNode(root);
    };

    var maxNode = function (node) {
        if (node) {
            while (node && node.rigth != null) {
                node = node.rigth;
            }
            return node.key;
        }
        return null;
    };

}
function printNode(value) {
    console.log(value);
}
var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(1);
tree.insert(3);
tree.insert(6);
tree.insert(8);

console.log('in order traverse');
tree.inOrderTraverse(printNode);

console.log('in pre order traverse');
tree.preOrderTraverse(printNode);

console.log('in post order traverse');
tree.postOrderTraverse(printNode);

console.log('min- '+ tree.min());
console.log('max- '+ tree.max());
