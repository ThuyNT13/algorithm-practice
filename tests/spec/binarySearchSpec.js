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
      expect(binarySearch(arr,99)).toBe(arr.length-1);
    });
    it("returns -1 if element not found", function() {
      expect(binarySearch(arr, 21)).toBe(-1);
    });
  });
 })
