describe("reverse string", function() {
  var str = "deus ex machina";
  var newString = "anihcam xe sued";
  var strNum = "12345678";
  var strNum2 = "123456789";
  var strNR = "87654321";
  var strN2 = "987654321";

  describe("reverseStringBuiltin()", function() {
    it("reverses string using built-in functions", function() {
      expect(reverseStringBuiltin(str)).toBe(newString);
    });
  });

  describe("reverseStringIterative()", function() {
    it("reverses string using iteration", function() {
      expect(reverseStringIterative(str)).toBe(newString);
    });
  });

  describe("reverseStringRecursive()", function() {
    it("reverses string using recursion", function() {
      expect(reverseStringRecursive(str)).toBe(newString);
      expect(reverseStringRecursive(strNum)).toBe(strNR);
      expect(reverseStringRecursive(strNum2)).toBe(strN2);
    });
  });

  describe("reverseSwapString()", function() {
    it("reverses string by swapping", function() {
      expect(reverseStringRecursive(str)).toBe(newString);
      expect(reverseStringRecursive(strNum)).toBe(strNR);
      expect(reverseStringRecursive(strNum2)).toBe(strN2);
    });
  });

});
