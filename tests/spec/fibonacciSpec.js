describe ("fibonacci sequence", function() {
  describe ("fibonacciIterative()", function() {
    it("calculates the 0th fibonacci number", function() {
      expect(fibonacciIterative(0)).toBe(0);
    });
    it("calculates the 1st fibonacci number", function() {
      expect(fibonacciIterative(1)).toBe(1);
    });
    it("calculates the 2nd fibonacci number", function() {
      expect(fibonacciIterative(2)).toBe(1);
    });
    it("calculates the 3rd fibonacci number", function() {
      expect(fibonacciIterative(3)).toBe(2);
    });
    it("calculates the 4th fibonacci number", function() {
      expect(fibonacciIterative(4)).toBe(3);
    });
    it("calculates the 5th fibonacci number", function() {
      expect(fibonacciIterative(5)).toBe(5);
    });
    it("calculates the 17th fibonacci number", function() {
      expect(fibonacciIterative(17)).toBe(1597);
    });
  });

  describe ("fibonacciRecursive()", function() {
    it("calculates the 0th fibonacci number", function() {
      expect(fibonacciRecursive(0)).toBe(0);
    });
    it("calculates the 1st fibonacci number", function() {
      expect(fibonacciRecursive(1)).toBe(1);
    });
    it("calculates the 2nd fibonacci number", function() {
      expect(fibonacciRecursive(2)).toBe(1);
    });
    it("calculates the 3rd fibonacci number", function() {
      expect(fibonacciRecursive(3)).toBe(2);
    });
    it("calculates the 4th fibonacci number", function() {
      expect(fibonacciRecursive(4)).toBe(3);
    });
    it("calculates the 5th fibonacci number", function() {
      expect(fibonacciRecursive(5)).toBe(5);
    });
    it("calculates the 17th fibonacci number", function() {
      expect(fibonacciRecursive(17)).toBe(1597);
    });
  });
});
