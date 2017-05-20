function TempTracker() {
  this.minTemp = null;
  this.maxTemp = null;

  this.counter = 0;
  this.sum = 0;
  this.mean = null;
}

// O(1)
TempTracker.prototype.insert = function(temp) {
  this.counter++;
  this.sum += temp;
  this.mean = this.sum/this.counter;

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

TempTracker.prototype.getMode = function() {

};
