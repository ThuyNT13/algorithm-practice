/*
Given an array of integers, find the highest product you can get from three of the integers.

Complexity:
time: O(n log n)
space: O()

*/

function getHighestProductOf3Ints(arr) {

  if (arr.length<3) {
    throw new Error("There needs to be at least 3 numbers.");
  }


}

function sortInts(arr) {
  var sortedArr = arr.slice().sort(function(a,b) {
    // sort in-place
    return a > b ? 1 : -1;
  });
  return sortedArr;
}
