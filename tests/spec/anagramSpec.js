describe("isAnagram()", function() {
  describe("returns true for ", function() {
    it("'anagram' and 'nagaram'", function() {
      const str = "melon";
      const str2 = "lemon";
      expect(isAnagram(str,str2)).toBe(true);
    });
  });
  describe("returns false for", function() {
    it("'rat' and 'car'", function() {
      const str = "rat";
      const str2 = "car";
      expect(isAnagram(str,str2)).toBe(false);
    });
  });
  describe("returns false for", function() {
    it("'a' and 'b'", function() {
      const str = "a";
      const str2 = "b"
      expect(isAnagram(str,str2)).toBe(false);
    });
  });
});
