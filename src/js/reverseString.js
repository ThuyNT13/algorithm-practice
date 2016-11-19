/*
to compare runtimes for string reversal JS functions:
 http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/
basic string reversals:
https://medium.freecodecamp.com/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb#.fer9ql1zm
*/

function reverseStringBuiltin(str) {
  return str.split("").reverse().join("");
}

function reverseStringIterative(str) {
  var newString = "";
  // iterate in decrementing order, adding character at index to new array
  for (var i=str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

function reverseStringRecursive(str) {
  // base case
  if (str === "") {
    return "";
  } else {
    // extract substring starting at 1 index and
    // concatenate character at 0 index
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }

}
