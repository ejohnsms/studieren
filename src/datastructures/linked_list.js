// this is a Lawrence problem
// I should dig deeper into linked lists

class ListNode {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
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
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    this.nodeCount += 1;

    return true;
  }

  revereWithLoop() {
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

	reverse() {
		this.rev(this.head);
	}

	rev(node, pre = null) {
		if (node === null) {
			this.head = pre; // when current is null then prev is the last node
			return;
		}

 		let cur = node;
 		let nex = cur.next

		cur.next = pre;
		pre = cur;
		cur = nex;

		this.rev(cur, pre);
	}

	display() {
		this.dis(this.head);
	}

	dis(node) {
		if (node === null) {
			return;
		}
		console.log(`node data: ${node.data}`);
		this.dis(node.next);
	}


}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);

const list = new LinkedList();

list.addNode(n1);
list.addNode(n2);
list.addNode(n3);

list.display();

list.reverse();

list.display();
