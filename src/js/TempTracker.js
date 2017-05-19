function TempTracker() {
  this.minTemp = null;
  this.maxTemp = null;
}

TempTracker.prototype.insert = function(temp) {
  if (this.maxTemp === null || temp > this.maxTemp) {
    this.maxTemp = temp;
  };
  if (this.minTemp === null || temp < this.minTemp) {
    this.minTemp = temp;
  };
};

TempTracker.prototype.getMax = function() {
  
};

TempTracker.prototype.getMin = function() {

};

TempTracker.prototype.getMean = function() {

};

TempTracker.prototype.getMode = function() {

};
