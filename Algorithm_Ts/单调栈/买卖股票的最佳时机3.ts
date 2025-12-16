// 


let res = maxProfit([1,2,4,2,5,7,2,4,9,0]);
console.log(res);


export {}


// 单调栈存在问题，单调栈是选择所有满足要求的
    // function maxProfit(prices: number[]): number {
    //     let res:number[] = [];
    //     let stack:number[] = [prices[0]];
    //     for(let i=1;i<prices.length;i++){
    //         if(prices[i]>stack[stack.length-1]){
    //             stack.push(prices[i]);
    //         } else {
    //             console.log(stack[stack.length-1] , stack[0]);
    //             res.push(stack[stack.length-1] - stack[0]);
    //             stack = [prices[i]];
    //         }
    //     }
    //     res.push(stack[stack.length-1] - stack[0]);
    //     res.sort((a, b)=>(b-a));
    //     console.log(res);
    //     return res[0]+(res[1]||0);
    // };