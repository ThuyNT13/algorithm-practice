var result = 1;
for (var i = 0; i < 5; i++) {
  console.log(i + " + " + result + " = " + (i + result));
  result += i;
}
console.log("-----");
console.log("The result is " + result);
console.log("---------------");

var numbers = [1, 2, 3, 4];
var counter = 0;
var sum = 0;

// while (counter < numbers.length) {
//   console.log(numbers[counter] + " + " + sum + " = " + (numbers[counter] + sum));
//   sum += numbers[counter];
//   counter++;
// }
// console.log("-----");
// console.log("Total sum is " + sum);
// console.log("-----------------");

for(var counter = 0; counter < numbers.length; counter++) {
  console.log(numbers[counter] + " + " + sum + " = " + (numbers[counter] + sum));
  sum += numbers[counter];
}
console.log("-----");
console.log("Total sum is " + sum);
console.log("---------------");
