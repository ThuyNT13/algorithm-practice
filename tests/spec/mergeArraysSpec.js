describe("merge 2 arrays", function() {
  describe("when both arrays are empty", function () {
    it("returns an empty array", function() {
      expect(mergeArrays([],[])).toEqual([]);
    })
  })
  describe("when 1st array is empty", function() {
    it("returns 2nd array", function() {
      const actual = mergeArrays([], [3,4,5,8,12]);
      const expected = [3,4,5,8,12];
      expect(actual).toEqual(expected);
    })
  })
  describe("when 2nd array is empty", function() {
    it("returns 1st array", function() {
      const actual = mergeArrays([7,9,12,15,21], []);
      const expected = [7,9,12,15,21];
      expect(actual).toEqual(expected);
    })
  })
  describe("when arrays have same length", function () {
    it("returns 1st array", function () {
      const actual = mergeArrays([3,4,5,6,7,8], [1,8,12,14,19,21]);
      const expected = [1,3,4,5,6,7,8,8,12,14,19,21];
    expect(actual).toEqual(expected);
  })
})
  describe("when arrays have different lengths", function () {
    it("returns 1st array", function () {
      const actual = mergeArrays([3,4,5,6], [1,9]);
      const expected = [1,3,4,5,6,9];
      expect(expected).toEqual(actual);
    })
  })
})