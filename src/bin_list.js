// this is a Lawrence problem
// I should dig deeper into linked lists

class ListNode {
  constructor(data, nextNode = null) {
    this.data = data;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.nodeCount = 0;
    this.head = null;
  }

  addNode(newNode) {
    if (this.head === null) {
      this.head = newNode;
      this.nodeCount += 1;

      return true;
    }

    let currentNode = this.head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = newNode;
    this.nodeCount += 1;

    return true;
  }

  reverse() {
    let prevNode = null;
    let nextNode = null;
    let currentNode = this.head;

    while (currentNode !== null) {
      nextNode = currentNode.nextNode;
      currentNode.nextNode = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.head = prevNode;
  }
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);

let list = new LinkedList();
list.addNode(n1);
list.addNode(n2);
list.addNode(n3);

list.reverse();
