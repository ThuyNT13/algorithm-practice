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
      expect(removeDuplicates(arr)).toEqual(2);
    });
    it("returns length of 5 for [0,1,2,3,4] from [0,0,1,1,1,1,2,3,3,4]", function() {
      const arr = [0,0,1,1,1,2,2,3,3,4];
      expect(removeDuplicates(arr)).toEqual(5);
    });
    it("returns length of 1 for [1] from [1,1,1,1,1,1]", function() {
      const arr = [1,1,1,1,1,1];
      expect(removeDuplicates(arr)).toEqual(1);
    })
    it("returns length of 1 for [1] from [1,1,1,1,1,1]", function() {
      const arr = [1,1,2,3,4,4,5,5];
      expect(removeDuplicates(arr)).toEqual(5);
    })
  })
})
