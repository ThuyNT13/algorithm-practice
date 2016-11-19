describe("reverse string", function() {
  describe("reverseStringBuiltin()", function() {
    it("reverses string using built-in functions", function() {
      var str = "supercilious";
      var newString = "suoilicrepus";
      expect(reverseStringBuiltin(str)).toBe(newString);
    });
  });

  describe("reverseStringIterative()", function() {
    it("reverses string using iteration", function() {
      var str = "pandemonium";
      var newString = "muinomednap";
      expect(reverseStringIterative(str)).toBe(newString);
    });
  });

  describe("reverseStringRecursive()", function() {
    it("reverses string using recursion", function() {
      var str = "deus ex machina";
      var newString = "anihcam xe sued";
      expect(reverseStringRecursive(str)).toBe(newString);
    });
  });
});
