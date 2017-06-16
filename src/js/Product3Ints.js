/*
Given an array of integers, find the highest product you can get from three of the integers.

Complexity:
time: O(n log n)  with sorting
      O(n) unsorted
space: O(1)

Bonus
1. What if we wanted the highest product of 4 items? hard-code highestProductOf4
2. What if we wanted the highest product of k items? RECURSION
3. If our highest product is really big, it could overflow ↴ . How should we protect against this?

*/

function getHighestProductOf3Ints(arr) {

  if (arr.length<3) {
    throw new Error("There needs to be at least 3 numbers.");
  }

  var highest = Math.max(arr[0], arr[1]);
  var lowest = Math.min(arr[0], arr[1]);

  var highestProductOf2 = arr[0] * arr[1];
  var lowestProductOf2 = arr[0] * arr[1];

  var highestProductOf3 = arr[0] * arr[1] * arr[2];

  for (var i=0; i<arr.length; i++) {
    var current = arr[i];

    highestProductOf3 = Math.max(
      highestProductOf3, // current highest stored
      current * highestProductOf2, // current iteration
      current * lowestProductOf2 //  current iteration for double negatives edge case
    );

    highestProductOf2 = Math.max(
      highestProductOf2,
      current * highest,
      current * lowest
    )

    lowestProductOf2 = Math.min(
      lowestProductOf2,
      current * highest,
      current * lowest
    )

    highest = Math.max(highest,current);
    lowest = Math.min(lowest,current);
  }

  return highestProductOf3;
}

function sortInts(arr) {
  var sortedArr = arr.slice().sort(function(a,b) {
    // sort in-place
    return a > b ? 1 : -1;
  });
  return sortedArr;
}
