
// function Change() {
//   this.memo = {};
// }
//
// Change.prototype.changePossibilitiesTopDown = function(amountLeft, denominations, currentIndex) {
//   currentIndex = (typeof currentIndex !== 'undefined') ? currentIndex : 0;
//
//   var memoKey = [amountLeft, currentIndex].join(', ');
//   // console.log(memoKey);
//
//   if (this.memo.hasOwnProperty(memoKey)) {
//     console.log('grabbing memo [' +memoKey+ ']');
//     return this.memo[memoKey];
//   }
//
//   // BASE CASES:
//   if (amountLeft === 0) return 1;
//
//   // overshoot amountLeft
//   if (amountLeft < 0) return 0;
//
//   // out of denominations
//   if (currentIndex === denominations.length) return 0;
//
//   console.log('Checking ways to make ' +amountLeft+ ' with [' +denominations.slice(currentIndex).join(', ')+ ']');
//
//   var currentCoin = denominations[currentIndex];
//
//   var numPossibilities = 0;
//
//   while (amountLeft >= 0) {
//     numPossibilities += this.changePossibilitiesTopDown(amountLeft, denominations, currentIndex+1)
//     amountLeft -= currentCoin;
//   }
//
//   this.memo[memoKey] = numPossibilities;
//   return numPossibilities;
// };
//
// new Change().changePossibilitiesTopDown(4, [1, 2, 3]);

function changePossibilitiesBottomUp(amount, denominations) {
  var waysOfDoingNCents = [];

  for (var i=0; i<=amount; i++) {
    // initialize arrays of 0s
    waysOfDoingNCents[i] = 0;
  }
  waysOfDoingNCents[0] = 1;

  denominations.forEach( function(coin) {
    for (var higherAmount=coin; higherAmount<=amount; higherAmount++) {
      var higherAmountRemainder = higherAmount - coin;
      waysOfDoingNCents[higherAmount] += waysOfDoingNCents[higherAmountRemainder];
      console.log(waysOfDoingNCents);
      console.log(coin);
    }
    console.log("---");
  });

  console.log(waysOfDoingNCents[amount]);
  return waysOfDoingNCents[amount];
}

// var results = changePossibilitiesBottomUp(5, [1, 3, 5]);
var results = changePossibilitiesBottomUp(4, [1, 2, 3]);
// console.log(results);
