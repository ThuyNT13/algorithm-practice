class QueueTwoStacks {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(item) {
    this.inStack.push(item);
  }

  dequeue() {
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
    }
    const dequeued = this.outStack.pop();

    // move stack back to instack for enqueueing
    while (this.outStack.length > 0) {
      this.inStack.push(this.outStack.pop());
    }

    return dequeued;
  }

  returnQueue() {
    return this.inStack;
  }
}