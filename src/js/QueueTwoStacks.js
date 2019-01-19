class QueueTwoStacks {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(item) {
    this.inStack.push(item);
  }

  dequeue() {
    if (this.inStack.length === 0) {
      throw new Error("Can't dequeue from empty queue!");
    }

    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
    }
    
    const dequeued = this.outStack.pop();
    
    while (this.outStack.length > 0) {
      this.inStack.push(this.outStack.pop());
    }

    return dequeued;
  }
}