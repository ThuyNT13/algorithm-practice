describe("Implement queue with two stacks", function() {
  q = new QueueTwoStacks(); 
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);

  describe("enqueue()", function() {
    it("appends an element to tail", function() {
      q.enqueue(4);
      const expected = [1,2,3,4];
      expect(q.inStack).toEqual(expected);
    })
    it("appends an element correctly after dequeing", function() {
      q.dequeue();
      q.enqueue(5);
      const expected = [2,3,4,5];
      expect(q.inStack).toEqual(expected);
    })
    it("peek() returns correct element after enqueue()", function() {
      const expected = q.inStack[0];
      expect(q.peek()).toEqual(expected);
    })
  });
  describe("dequeue()", function () {
    it("removes an element from head", function () {
      q.dequeue();
      const expected = [3,4,5];
      expect(q.inStack).toEqual(expected);
    });
    it("peek() returns correct element after dequeue()", function () {
      const expected = q.inStack[0];
      expect(q.peek()).toEqual(expected);
    })
  });
  describe("isEmpty()", function() {
    it("returns false when queue is not empty", function() {
      const expected = false;
      expect(q.isEmpty()).toEqual(expected);
    })
    it("returns true when queue is empty", function() {
      q.dequeue();
      q.dequeue();
      q.dequeue();
      const expected = true;
      expect(q.isEmpty()).toEqual(expected);
    })
  })
})