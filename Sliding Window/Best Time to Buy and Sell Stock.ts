// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices: number[]): number {

    let left: number = 0
    let right: number = 1
    let maxProfit: number = 0

    while(right < prices.length) {
        if(prices[left] < prices[right]){
            let profit = prices[right] - prices[left]
            maxProfit = maxProfit < profit ? profit : maxProfit
        }else {
            left = right
        }
        right += 1
    }

    return maxProfit
};