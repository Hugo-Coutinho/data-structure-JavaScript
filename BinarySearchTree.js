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

    this.search = function (key) {

        return searchNode(root, key);
    };

    var searchNode = function (node, key) {
        if (node == null) {
            return false;
        }
        if (key < node.key) {
            return searchNode(node.left, key);
        } else if (key > node.key) {
            return searchNode(node.rigth, key);
        } else {
            return true;
        }
    };

    this.remove = function (key) {
        root = removeNode(root, key);
    };


    var removeNode = function (node, key) {

        //the root is null? so it means in that tree have none key.
        if (node == null) {
            return null;
        }

        //if the key (what user wanna remove) is less than root key so we will search the element in the left side 
        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;

            //else the key is bigger so we search it in the right side.
        } else if (key > node.key) {
            node.rigth = removeNode(node.rigth, key);
            return node;

        } else {
            //if the node has none node left and right so we just set null for the current node and return it.
            if (node.left == null && node.rigth == null) {
                node = null;
                return node;
            }
            //node left is null? it means then it has node in the right.
            if (node.left == null) {
                node = node.rigth;
                return node;
            }
            // if have no node in the right side, then has in the left side.
            if (node.rigth == null) {
                node = node.left;
                return node;
            }
            // if we get here , then we have node in the two sides. 
            //we gonna need execute a several steps to do this in the right way.
            // first one: Find the min node in the right side.
            //second one: Update the value of the current node with the response the first step.
            // third one: Because of the step two we have now the node we wanna remove and the with same key we have the minimum node,
            //  then what we need to do is just remove the minimum node.

            var aux = findMinNode(node.rigth);
            node.key = aux.key;
            node.rigth = removeNode(node.rigth, aux.key);
            return node;
        }
    };

    var findMinNode = function (node) {
        while (node && node.left != null) {
            node = node.left;
        }
        return node;
    };
}
function printNode(value) {
    console.log(value);
}
var tree = new BinarySearchTree();
var removeValue = 11;
tree.insert(11);
tree.insert(1);
tree.insert(3);
tree.insert(6);
tree.insert(8);


console.log('in pre order traverse');
tree.preOrderTraverse(printNode);

console.log('in post order traverse');
tree.postOrderTraverse(printNode);

console.log('search number: ' + tree.search(8));


console.log('min- ' + tree.min());
console.log('max- ' + tree.max());

console.log('remove- ' + removeValue);
tree.remove(removeValue);

console.log('in order traverse');
tree.inOrderTraverse(printNode);