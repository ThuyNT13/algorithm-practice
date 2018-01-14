/**

Use Hashmap to count

1. Create an empty object.
2. For each letter in the array
    2a. If the letter is not a property of the object charMap then add it with value=1
    2b. If the letter is already a property of the object increment the count
3. Return the object containing the letters and their frequencies

**/

function charCountHash(arr) {
  let charMap = {};

  for (var i=0; i<arr.length; i++) {
    let char = arr[i];

    if (charMap.hasOwnProperty(char)) {
      charMap[char]++
    } else {
      charMap[char] = 1;
    }
  }
  console.log(charMap);
  return charMap;
}
