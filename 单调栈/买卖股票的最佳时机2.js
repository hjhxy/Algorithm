function maxProfit(prices) {
    var stack = [prices[0]];
    var res = 0;
    for (var i = 1; i < prices.length; i++) {
        if (prices[i] > stack[stack.length - 1]) {
            stack.push(prices[i]);
        }
        else {
            res += stack[stack.length - 1] - stack[0];
            stack = [prices[i]];
        }
    }
    return res;
}
;
var res = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(res);
