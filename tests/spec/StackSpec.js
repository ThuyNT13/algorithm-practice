describe("StackLinkedList", function() {
  const Stack = new StackLinkedList();
  
  describe("push()", function() {
    it("appends an item to top of empty stack", function() {
      Stack.push("a");
      const expected = "a";
      expect(Stack.top.data).toEqual(expected);
      expect(Stack.bottom.data).toEqual(expected);
    })
    it("appends another item to stack", function() {
      Stack.push("b");
      const expectedTop = "b";
      const expectedBottom = "a";
      expect(Stack.top.data).toEqual(expectedTop);
      expect(Stack.bottom.data).toEqual(expectedBottom);
    })
  })
  describe("peek()", function() {
    it("returns item at the top of the stack", function() {
      const expected = "b";
      expect(Stack.peek()).toEqual(expected);
    })
  })
  describe("pop()", function() {
    it("removes an item from top of the stack", function() {
      Stack.push("c");
      Stack.pop();
      const expected = "b";  
      expect(Stack.top.data).toEqual(expected);
    })
    it("empties out stack and ensures bottom and top are null", function() {
      Stack.pop();
      Stack.pop();
      const expected = null;
      expect(Stack.top).toEqual(expected);
      expect(Stack.bottom).toEqual(expected);
    })
    it("returns an error for attempting to pop an empty stack", function() {
      expect( function() {
        Stack.pop(); 
      }).toThrow(new Error("Stack is empty!"))
    })
    it("returns an error for attempting to peek at empty stack", function() {
      expect( function() {
        Stack.peek();
      }).toThrow(new Error("Stack is empty!"));
    })
  })
})

describe("StackArray", function() {
  const ArrayStack = new StackArray();

  describe("push()", function () {
    it("appends an item to top of empty stack", function () {
      ArrayStack.push("a");
      const expected = "a";
      expect(ArrayStack.arrayStack[0]).toEqual(expected);
    })
    it("appends another item to stack", function () {
      ArrayStack.push("b");
      const expectedTop = "b";
      const expectedBottom = "a";
      expect(ArrayStack.arrayStack[0]).toEqual(expectedBottom);
      expect(ArrayStack.arrayStack[1]).toEqual(expectedTop);
    })
  })
  describe("peek()", function () {
    it("returns item at the top of the stack", function () {
      const expected = "b";
      expect(ArrayStack.peek()).toEqual(expected);
    })
  })
  describe("pop()", function () {
    it("removes an item from top of the stack", function () {
      ArrayStack.pop();
      const expected = ["a"];
      expect(ArrayStack.arrayStack).toEqual(expected);
    })
    it("returns an error for attempting to pop an empty stack", function () {
      expect(function () {
        ArrayStack.pop();
        ArrayStack.pop();
      }).toThrow(new Error("Stack is empty!"))
    })
    it("returns an error for attempting to peek at empty stack", function () {
      expect(function () {
        ArrayStack.peek();
      }).toThrow(new Error("Stack is empty!"));
    })
  })
})