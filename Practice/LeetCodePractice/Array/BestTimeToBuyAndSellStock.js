function BuyAndSell(prices){
    let maxProfit = 0;
    let min = prices[0];
    for(let i = 0; i < prices.length; i++){
        if(prices[i] - min > maxProfit){
            maxProfit = prices[i] - min;
        }
        if(prices[i] < min){
            min = prices[i];
        }
    }
    return maxProfit;
}

const prices = [7, 1, 5, 3, 10, 4];
console.log(BuyAndSell(prices));
