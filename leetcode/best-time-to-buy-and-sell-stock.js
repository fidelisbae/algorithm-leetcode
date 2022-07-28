// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// let buy = 첫번쨰 인덱스
// let sell = 두번째 인덱스
// sell > buy
// profit = picees[sell] - prices[buy]

var maxProfit = function (prices) {
  let profit = 0;
  let buy = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] <= prices[buy]) {
      buy = i;
      for (let j = buy + 1; j < prices.length; j++) {
        if (prices[j] - prices[buy] > profit) {
          profit = prices[j] - prices[buy];
        }
      }
    }
  }
  return profit;
};

// prices = [7,1,5,3,6,4]
