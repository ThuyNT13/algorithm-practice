describe("containsDuplicate()", function() {
  it("returns true for [1,3,4,2,2]", function() {
    const arr = [1,1,4,5,2];
    expect(containsDuplicate(arr)).toBe(true);
  });
  it("returns true for [1,2,3,1]", function() {
    const arr = [1,2,3,1];
    expect(containsDuplicate(arr)).toBe(true);
  });
  it("returns false [9,2,3,8,1,4]", function() {
    const arr = [9,2,3,8,1,4];
    expect(containsDuplicate(arr)).toBe(false);
  });
  it("returns true for [1,3,4,2,2]", function() {
    const arr = [1,3,4,2,2];
    expect(containsDuplicate(arr)).toBe(true);
  });
});

describe("removeDuplicates()", function() {
  describe("removes duplicates from sorted array", function() {
    it("returns length of 2 for [1,2] from [1,1,2]", function() {
      const arr = [1,1,2];
      const result = [2, [1,2]];
      expect(removeDuplicates(arr)).toEqual(result);
    });
    it("returns length of 5 for [0,1,2,3,4] from [0,0,1,1,1,1,2,3,3,4]", function() {
      const arr = [0,0,1,1,1,2,2,3,3,4];
      const result = [5, [0,1,2,3,4]];
      expect(removeDuplicates(arr)).toEqual(result);
    });
    it("returns length of 1 for [1] from [1,1,1,1,1,1]", function() {
      const arr = [1,1,1,1,1,1];
      const result = [1, [1]];
      expect(removeDuplicates(arr)).toEqual(result);
    })
    it("returns length of 5 for [1,2,3,4,5] from [1,1,2,3,4,4,5,5]", function() {
      const arr = [1,1,2,3,4,4,5,5];
      const result = [5, [1,2,3,4,5]];
      expect(removeDuplicates(arr)).toEqual(result);
    });
    it("returns 6 for [-10,-8,-5,0,7,9] from [-10,-10,-8,-8,-8,-5,0,7,7,9]", function() {
      const arr = [-10,-10,-8,-8,-8,-5,0,7,7,9];
      const result = [6, [-10, -8, -5, 0, 7, 9]]
      expect(removeDuplicates(arr)).toEqual(result);
    })
  })
})
