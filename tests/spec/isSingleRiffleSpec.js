describe("isSingleRiffle()", function() {
  describe("when both halves are the same length", function () {
    it("can return true", function() {
      const actual = isSingleRiffle([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]);
      const expected = true; // => false
      expect(actual).toEqual(expected);
    })
  })
  describe("when halves are different lengths", function () {

    it("can return false", function () {
      const actual = isSingleRiffle([1, 5], [2, 3, 6], [1, 2, 6, 3, 5]);
      const expected = false; // true false 
      expect(actual).toEqual(expected);
    })
  })
  describe("when one half is empty", function() {

    it("can return true", function () {
      const actual = isSingleRiffle([], [2, 3, 6], [2, 3, 6]);
      const expected = true;
      expect(actual).toEqual(expected); // => false
    })
  })
  describe("when shuffled deck is missing cards", function () {

    it("can return false", function () {
      const actual = isSingleRiffle([1, 5], [2, 3, 6], [1, 6, 3, 5]);
      const expected = false; // true false 
      expect(actual).toEqual(expected);
    })
  })
  describe("when shuffled deck has extra cards", function () {

    it("can return false", function () {
      const actual = isSingleRiffle([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8]);
      const expected = false;  // true false
      expect(actual).toEqual(expected);
    })
  })
})