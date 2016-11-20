function fibonacciIterative(number) {
  if (number <= 1) {
    return number;
  } else {
    var fib = [0,1];
    var fibSum = 0;
    for (var i = 0; i < number-1; i++) {
      fibSum = ((fib[0]) + (fib[1]));
      // console.log(i+2 + ". " + fib[0] + " + " + fib[1] + " = " + fibSum);
      fib[0] = fib[1];
      fib[1] = fibSum;
    }
    return fibSum;
  }
}

function fibonacciRecursive(number) {
  if (number <= 1) { // base case
    return number;
  }
  return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
}
