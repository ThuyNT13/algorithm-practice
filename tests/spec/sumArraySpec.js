describe("summing up array of numbers", function() {
  const arr = [403, 211, 53, 8, 17, 36, 338];
  describe("sumArray()", function() {
    it("adds up numbers", function() {
      expect(sumArray(arr)).toBe(1066);
    });
  });
});
