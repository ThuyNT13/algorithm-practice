class QueueTwoStacks {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(item) {
    this.inStack.push(item);
    // return this.inStack[this.inStack.length-1];
    return this;
  }

  dequeue() {
    if (this.inStack.length === 0) {
      throw new Error("Can't dequeue from empty queue!");
    }

    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
    }
    
    const dequeued = this.outStack.pop();

    // returns queue to correct order
    while (this.outStack.length > 0) {
      this.inStack.push(this.outStack.pop());
    }

    console.log(this.inStack);
    return dequeued;
  }

  peek() {
    return this.inStack[0];
  }

  isEmpty() {
    if (this.inStack.length === 0) {
      return true;
    } 
    return false;
  }
}

const Queue = new QueueTwoStacks();
Queue.enqueue(1);
Queue.enqueue(2);
Queue.enqueue(3);
Queue.dequeue();
console.log(Queue.enqueue(4));
console.log(Queue.dequeue());
console.log(Queue);