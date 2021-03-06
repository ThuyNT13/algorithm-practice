describe("rotateRight()", function() {
  describe("rotates [1,2,3,4,5,6,7] to the right", function(){
    it("by 3 steps", function() {
      const arr = [1,2,3,4,5,6,7];
      const expected = [ 5, 6, 7, 1, 2, 3, 4 ];
      expect(rotateRight(arr,3)).toEqual(expected);
    });
    it("by 2 steps", function() {
      const arr = [1,2,3,4,5,6,7];
      const expected = [6,7,1,2,3,4,5];
      expect(rotateRight(arr,2)).toEqual(expected);
    });
    it("by 1 step", function() {
      const arr = [1,2,3,4,5,6,7];
      const expected = [7,1,2,3,4,5,6];
      expect(rotateRight(arr,1)).toEqual(expected);
    });
  });
  describe("rotates [-1,-100,3,99] to the right", function() {
    it("by 2 steps", function() {
      const arr = [-1,-100,3,99];
      const expected = [3,99,-1,-100];
      expect(rotateRight(arr,2)).toEqual(expected);
    });
    it("by 1 step1", function() {
      const arr = [-1,-100,3,99];
      const expected = [99,-1,-100,3];
      expect(rotateRight(arr,1)).toEqual(expected);
    });
  });
});

describe("rotateLeft()", function() {
  describe("rotates [1, 2, 3, 4, 5, 6, 7] to left", function() {
    it("by 2 steps", function() {
      const arr = [1, 2, 3, 4, 5, 6, 7];
      const expected = [3,4,5,6,7,1,2];
      expect(rotateLeft(arr,2)).toEqual(expected);
    });
    it("by 1 step", function() {
      const arr = [1, 2, 3, 4, 5, 6, 7];
      const expected = [2,3,4,5,6,7,1];
      expect(rotateLeft(arr,1)).toEqual(expected);
    });
  });
  describe("rotates [-1,-100,3,99] to the left", function() {
    it("by 3 steps", function() {
      const arr = [-1,-100,3,99];
      const expected = [99,-1,-100,3];
      expect(rotateLeft(arr,3)).toEqual(expected);
    });
    it("by 1 step1", function() {
      const arr = [-1,-100,3,99];
      const expected = [-100,3,99,-1];
      expect(rotateLeft(arr,1)).toEqual(expected);
    });
  });
});
