/**
Given a package with a weight limit limit and an array arr of item weights, implement a function getIndicesOfItemWeights that finds two items whose sum of weights equals the weight limit limit. Your function should return a pair [i, j] of the indices of the item weights, ordered such that i < j. If such a pair doesn’t exist, return an empty array.

Constraints:

- [time limit] 5000ms

- [input] array.integer arr
  - 0 ≤ arr.length ≤ 100

- [input] integer limit

- [output] array.integer


**/

function packageWeightEqualsLimit(arr, limit) {
  let charMap = {};

  for (var i=0; i<arr.length; i++) {
    let char = arr[i];
    let compLimit = limit-char;

    if (charMap.hasOwnProperty(compLimit)) {
      console.log(arr.indexOf(char)+ ":" +arr.indexOf(compLimit));
      return [arr.indexOf(char), arr.indexOf(compLimit)];
    } else {
      charMap[arr[i]] = 1;
    }

  }

  // NESTED LOOP
  // for (var i=0; i<arr.length; i++) {
  //   for (var j=i+1; j<arr.length; j++) {
  //     console.log("i: " +arr[i]+ ", j: " +arr[j]);
  //   }
  // }
  // console.log("charMap: "charMap);

  return [];
}