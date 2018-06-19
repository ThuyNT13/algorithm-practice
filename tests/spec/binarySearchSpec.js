describe("binarySearch()", function() {
  const arr = [2, 5, 8, 9, 13, 45, 67, 99];

  describe("perform binary search on ordered array", function() {
    it("returns index", function() {
      expect(binarySearch(arr,67)).toBe(6);
    });
    it("returns mid-index", function() {
      expect(binarySearch(arr, 9)).toBe(3);
      expect(binarySearch(arr, 13)).toBe(4);
    });
    it("returns last index", function() {
      const arr = [1,3,7,12,15,16];
      expect(binarySearch(arr,16)).toBe(arr.length-1);
    });
  });
})
