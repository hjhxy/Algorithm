function longestArithSeqLength(nums: number[]): number {
    // 二维dp，x表示所有等差集合，y表示每个数的最长等差
    const dp: {
        [key:number]: number;
    }[] = [];
    for (let i = 0; i < nums.length; i++) {
        dp[i] = {};
    }
    for(let i = 1; i < nums.length; i++) {
        for(let j=0; j<i; j++){
            const diff = nums[i] - nums[j];
            const value = dp[j][diff];
            if(value){
                // console.log(i, j, diff, value, dp[i][diff]);
                dp[i][diff] = Math.max(dp[i][diff]||0, value + 1);
                // console.log('=', i, j, diff, value, dp[i][diff]);
            } else {
                dp[i][diff] = 2;
            }
            for(const key in dp[j]){
                if(diff + "" != key){ // 继承
                    dp[i][key] = Math.max(dp[i][key]||0, dp[j][key]);
                    // console.log('--', i, j, diff, value, dp[i][diff], diff+"", key);
                }
            }
        }
    }
    console.log(dp);
    let max = 1;
    const obj = dp[dp.length-1]
    for(const key in obj){
        max = Math.max(max, obj[key]);
    }
    return max;
};

const res = longestArithSeqLength([20,1,15,3,10,5,8]);
console.log(res); // 5