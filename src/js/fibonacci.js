function fibonacciIterative(number) {
  if (number === 1 || number === 0) {
    return number;
  }

// incrementing iterative
    var fibPrev = 0;
    var fibCurrent = 1;
    var fibNext = 0;
    for (var i = 2; i <= number; i++) {
      fibNext = fibPrev + fibCurrent;
      console.log(i + ". " + fibPrev + " + " + fibCurrent + " = " + fibNext);
      fibPrev = fibCurrent;
      fibCurrent = fibNext;
    }
    return fibNext;

// decrementing iterative
//     var previous = 0,
//       current = 1,
//       next;
//     for (var i = number; i > 1; i--) {
//       next = previous + current;
//       console.log(i + ". " + previous + " + " + current + " = " + next);
//       previous = current;
//       current = next;
//     }
//     return current;
}

function fibonacciRecursive(number) {
  if (number === 1 || number === 0) {
    return number;
  }
  return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
}
