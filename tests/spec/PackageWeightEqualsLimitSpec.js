describe("packageWeightEqualsLimit([7, 6, 1, 9, 11, 3, 6])", function() {
  const arr = [7, 6, 1, 9, 11, 3, 8, 6];

  describe("returns indices of pair of integers from array which add up to equal limit", function() {

    it("for limit of 9, returns indices [5, 1]", function() {
      expect(packageWeightEqualsLimit(arr, 9)).toEqual([5,1]);
    });
    it("for limit of 4, returns indices [2, 5]", function() {
      expect(packageWeightEqualsLimit(arr, 4)).toEqual([2,5]); // -> [5, 2] reversed i>j
    });
    it("for limit 8, returns indices [0, 1]", function() {
      expect(packageWeightEqualsLimit([4,4],8)).toEqual([0,1]); // -> [0, 0] edge case
    });
    it("for limit 13, returns indices [0, 1]", function() {
      expect(packageWeightEqualsLimit([arr], 13)).toEqual([0,1]); // -> [ ] edge case
    });
    it("for limit 14, returns indices [7, 8]", function() {
      expect(packageWeightEqualsLimit([arr],14)).toEqual([7,8]); // -> [ ] edge case
    });
  })

  describe("returns an empty array if no pairs in array add up to equal limit", function() {
    it("", function() {
      expect(packageWeightEqualsLimit(arr, 5)).toEqual([]);
    })
  });
});
