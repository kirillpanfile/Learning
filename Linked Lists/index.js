class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //Insert the last node
  insertLast(data) {
    let node = new Node(data);
    let current;
    // If empty make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  //Insert at index
  insertAt(data, index) {
    // If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current,
      previous = null;
    // Set current to first
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current; // Node before the index
      count++;
      current = current.next; // Node after the index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  //Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        return current.data;
      }
      count++;
      current = current.next;
    }
    return null;
  }

  //Remove at index

  //Clear the lsit

  //Print
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
const l1 = new LinkedList();
l1.insertFirst(100);
l1.insertFirst(200);
l1.insertFirst(300);
l1.insertLast(400);
// l1.printListData();

l1.insertAt(400, 3);
l1.printListData();
