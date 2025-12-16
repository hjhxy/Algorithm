"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maxProfit(prices) {
    var res = [];
    var stack = [prices[0]];
    for (var i = 1; i < prices.length; i++) {
        if (prices[i] > stack[stack.length - 1]) {
            stack.push(prices[i]);
        }
        else {
            console.log(stack[stack.length - 1], stack[0]);
            res.push(stack[stack.length - 1] - stack[0]);
            stack = [prices[i]];
        }
    }
    res.push(stack[stack.length - 1] - stack[0]);
    res.sort(function (a, b) { return (b - a); });
    console.log(res);
    return res[0] + (res[1] || 0);
}
;
var res = maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0]);
console.log(res);
