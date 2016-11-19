function total(numbers) {
  var sum = 0;
  // shorthand for (var i = 0; i < numbers.length; i++)
  for (var i in numbers) {
    sum += numbers[i];
  }
  return sum;
}

function mean(numbers) {
  return total(numbers)/numbers.length;
}

function median(numbers) {
  // note that sort is destructive and by itself treats numbers as strings, necessitating extra compare function, asc
  // shorthand compare for function(a, b){return a-b}
  numbers.sort((a, b) => a - b);

  var midPoint = (numbers.length -1) / 2;

  return (numbers[Math.floor(midPoint)] + numbers[Math.ceil(midPoint)]) / 2;
}

// alternative, which is faster?
function median(numbers) {
  numbers.sort((a, b) => a - b);

  var midIndex = Math.floor(numbers.length / 2);

  if ((numbers.length % 2) == 0) {
    return (numbers[midIndex] + numbers[midIndex - 1]) / 2;
  } else {
    return numbers[midIndex];
  }
}

function mode(numbers) {

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

  // sort array and compare => function(a, b) { if (a===b) {... }
    // - if numbers are equal
      // - set counter and keep track of maxCount
      // - assign to currentMode if maxCount is more than current maxCount
  //  -

}
