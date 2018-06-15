describe("isPalindrome()", function() {
  describe("returns true for ", function() {
    it("'A man, a plan, a canal: Panama'", function() {
      const str = "A man, a plan, a canal: Panama";
      expect(isPalindrome(str)).toBe(true);
    });
  });
  describe("returns true for", function() {
    it("'alula'", function() {
      const str = "alula";
      expect(isPalindrome(str)).toBe(true);
    });
  });
  describe("returns false for", function() {
    it("'race a car'", function() {
      const str = "race a car";
      expect(isPalindrome(str)).toBe(false);
    });
  });
  describe("returns true for", function() {
    it("empty string", function() {
      const str = "";
      expect(isPalindrome(str)).toBe(true);
    });
  });
});
