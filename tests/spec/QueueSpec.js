describe("Implement Queue with a LinkedList", function() {
  const queue = new Queue();

  describe("enqueue()", function() {
    it("it adds an element to an empty queue", function() {
      queue.enqueue("a");
      const expected = "a";
      expect(queue.head.data).toEqual(expected);
      expect(queue.tail.data).toEqual(expected);
    })
    it("it adds another element to queue", function() {
      queue.enqueue("b");
      const expectedHead = "a";
      const expectedTail = "b";
      expect(queue.head.data).toEqual(expectedHead);
      expect(queue.tail.data).toEqual(expectedTail);
    })
  })
  describe("peek()", function() {
    it("peeks at the front of the queue", function() {
      const expected = "a";
      expect(queue.peek()).toEqual(expected);
    })
  })
  describe("dequeue()", function() {
    it("removes from front of queue", function() {
      queue.enqueue("c");
      queue.dequeue();
      const expectedHead = "b";
      const expectedTail = "c";
      expect(queue.head.data).toEqual(expectedHead);
      expect(queue.tail.data).toEqual(expectedTail);
    })
    
    queue.dequeue();
    queue.dequeue();
    xit("returns an error when attempting to dequeue empty queue", function() {
      expect(function() {
        queue.dequeue();
      }).toThrow(new Error("The queue is empty."));
    })
    xit("returns an error when attempting to peek an empty queue", function () {
      expect(function () {
        queue.peek();
      }).toThrow(new Error("The queue is empty."));
    })
  })
})