describe("charCountHash()", function() {
  it("returns sorted frequency hash for array of numbers", function() {
    const arr = [7, 6, 11, 6, 9, 11, 3, 6];
    const result = {3:1, 6:3, 7:1, 9:1, 11:2};
    expect(charCountHash(arr)).toEqual(result);
  });

  it("returns sorted frequency hash for array of letters", function() {
    const arr = ["a","c","c","d","a","c","c"];
    const result = { a: 2, c: 4, d: 1 };
    expect(charCountHash(arr)).toEqual(result);
  });
});
