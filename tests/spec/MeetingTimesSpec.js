describe('merges overlapping times', function() {
  var timeArr = [
    {startTime: 3,  endTime: 5},
    {startTime: 10, endTime: 12},
    {startTime: 0,  endTime: 1},
    {startTime: 9,  endTime: 10},
    {startTime: 4,  endTime: 8},
  ]

  var timeArr2 =   [
      {startTime: 3, endTime: 5},
      {startTime: 1, endTime: 10},
      {startTime: 2, endTime: 6},
      {startTime: 7, endTime: 9},
  ]

  describe('sortTimes()', function() {
    it('sorts', function() {
      expect(sortTimes(timeArr)).toEqual([
        {startTime: 0,  endTime: 1},
        {startTime: 3,  endTime: 5},
        {startTime: 4,  endTime: 8},
        {startTime: 9,  endTime: 10},
        {startTime: 10, endTime: 12},
      ]);
      expect(sortTimes(timeArr2)).toEqual([
        {startTime: 1, endTime: 10},
        {startTime: 2, endTime: 6},
        {startTime: 3, endTime: 5},
        {startTime: 7, endTime: 9},
      ]);
    });
  });

  describe('mergeRanges()', function() {
    it('returns merged times', function() {
      expect(mergeRanges(timeArr)).toEqual([
        {startTime: 0, endTime: 1},
        {startTime: 3, endTime: 8},
        {startTime: 9, endTime: 12},
      ]);
      expect(mergeRanges(timeArr2)).toEqual([
        {startTime: 1, endTime: 10}
      ]);
    });
  });
})
