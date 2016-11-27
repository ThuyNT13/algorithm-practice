function fibonacciIterative(number) {
  if (number === 1 || number === 0) {
    return number;
  }
    var fib1 = 0;
    var fib2 = 1;
    var fibSum = 0;
    for (var i = 0; i < number-1; i++) {
      fibSum = fib1 + fib2;
      // console.log(i+2 + ". " + fib1 + " + " + fib2 + " = " + fibSum);
      fib1 = fib2;
      fib2 = fibSum;
    }
    return fibSum;
}

function fibonacciRecursive(number) {
  if (number === 1 || number === 0) {
    return number;
  }
  return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
}
