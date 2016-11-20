function fibonacciIterative(number) {
  if (number <= 1) {
    return number;
  } else {

  }
}

function fibonacciRecursive(number) {
  // base case
  if (number <= 1) {
    return number;
  } else {
    return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
  }
}
