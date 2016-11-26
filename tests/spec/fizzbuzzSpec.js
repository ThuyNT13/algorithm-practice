describe('fizzbuzz()', function() {
  it('returns number if neither divisible by 3 or 5', function() {
    expect(fizzbuzz(1)).toBe(1);
    expect(fizzbuzz(2)).toBe(2);
    expect(fizzbuzz(56)).toBe(56);
  });
  it('returns "fizz" for numbers divisible by 3', function() {
    expect(fizzbuzz(3)).toBe("fizz");
    expect(fizzbuzz(6)).toBe("fizz");
    expect(fizzbuzz(477)).toBe("fizz");
  });
  it('returns "buzz" for numbers divisible by 5', function() {
    expect(fizzbuzz(5)).toBe("buzz");
    expect(fizzbuzz(10)).toBe("buzz");
    expect(fizzbuzz(160)).toBe("buzz");
  });
  it('returns "fizzbuzz" for numbers divisible by 15', function() {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
    expect(fizzbuzz(165)).toBe("fizzbuzz");
    expect(fizzbuzz(480)).toBe("fizzbuzz");
  });
});
