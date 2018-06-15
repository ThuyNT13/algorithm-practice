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
