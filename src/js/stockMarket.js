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

 function get_max_profit(stock_prices_yesterday) {
     var profit = 0;
     var lowestLoss = -Number.MAX_SAFE_INTEGER;
     var lowestPrice = stock_prices_yesterday[0];
     
     for (var indices in stock_prices_yesterday) {
         var value = stock_prices_yesterday[indices];
         var currentProfit = value - lowestPrice;

         // Handle corner case where stock price declines all day
         if(lowestLoss !== null && currentProfit <= 0 && currentProfit > lowestLoss && indices != 0) {
             lowestPrice = value;
             lowestLoss = currentProfit;
         } else if (value < lowestPrice) {
             console.log(value+ " - " +lowestPrice+ " = loss " +currentProfit+ "(" +profit+ ")");
             console.log(value+ " - " +lowestPrice+ " = loss " +currentProfit+ "(" +profit+ ")");
             lowestPrice = value;
             // profit = currentProfit;
         } else if (currentProfit > profit) {
             console.log(value+ " - " +lowestPrice+ " = gain " +currentProfit+ "(" +profit+ ")");
             profit = currentProfit;
             
             // If we get down here, we can make a profit, so clear out lowestLoss
             lowestLoss = null;
         }
     }

     return lowestLoss != null ? lowestLoss : profit;
 }

