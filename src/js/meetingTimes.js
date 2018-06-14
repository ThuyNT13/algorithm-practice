/*
Write a function for merging overlapping times

Bonus
1. What if we did have an upper bound on the input values? Could we improve our runtime? Would it cost us memory?
2. Could we do this "in-place" on the input array and save some space? What are the pros and cons of doing this in-place?

O(n lg n) time and O(n) space.

if already sorted, O(n) time.
*/

function mergeRanges(meetings) {
  var sortedMeetings = sortTimes(meetings);

  return mergeTimes(sortedMeetings);
}

function sortTimes(arr) {
  var sortedArr = arr.slice().sort(function(a,b) {
    // sort in-place
    return a.startTime > b.startTime ? 1 : -1;
  });
  return sortedArr;
}

function mergeTimes(sorted) {
  // initialize with earliest meeting
  var merged = [sorted[0]];

  for (var i=0; i<sorted.length; i++) {
    var currentMeeting = sorted[i]; // is this necessary?
    var lastMergedMeeting = merged[merged.length - 1];

    // if current and last meetings overlap,
    // change last meeting end time to greater of two
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(currentMeeting.endTime, lastMergedMeeting.endTime);
    // add to merged
    } else {
      merged.push(currentMeeting);
    }
  };
  return merged;
}

// var timeArr = [
//   {startTime: 3,  endTime: 5},
//   {startTime: 10, endTime: 12},
//   {startTime: 0,  endTime: 1},
//   {startTime: 9,  endTime: 10},
//   {startTime: 4,  endTime: 8},
// ]

var timeArr =   [
    {startTime: 3, endTime: 5},
    {startTime: 1, endTime: 10},
    {startTime: 2, endTime: 6},
    {startTime: 7, endTime: 9},
]

var mergedArr = mergeRanges(timeArr);

console.log(mergedArr);
