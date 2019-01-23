class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(data) {
    const newNode = new Node(data);
   
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return newNode.data;
  }

  dequeue() {
    if (this.isEmpty()) {
      return new Error("The queue is empty.");
    }

    const temp = this.head;

    if (this.head === this.tail) {
      this.tail = null;
    }

    this.head = this.head.next; // if empty, head will pont to null

    this.size--;
    return temp;
  }

  peek() {
    if (this.isEmpty()) {
      return new Error("The queue is empty.");
    }

    return this.head.data;
  }

  isEmpty() {
    if (this.size === 0) return true;
  }
}

const q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
console.log(q); // a
q.dequeue();
q.dequeue();
q.dequeue();
console.log(q.dequeue());