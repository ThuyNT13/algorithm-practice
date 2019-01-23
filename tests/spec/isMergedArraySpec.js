describe("isMergedArray()", function() {
  describe("when both halves are the same length", function () {
    it("can return true", function() {
      const actual = isMergedArray([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]);
      const expected = true;
      expect(actual).toEqual(expected);
    })
    it("can return false", function() {
      const actual = isMergedArray([3,4,5],[2,1,6],[1,2,3,4,5,6]);
      const expected = false;
      expect(actual).toEqual(expected);
    })
  })
  describe("when halves are different lengths", function () {
    it("can return true", function() {
      const actual = isMergedArray([2,3,4,5],[1,6],[1,2,3,4,5,6]);
      const expected = true;
      expect(actual).toEqual(expected);
    })
    it("can return false", function () {
      const actual = isMergedArray([1, 5], [2, 3, 6], [1, 2, 6, 3, 5]);
      const expected = false;
      expect(actual).toEqual(expected);
    })
  })
  describe("when one half is empty", function() {
    it("can return true", function () {
      const actual = isMergedArray([], [2, 3, 6], [2, 3, 6]);
      const expected = true;
      expect(actual).toEqual(expected); 
    })
    it("can return false", function() {
      const actual = isMergedArray([2,3,4,5],[], [1,2,3,4,5]);
      const expected = false;
      expect(actual).toEqual(expected);
    })
  })
  describe("when merged array is missing elements", function () {
    it("returns false", function () {
      const actual = isMergedArray([1, 5], [2, 3, 6], [1,3,5,6]);
      const expected = false; 
      expect(actual).toEqual(expected);
    })
  })
  describe("when merged array has extra elements", function () {
    it("returns false", function () {
      const actual = isMergedArray([4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]);
      const expected = false;
      expect(actual).toEqual(expected);
    })
  })
})