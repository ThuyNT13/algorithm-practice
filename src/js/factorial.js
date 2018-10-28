/* 
  given integer n, return factorial for n
  5 -> 120
  4 -> 24
  3 -> 6
  2 -> 2
  1 -> 1
  0 -> 0
*/

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

function factorialRecursive(num) {
  // base case
  if (num <= 2) {
    return num;
  }
  // console.log(num + " " + factorialRecursive(num - 1));
  return num * factorialRecursive(num - 1);
}

let memo = [];

function factorialMemoized(num) {
    if (num <= 2) {
      return num;
    }
    
    if (!(num in memo)) {
      memo[num] = factorialMemoized(num-1) * num;
    }

    // console.log(memo);
    return memo[num];
}
