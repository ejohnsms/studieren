// todo
// use the actual traversal methods
// make a generic insert and remove
// what about the case of the DOM. which is certainly not
// a binary tree.

class binTree {
    constructor(node) {
        this.rootNode = node;
    }

    addNode(newNode) {
        this.addNewNode(this.rootNode, newNode);
    }

    // this is the DFS
    preOrderSearch(node) {
        if (node === null) {
            return;
        }

        console.log(node.data);

        this.preOrderSearch(node.leftChild);
        this.preOrderSearch(node.rightChild);
    }

    inOrderSearch(node) {
        if (node === null) {
            return;
        }

        this.inOrderSearch(node.leftChild);
        console.log(node.data);
        this.inOrderSearch(node.rightChild);
    }

    postOrderSearch(node) {
        if (node === null) {
            return;
        }

        this.postOrderSearch(node.leftChild);
        this.postOrderSearch(node.rightChild);
        console.log(node.data);
    }

    // und this is the BFS
    levelOrderSearch(node) {
        if (node === null) {
            return;
        }

        let discoveredNodes = [];
        discoveredNodes.push(node);

        while(discoveredNodes.length > 0) {
            let currentNode = discoveredNodes[0];
            console.log(currentNode.data);

            if (currentNode.leftChild !== null) {
                discoveredNodes.push(currentNode.leftChild);
            }
            if (currentNode.rightChild !== null) {
                discoveredNodes.push(currentNode.rightChild);
            }

            discoveredNodes.shift();
        }
    }

    addNewNode(currentNode, newNode) {
        if (currentNode === null) {
            return;
        }

        // walk the tree and add the node as a right or left child
        if (newNode.data > currentNode.data) {
            if (currentNode.rightChild === null) {
                currentNode.rightChild = newNode;
            } else {
                currentNode = currentNode.rightChild;
                this.addNewNode(currentNode, newNode)
            }
        } else if (newNode.data < currentNode.data) {
            if (currentNode.leftChild === null) {
                currentNode.leftChild = newNode;
            } else {
                currentNode = currentNode.leftChild;
                this.addNewNode(currentNode, newNode)
            }
        }
    }
}


class binNode {
    constructor(data, leftChild = null, rightChild = null) {
        this.data = data;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }
}

let rootNode = new binNode(75, null, null);
let bt = new binTree(rootNode);

bt.addNode(new binNode(100));
bt.addNode(new binNode(70));
bt.addNode(new binNode(85))

// bt.preOrderSearch(rootNode);

// bt.inOrderSearch(rootNode);

// bt.postOrderSearch(rootNode);

bt.levelOrderSearch(rootNode);
