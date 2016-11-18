// iterative
// function factorialIterative(num) {
//   var factorial = 1;
//   for (var i = num; i > 0; i--) {
//     factorial *= i;
//   }
//   return factorial;
// }

function factorialIterative(num) {
  var factorial = 1;
  while (num > 0) {
    factorial *= num;
    num --;
  }
  return factorial;
}


// recursive
function factorialRecursive(num) {
  // base cases?
  if (num === 1 || num === 0) {
    return 1;
  }
  // recursive factorial
  return num * factorialRecursive(num - 1);
}
