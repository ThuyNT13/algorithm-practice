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
      expect(reverseString(strE)).toBe(expected);
    });
    it("reverses number string '12345678' to '87654321'", function() {
      const expected = "87654321";
      expect(reverseString(strNE)).toBe(expected);
    });
  });

  describe("reverses odd-lengthed string", function() {
    it("reverses 'abcdd' to 'edcba'", function() {
      const expected = "edcba";
      expect(reverseString(strO)).toBe(expected);
    });
    it("reverses number string '123456789' to '987654321'", function() {
      const expected = "987654321";
      expect(reverseString(strNO)).toBe(expected);
    });
  });

  describe("reverses string with white space", function() {
    it("reverses odd-length strings with white space", function() {
      const expected = "anihcam xe sued";
      expect(reverseString(strWO)).toBe(expected);
    });
    it("reverses even-length strings with white space", function() {
      const expected = "tod siht";
      expect(reverseString(strWE)).toBe(expected);
    });
  });

  describe("reverses string with dot", function() {
    it("reverses 'a.' to '.a'", function() {
      const expected = ".a"
      expect(reverseString(strDot)).toBe(expected);
    });
  });
});
