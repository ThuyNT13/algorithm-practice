/*
[execution time limit] 4 seconds (js)

[input] integer n

Initial number of bottles (a positive integer)

[output] array.string

bottles_of_beer(99) = [
"99 bottles of beer on the wall, 99 bottles of beer.",
"Take one down, pass it around, 98 bottles of beer on the wall...",
"98 bottles of beer on the wall, 98 bottles of beer.",
"Take one down, pass it around, 97 bottles of beer on the wall...",
...
"1 bottle of beer on the wall, 1 bottle of beer.",
"Take one down, pass it around, no more bottles of beer on the wall...",
"No more bottles of beer on the wall, no more bottles of beer.",
"Go to the store and buy some more, 99 bottles of beer on the wall..."
]

Specs still failing but possibly due to syntax error.

try recursion.

*/

//DRY 

function bottlesOfBeer(n) {
  let result = [];

  for (let i=n; i>=0; i--) {
    let bottle = (i===1) ? "bottle":"bottles";
    let num = (i===0) ? "No more":(i);

    result.push(num+ " " +bottle+ " of beer on the wall, ");
    num = (i===0) ? "no more":(i);
    result.push(num+ " " +bottle+ " of beer.\n");

    if (i===0) {
      bottle = (n===1) ? "bottle":"bottles";
      result.push("Go to the store and buy some more, " +n+ " " +bottle);
    } else {
      bottle = ((i-1)===1) ? "bottle":"bottles";
      num = (i===1) ? "no more":(i-1);
      result.push("Take one down, pass it around, " +num+ " " +bottle);
    }
    result.push(" of beer on the wall...\n");
  }

  return result.join("");
}
