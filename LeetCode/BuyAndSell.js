function BuyAndSell(prices) {
  let min = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }
    if (prices[i] < min) {
      min = prices[i];
    }
  }
  return maxProfit;
}

// Example usage:
const prices = [7, 1, 5, 3, 10, 4];
console.log(BuyAndSell(prices));
