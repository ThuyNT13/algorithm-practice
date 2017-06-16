describe('return highest product of 3 integers from array', function() {
  var intArr = [1, 10, -5, 1, -100];

  describe('sortInts()', function() {
    it('sorts', function() {
      expect(sortInts(intArr)).toEqual(
        [-100, -5, 1, 1, 10]
      );
    });
  });

  describe('throws an error if less than 3 in array', function() {
    it('throws Error for [1,2]', function() {
      expect( function() { getHighestProductOf3Ints([1,2]); }).toThrow(new Error("There needs to be at least 3 numbers."));
    })
  })
})
