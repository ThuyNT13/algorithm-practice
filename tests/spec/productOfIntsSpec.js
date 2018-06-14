describe('getProductsOfAllIntsExceptAtIndex()', function() {
  describe('returns an array of products for all integers, except at integer.', function() {
    it('[0, 0, 90, 0] for [5, 9, 0, 2]', function() {
      var array = [5, 9, 0, 2];
      expect(getProductsOfAllIntsExceptAtIndex(array)).toEqual([0, 0, 90, 0]);
    });
    it('[84, 12, 28, 21] for [1, 7, 3, 4]', function() {
      var array = [1, 7, 3, 4];
      expect(getProductsOfAllIntsExceptAtIndex(array)).toEqual([84, 12, 28, 21]);
    });
    it('[540, 270, 90, 108, 60] for [1, 2, 6, 5, 9]', function() {
      var array = [1, 2, 6, 5, 9];
      expect(getProductsOfAllIntsExceptAtIndex(array)).toEqual([540, 270, 90, 108, 60]);
    });
    it('for [3, 1, 2, 5, 6, 4]', function() {
      var array = [3, 1, 2, 5, 6, 4];
      expect(getProductsOfAllIntsExceptAtIndex(array)).toEqual([240, 720, 360, 144, 120, 180]);
    });
  });

  describe('throws an error if less than 2 in array', function() {
    it('throws Error for [1]', function() {
      expect( function() { getProductsOfAllIntsExceptAtIndex([1]); }).toThrow(new Error("There needs to be at least 2 numbers."));
    })
  })
})
