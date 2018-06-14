function TempTracker() {
  this.minTemp = null;
  this.maxTemp = null;

  this.counter = 0;
  this.sum = 0;
  this.mean = null;

  // does this not count as O(n)?
  this.occurences = []; // mode counter
  for (var i=0; i<111; i++) { // arbitrarily set range of 0...110
    this.occurences[i] = 0; // what's the point here?
  }

  this.maxOccurrences = 0;
  this.mode = null;
}

// O(1)
TempTracker.prototype.insert = function(temp) {
  this.counter++;
  this.sum += temp;
  this.mean = this.sum/this.counter;

  this.occurences[temp]++;
  if (this.occurences[temp] > this.maxOccurrences) {
    this.mode = temp;
    this.maxOccurrences = this.occurences[temp];
    console.log(this.occurences[temp]);
  };

  if (this.maxTemp === null || temp > this.maxTemp) {
    this.maxTemp = temp;
  };
  if (this.minTemp === null || temp < this.minTemp) {
    this.minTemp = temp;
  };
};

// O(1)
TempTracker.prototype.getMax = function() {
  return this.maxTemp;
};

// O(1)
TempTracker.prototype.getMin = function() {
  return this.minTemp;
};

// O(1)
TempTracker.prototype.getMean = function() {
  return this.mean;
};

// O(1)
TempTracker.prototype.getMode = function() {
  return this.mode;
};
