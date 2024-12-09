// // 单调栈
// function maxProfit(prices: number[]): number {
//     let stack = [prices[0]];
//     let res = 0;
//     for (let i = 1; i < prices.length; i++) {
//         if(prices[i] > stack[stack.length - 1]) {
//             stack.push(prices[i]);
//         } else {
//             res += stack[stack.length - 1] - stack[0];
//             stack = [prices[i]];
//         }
//     }
//     return res + stack[stack.length - 1] - stack[0];
// };
// 动态规划
function maxProfit(prices: number[]): number {
    let stack = [prices[0]];
    let res = 0;
    for (let i = 1; i < prices.length; i++) {
        if(prices[i] > stack[stack.length - 1]) {
            stack.push(prices[i]);
        } else {
            res += stack[stack.length - 1] - stack[0];
            stack = [prices[i]];
        }
    }
    return res + stack[stack.length - 1] - stack[0];
};



let res = maxProfit([7,1,5,3,6,4]);
console.log(res);