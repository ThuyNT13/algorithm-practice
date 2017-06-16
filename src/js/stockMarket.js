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

Complexity
time: O(n)
space: O(1)

 */

function getMaxProfit(stockYesterday) {
  if (stockYesterday.length < 2) {
    throw new Error("At least 2 prices needed.")
  }

  var profit = stockYesterday[1] - stockYesterday[0];
  var lowestPrice = stockYesterday[0];

  // start at 2 index as not able to buy until there are 2
  for (var i=1; i<stockYesterday.length; i++) {
    var currentPrice = stockYesterday[i];
    var currentProfit = currentPrice - lowestPrice;

    if (currentPrice < lowestPrice) { lowestPrice = currentPrice; }
    if (currentProfit > profit) { profit = currentProfit; }
  }
  return profit;
}

// alternative shorthand of same process
function getMaxProfitMinLoss(stockYesterday) {
  var minPrice = stockYesterday[0];
  var maxProfit = stockYesterday[1] - stockYesterday[0];

  if (stockYesterday.length < 2) {
    throw new Error("At least 2 prices needed.")
  }

  // start at 2 index as not able to buy until there are 2
  for (var i=1; i<stockYesterday.length; i++) {
    var currentVal = stockYesterday[i];
    // calculate profit first with current minPrice
    var profit = currentVal - minPrice;

    // returns the lowest of the two
    minPrice = Math.min(minPrice, currentVal);

    // returns the highest of the two
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
}
