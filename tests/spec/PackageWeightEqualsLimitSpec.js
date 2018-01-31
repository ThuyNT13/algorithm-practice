describe("packageWeightEqualsLimit()", function() {
  const arr = [4, 6, 10, 16, 15]
  const arr2 = [7, 6, 1, 10, 15, 3, 8, 11];

  describe("returns indices of pair of integers from array which add up to equal limit", function() {

    it("8, returns indices [1, 0]", function() {
      expect(packageWeightEqualsLimit([4,4],8)).toEqual([1,0]); // edge case
    });
    it("5, returns indices [2, 1]", function() {
      expect(packageWeightEqualsLimit([4,4,1],5)).toEqual([2,1]); // => [2,0] edge case
    });
    it("5, returns indices [2, 1]", function() {
      expect(packageWeightEqualsLimit([7,4,4],8)).toEqual([2,1]); // edge case
    });
    it("22, returns indices [3, 1]", function() {
      expect(packageWeightEqualsLimit(arr, 22)).toEqual([3,1]);
    });
    it("31, returns indices of [4, 3]", function() {
      expect(packageWeightEqualsLimit(arr, 31)).toEqual([4,3]);
    })
    it("9, returns indices [5, 1]", function() {
      expect(packageWeightEqualsLimit(arr2, 9)).toEqual([5,1]);
    });
    it("4, returns indices [5, 2]", function() {
      expect(packageWeightEqualsLimit(arr2, 4)).toEqual([5,2]);
    });
    it("13, returns indices [1, 0]", function() {
      expect(packageWeightEqualsLimit(arr2, 13)).toEqual([1,0]); // [ ] edge case
    });
    it("14, returns indices [7, 6]", function() {
      expect(packageWeightEqualsLimit(arr2,19)).toEqual([7,6]); // [ ] edge case
    });
  })

  describe("returns an empty array if no pairs in array add up to equal limit", function() {
    it("5 returns []", function() {
      expect(packageWeightEqualsLimit(arr2, 5)).toEqual([]);
    });
    it("9, returns []", function() {
      expect(packageWeightEqualsLimit([9],9)).toEqual([]);
    })
  });
});
