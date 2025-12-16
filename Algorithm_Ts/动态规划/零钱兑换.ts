function coinChange(coins: number[], amount: number): number {
    const dp = [0];
    for(let i = 1; i <= amount; i++) {
        dp[i] = -1;
    }
    for(let i=1;i<=amount; i++){
        if(coins.indexOf(i)!==-1){
            dp[i] = 1;
            continue;
        }
        for(let j=coins.length-1;j>=0;j--){
            if(i<coins[j]) continue;
            if(dp[i-coins[j]]<=0) continue;
            console.log(i, coins[j], i-coins[j], dp[i-coins[j]] + 1);
            if(dp[i]<=0){
                dp[i] = dp[i-coins[j]] + 1;
            } else {
                dp[i] = Math.min(dp[i]||0, dp[i-coins[j]] + 1);
            }
        }
    }
    console.log(dp);
    return dp[amount];
};


const res = coinChange([2], 3); // [1, 2, 5], 11
console.log(res);