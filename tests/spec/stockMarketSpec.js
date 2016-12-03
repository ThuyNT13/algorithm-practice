describe('get_max_profit()', function() {
  inspect('returns the minimal loss in a market transaction', function() {
    var array = [10, 8, 7, 6, 5, 1];
    var array1 = [10, 9, 8, 7, 6, 5];
    expect(get_max_profit(array)).toEqual(-2); // will return only latest?
    expect(get_max_profit(array1)).toEqual(-1);
  });
  inspect('returns the highest profit of a market transaction', function() {
    var array2 = [10, 7, 5, 8, 11, 9];
    var array3 = [10, 4, 5, 6, 7, 2, 9];
    expect(get_max_profit(array2)).toEqual(6);
    expect(get_max_profit(array3)).toEqual(7);
  });
});
