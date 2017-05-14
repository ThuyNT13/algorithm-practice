describe('getMaxProfit()', function() {
  describe('returns the minimal loss', function() {
    it('-2 for [12, 9, 7, 5, 3, 0]', function() {
      var array = [12, 9, 7, 5, 3, 0];
      expect(getMaxProfit(array)).toEqual(-2); // => 0
    });
    it('-1 for [10, 9, 8, 7, 6, 4]', function() {
      var array1 = [10, 9, 8, 7, 6, 4];
      expect(getMaxProfit(array1)).toEqual(-1); // => 0
    });
    it('0 for [9, 8, 7, 7, 7, 6]', function() {
      var array2 = [9, 8, 7, 7, 7, 6];
      expect(getMaxProfit(array2)).toEqual(0);
    });
    it('0 for [12, 12, 10, 9, 3]', function() {
      var array = [12, 12, 11, 9, 3];
      expect(getMaxProfit(array)).toEqual(0);
    });
  });

  describe('returns the highest profit', function() {
    it('7 for [10, 4, 5, 6, 7, 2, 9]', function() {
      var array3 = [10, 7, 5, 8, 11, 9];
      expect(getMaxProfit(array3)).toEqual(6);
    });
    it('10 for [10, 7, 5, 15, 11, 9]', function() {
      var array4 = [10, 7, 5, 15, 11, 9];
     expect(getMaxProfit(array4)).toEqual(10);
    });
  });

  describe('throws an error when there are less than 2 prices.', function() {
    it('throws Error for [1]', function() {
      var array4 = [1];
      expect( function() { getMaxProfit(array4); } ).toThrow(new Error("At least 2 prices needed."));
    });
  });
});
