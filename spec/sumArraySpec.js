describe("summing up array of numbers", function() {
  var numArray = [403, 211, 53, 8, 17, 36, 338];

  describe("sumWhile()", function() {
    it("adds up numbers in array using 'while' loop", function() {
      expect(sumWhile(numArray)).toBe(1066);
    });
  });

  describe("sumFor()", function() {
    it("adds up numbers in array using 'for' loop", function() {
      expect(sumWhile(numArray)).toBe(1066);
    });
  });
});
