describe("packageWeightEqualsLimit()", function() {
  const arr = [7, 6, 1, 9, 11, 3, 6];
  const srtArr = [1, 3, 6, 6, 7, 9, 11];

  describe("returns indices of pair of integers from array which add up to equal limit", function() {

    it("for limit of 9, returns indices [5, 2]", function() {
      expect(packageWeightEqualsLimit(arr, 9)).toEqual([1,5]);
      expect(packageWeightEqualsLimit(srtArr, 9)).toEqual([1,2]);
    });
    it("for limit of 4, returns indices [2, 5]", function() {
      // expect(packageWeightEqualsLimit(arr, 12)).toEqual([1, 3]);
      // expect(packageWeightEqualsLimit(arr, 12)).toEqual([2, 4]);
      expect(packageWeightEqualsLimit(arr, 4)).toEqual([2,5]);
    });
  })

  it("returns an empty array if no pairs in array add up to equal limit", function() {
    expect(packageWeightEqualsLimit(arr, 5)).toEqual([]);
  });
});
