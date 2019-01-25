describe("Implement queue with two stacks", function() {
  const Queue = new QueueTwoStacks(); 
  Queue.enqueue(1);
  Queue.enqueue(2);
  Queue.enqueue(3);

  describe("enqueue()", function() {
    it("appends an element to tail", function() {
      Queue.enqueue(4);
      const expected = [1,2,3,4];
      expect(Queue.inStack).toEqual(expected);
    })
    it("appends an element correctly after dequeing", function() {
      Queue.dequeue();
      Queue.enqueue(5);
      const expected = [2,3,4,5];
      expect(Queue.inStack).toEqual(expected);
    })
    it("peek() returns correct element after enqueue()", function() {
      const expected = 2;
      expect(Queue.peek()).toEqual(expected);
    })
  });
  describe("dequeue()", function () {
    it("removes an element from head", function () {
      Queue.dequeue();
      const expected = [3,4,5];
      expect(Queue.inStack).toEqual(expected);
    });
    it("peek() returns correct element after dequeue()", function () {
      const expected = 3;
      expect(Queue.peek()).toEqual(expected);
    })
  });
})