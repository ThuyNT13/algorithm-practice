describe('tracks the numbers added', function() {
  var tempTrack = new TempTracker();
  describe('insert()', function() {
    tempTrack.insert(5);
    tempTrack.insert(6);
    tempTrack.insert(7);
    tempTrack.insert(3);
    it('records a new temperature', function() {
      expect(tempTrack.minTemp).toBe(3);
      expect(tempTrack.maxTemp).toBe(7);
      console.log(tempTrack);
    });
  });
  describe('getMax()', function() {
    it('returns the highest temp so far', function() {
      expect(getMax()).toBe();
    });
  });
  describe('getMin()', function() {
    it('returns the highest temp so far', function() {
      expect(getMin()).toBe();
    });
  });
  describe('getMean()', function() {
    it('returns the average', function() {
      expect(getMean()).toBe();
    });
  });
  describe('getMode()', function() {
    it('returns the number that appears the most', function() {
      expect(getMode([1, 3, 6, 3, 1, 3])).toBe(3);
    });
  });
})
