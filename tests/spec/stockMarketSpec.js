describe('get_max_profit()', function() {
  describe('returns the minimal loss', function() {
    it('-2 for [12, 9, 7, 5, 3, 0]', function() {
      var array = [12, 9, 7, 5, 3, 0];
      expect(get_max_profit(array)).toEqual(-2); // => 0
    });
    it('-1 for [10, 9, 8, 7, 6, 5]', function() {

      var array1 = [10, 9, 8, 7, 6, 4];
      expect(get_max_profit(array1)).toEqual(-1); // => 0
    });
    it('0 for [9, 8, 7, 7, 7, 6]', function() {
      var array2 = [9, 8, 7, 7, 7, 6];
      expect(get_max_profit(array2)).toEqual(0);
    });
    it('0 for [12, 12]', function() { // do we need this? 
      var array = [12, 12];
      expect(get_max_profit(array)).toEqual(0);
    });
  });

  describe('returns the highest profit', function() {
    it('7 for [10, 4, 5, 6, 7, 2, 9]', function() {
      var array3 = [10, 4, 5, 6, 7, 2, 9];
      expect(get_max_profit(array3)).toEqual(7);
    });
    it('10 for [10, 7, 5, 15, 11, 9]', function() {
      var array4 = [10, 7, 5, 15, 11, 9];
     expect(get_max_profit(array4)).toEqual(10);
    });
  });
});
