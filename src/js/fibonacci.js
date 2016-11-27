function fibonacciIterative(number) {
  if (number === 1 || number === 0) {
    return number;
  }
    var fibPrev = 0;
    var fibCurrent = 1;
    var fibNext = 0;
    for (var i = 0; i < number-1; i++) {
      fibNext = fibPrev + fibCurrent;
      // console.log(i+2 + ". " + fib1 + " + " + fib2 + " = " + fibSum);
      fibPrev = fibCurrent;
      fibCurrent = fibNext;
    }
    return fibNext;
}

function fibonacciRecursive(number) {
  if (number === 1 || number === 0) {
    return number;
  }
  return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
}
