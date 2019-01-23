class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}

class StackLinkedList {
  constructor() {
    this.top = null;  // head
    this.bottom = null; // tail
    this.size = 0;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty!");
    }

    return this.top.data;
  }

  push(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const temp = this.top;
      this.top = newNode;
      this.top.next = temp; 
    }

    this.size++;
    return this;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty!");
    }

    const temp = this.top;

    if (this.top === this.bottom) {
      this.bottom = null;
    } 
      
    this.top = this.top.next; // sets top to null if next is null
    this.size--;
    return temp;
  }

  isEmpty() {
    if (this.size <= 0) return true;
  }
}

// ---------------------

class StackArray {
  constructor() {
    this.arrayStack = [];
  }

  push(data) {
    this.arrayStack.push(data);
    return this;
  } 

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty!");
    }

    this.arrayStack.pop();
    return this;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty!");
    }

    return this.arrayStack[this.arrayStack.length-1];
  }

  isEmpty() {
    if (this.arrayStack.length === 0) return true;
  }
}