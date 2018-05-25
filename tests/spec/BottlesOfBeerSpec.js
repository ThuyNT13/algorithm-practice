describe('bottlesOfBeer()', function() {
  it('returns lines of lyric with correct pluralization for 2, 1 and 0 bottles', function() {
    const result = "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down, pass it around, 1 bottle of beer on the wall...\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down, pass it around, no more bottles of beer on the wall...\nno more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 2 bottles of beer on the wall...";
    expect(bottlesOfBeer(2)).toBe(result);
  });
  it('returns lines of lyric with correct pluralization for 1 and 0 bottles', function() {
    const result = "1 bottle of beer on the wall, 1 bottle of beer.\nTake one down, pass it around, no more bottles of beer on the wall...\nno more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 2 bottles of beer on the wall...";
    expect(bottlesOfBeer(1)).toBe(result);
  })
})
