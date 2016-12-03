describe('get_max_profit()', function() {
  describe('returns the minimal loss', function() {
    it('returns -2 for [10, 7, 6, 5, 3, 1]', function() {
      var array = [12, 9, 7, 5, 3, 1];
      expect(get_max_profit(array)).toEqual(-2); // returns 0
    });
    it('returns -1 for [10, 9, 8, 7, 6, 5]', function() {
      var array1 = [10, 9, 8, 7, 6, 4];
      expect(get_max_profit(array1)).toEqual(-1); // returns 0
    });
    it('returns 0 for [9, 8, 7, 7, 7, 6]', function() {
      var array2 = [9, 8, 7, 7, 7, 6];
      expect(get_max_profit(array2)).toEqual(0);
    });
  });


// use const i/o var
  describe('returns the highest profit', function() {
    it('returns 7 for [10, 4, 5, 6, 7, 2, 9]', function() {
      var array3 = [10, 4, 5, 6, 7, 2, 9];
      expect(get_max_profit(array3)).toEqual(7);
    })
    it('returns 10 for [10, 7, 5, 15, 11, 9]', function() {
      varc array4 = [10, 7, 5, 15, 11, 9];
      expect(get_max_profit(array4)).toEqual(10);
    });
  });
});
