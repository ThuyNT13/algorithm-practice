describe("reverse string", function() {

  const strNE = "12345678";
  const strNO = "123456789";
  const strE = "abcd";
  const strO = "abcde";
  const strWO = "deus ex machina";
  const strWE = "this dot";
  const strDot = "a.";

  describe("reverses even-lengthed string", function() {
    it("reverses 'abcd' to 'dcba'", function() {
      const expected = "dcba";
      expect(reverseStringBuiltin(strE)).toBe(expected);
      expect(reverseStringIterative(strE)).toBe(expected);
      expect(reverseStringRecursive(strE)).toBe(expected);
      expect(reverseSwapString(strE)).toBe(expected);
    });
    it("reverses number string '12345678' to '87654321'", function() {
      const expected = "87654321";
      expect(reverseStringBuiltin(strNE)).toBe(expected);
      expect(reverseStringIterative(strNE)).toBe(expected);
      expect(reverseStringRecursive(strNE)).toBe(expected);
      expect(reverseSwapString(strNE)).toBe(expected);
    });
  });

  describe("reverses odd-lengthed string", function() {
    it("reverses 'abcdd' to 'edcba'", function() {
      const expected = "edcba";
      expect(reverseStringBuiltin(strO)).toBe(expected);
      expect(reverseStringIterative(strO)).toBe(expected);
      expect(reverseStringRecursive(strO)).toBe(expected);
      expect(reverseSwapString(strO)).toBe(expected);
    });
    it("reverses number string '123456789' to '987654321'", function() {
      const expected = "987654321";
      expect(reverseStringBuiltin(strNO)).toBe(expected);
      expect(reverseStringIterative(strNO)).toBe(expected);
      expect(reverseStringRecursive(strNO)).toBe(expected);
      expect(reverseSwapString(strNO)).toBe(expected);
    });
  });

  describe("reverses string with white space", function() {
    it("reverses odd-length strings with white space", function() {
      const expected = "anihcam xe sued";
      expect(reverseStringBuiltin(strWO)).toBe(expected);
      expect(reverseStringIterative(strWO)).toBe(expected);
      expect(reverseStringRecursive(strWO)).toBe(expected);
      expect(reverseSwapString(strWO)).toBe(expected);
    });
    it("reverses even-length strings with white space", function() {
      const expected = "tod siht";
      expect(reverseStringBuiltin(strWE)).toBe(expected);
      expect(reverseStringIterative(strWE)).toBe(expected);
      expect(reverseStringRecursive(strWE)).toBe(expected);
      expect(reverseSwapString(strWE)).toBe(expected);
    });
  });

  describe("reverses string with dot", function() {
    it("reverses 'a.' to '.a'", function() {
      const expected = ".a"
      expect(reverseStringBuiltin(strDot)).toBe(expected);
      expect(reverseStringIterative(strDot)).toBe(expected);
      expect(reverseStringRecursive(strDot)).toBe(expected);
      expect(reverseSwapString(strDot)).toBe(expected);
    });
  });
});
