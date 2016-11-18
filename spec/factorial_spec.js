describe("factorialIterative()", function() {
  it("calculates 0 iterative factorial", function() {
    expect(factorialIterative(0)).toEqual(1);
  });

  it("calculates 1 iterative factorial", function() {
    expect(factorialIterative(1)).toEqual(1);
  });

  it("calculates 2 iterative factorial", function() {
    expect(factorialIterative(2)).toEqual(2);
  });

  it("calculates 3 iterative factorial", function() {
    expect(factorialIterative(3)).toEqual(6);
  });

  it("calculates 5 iterative factorial", function() {
    expect(factorialIterative(5)).toEqual(120);
  });

  it("calculates 10 iterative factorial", function() {
    expect(factorialIterative(10)).toEqual(3628800);
  });
});

describe("factorialRecursive()", function() {
  it("calculates 0 recursive factorial", function() {
    expect(factorialRecursive(0)).toEqual(1);
  });

  it("calculates 1 recursive factorial", function() {
    expect(factorialRecursive(1)).toEqual(1);
  });

  it("calculates 2 recursive factorial", function() {
    expect(factorialRecursive(2)).toEqual(2);
  });

  it("calculates 3 recursive factorial", function() {
    expect(factorialRecursive(3)).toEqual(6);
  });

  it("calculates 5 recursive factorial", function() {
    expect(factorialRecursive(5)).toEqual(120);
  });

  it("calculates 10 recursive factorial", function() {
    expect(factorialRecursive(10)).toEqual(3628800);
  });
});
