// 动态规划版
function maxProfit(prices) {
    var dp = [0];
    for (var i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            dp[i] = prices[i] - prices[i - 1] + dp[i - 1];
        }
        else {
            dp[i] = dp[i - 1];
        }
    }
    console.log(dp);
    return dp[dp.length - 1];
}
;
var res = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(res);
