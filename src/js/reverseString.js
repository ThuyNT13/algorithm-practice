/*
to compare runtimes for string reversal JS functions:
 http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/
*/

function reverseStringBuiltin(str) {
  return str.split("").reverse().join("");
}

function reverseStringIterative(str) {
  var newString = "";
  // iterate in decrementing order, adding character at index to new array
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

function reverseStringRecursive(str) {
  // base case
  if (str.length === 1) {
    return str;
  } else {
    // slice string starting at 1 index and
    // concatenate character at 0 index
    return reverseStringRecursive(str.slice(1)) + str[0];
  }

}
