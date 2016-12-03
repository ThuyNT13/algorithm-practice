/*
Suppose we could access yesterday's stock prices as an array, where:
The indices are the time in minutes past trade opening time, which was 9:30am local time.
The values are the price in dollars of Apple stock at that time.
So if the stock cost $500 at 10:30am, stock_prices_yesterday[60] = 500.
Write an efficient function that takes stock_prices_yesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
For example:
  stock_prices_yesterday = [10, 7, 5, 8, 11, 9]

get_max_profit(stock_prices_yesterday)
  returns 6 (buying for $5 and selling for $11)

No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).
*/

function get_max_profit(array) {

  var lowestPrice = array[0];
  var profit = 0;
    for (var indices in array) {
      var value = array[indices];
      // console.log("value: " + value + "; indices: " + indices + "; lowest$: " + lowestPrice); // prints
        currentProfit = value - lowestPrice;
        console.log("if value < lp: " + value + " - lowestPrice " + lowestPrice + " = " + currentProfit + "(profit: )" + profit);
        // profit = currentProfit;
      if (currentProfit < profit) { // currentProfit = negative number
        // console.log(" profit " + profit + " vs currentProfit " + currentProfit); // same
        lowestPrice = value;
      } else if (currentProfit >= profit) {
        console.log("else if, value >lp : " + value + " lowestPrice: " + lowestPrice);
        // console.log("before profit: " + profit); // stays array[0]
        // currentProfit = value - lowestPrice;
          profit = currentProfit;
        console.log("after profit: " + profit);
      }
    }
  return profit;
}
