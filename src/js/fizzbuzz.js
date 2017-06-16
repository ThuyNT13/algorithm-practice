function fizzbuzz(number) {
  if (number % 15 === 0) {
    console.log("fizzbuzz");
  } else if (number % 5 === 0) {
    console.log("buzz");
  } else if (number % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(number);;
  }
}

function rightPoint(maxNum, mult1, mult2) {
  for (var i=maxNum; i>0; i--) {
    rightPointLogic(i, mult1, mult2);
  };
}

function rightPointLogic(num, m1, m2) {
  var msg = "";

  if (num % m2 === 0) {
    msg += "Right";
  }
  if (num % m1 === 0) {
    msg += "Point";
  }
  if (msg.length === 0) {
    msg = num.toString();
  }

  print(msg);
}

function print(msg) {
  console.log(msg);
}

rightPoint(50, 4, 5);

// console.log(fizzbuzz());
