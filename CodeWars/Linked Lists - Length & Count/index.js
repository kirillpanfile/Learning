function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  // Your code goes here.
  let count = 0;
  let current = head;
  while (current) {
    count++;
    current = current.next;
  }
  return count;
}

function count(head, data) {
  // Your code goes here.
  console.log(head);
  console.log(data);
  let current = head;
  let count = 0;
  while (current) {
    if (current.data === data) {
      count++;
    }
    current = current.next;
  }
  return count;
}
let ll = new Node(1);
ll.next = new Node(2);
ll.next.next = new Node(3);
console.log(count(ll, 3));
