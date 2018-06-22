var Benchmark = require('benchmark');
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
  // watch for off-by-one errors
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

  function reverseStringRecursive(str) {
    // base case
    if (str.length <= 1) {
      return str;
    }
      // slice string starting at 1 index onwards and
      // concatenate character at 0 index to the end; this operation occurs after popping stacks.
      return reverseStringRecursive(str.slice(1)) + str[0];
  }

function reverseSwapString(str) {
  var strArr = str.split("");
  var mid = Math.floor(strArr.length/2);

  // watch for off-by-one errors
  for (var i=0; i<mid; i++) {
    var lastIndices = strArr.length - 1 - i;
    var store = strArr[i];
    // console.log(strArr[i]);

    strArr[i] = strArr[lastIndices];
    strArr[lastIndices] = store;
  };

  return strArr.join("");
};

//  BENCHMARK

const suite = new Benchmark.Suite;
let word = "supercalifragilisticexpialidocious";

suite
  .add("builtin reverse()", function() {
    reverseStringBuiltin(word);
  })
  .add("iterative string reversal", function() {
    reverseStringIterative(word)
  })
  .add("recursive string reversal", function() {
    reverseStringRecursive(word);
  })
  .add("swapped reversal", function() {
    reverseSwapString(word);
  })

  .on("cycle", function(event) {
    console.log(String(event.target));
  })

  .on("complete", function() {
    console.log("Fastest is " + this.filter("fastest").map("name"));
    console.log("Slowest is " + this.filter("slowest").map("name"));
  })

  .run();
