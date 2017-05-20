describe('tracks the numbers added', function() {
  var tempTrack = new TempTracker();
  tempTrack.insert(5);
  tempTrack.insert(6);
  tempTrack.insert(7);
  tempTrack.insert(3);
  tempTrack.insert(6);
  // console.log(tempTrack);

  describe('insert()', function() {
    it('records a new temperature', function() {
      expect(tempTrack.minTemp).toBe(3);
      expect(tempTrack.maxTemp).toBe(7);
    });
  });
  describe('getMax()', function() {
    it('returns the highest temp so far', function() {
      expect(tempTrack.getMax()).toBe(7);
    });
  });
  describe('getMin()', function() {
    it('returns the highest temp so far', function() {
      expect(tempTrack.getMin()).toBe(3);
    });
  });
  describe('getMean()', function() {
    it('returns the average', function() {
      expect(tempTrack.getMean()).toBe(5.4);
    });
  });
  describe('getMode()', function() {
    it('returns the number that appears the most', function() {
      expect(tempTrack.getMode()).toBe(6);
    });
  });
})
