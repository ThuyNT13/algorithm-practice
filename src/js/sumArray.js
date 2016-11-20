function sumWhile(numArray) {
  var i = 0;
  var sum = 0;
  while (i < numArray.length) {
    console.log(numArray[i] + " + " + sum + " = " + (numArray[i] + sum));
    sum += numArray[i];
    i++;
  }
  return sum;
}

function sumFor(numArray) {
  var sum = 0;
  for(var i = 0; i < numArray.length; i++) {
    // console.log(numArray[i] + " + " + sum + " = " + (numArray[i] + sumi
    sum += numArray[i];
  }
  return sum;
}
