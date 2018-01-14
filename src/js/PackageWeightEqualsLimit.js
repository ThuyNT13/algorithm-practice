/**
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
    }

    if (charMap.hasOwnProperty(char)) {
      charMap[arr[i]]++;
    } else {
      charMap[arr[i]] = 1;
    }

  }
  // console.log(charMap);
  return [];

}
