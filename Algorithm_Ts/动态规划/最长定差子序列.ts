function longestSubsequence(arr: number[], difference: number): number {
    const dp:number[] = [];
    for (let i = 0; i < arr.length; i++) {
        dp[i] = 1;
    }
    for(let i = 0; i < arr.length; i++){
        for(let j= 0; j < i; j++){
            if(arr[i]-arr[j] == difference){
                dp[i] = Math.max(dp[i], dp[j]+1);
            }
        }
    }
    console.log(dp);
    return Math.max(...dp);
};



const res = longestSubsequence([1,2,3,4,5,6,7,8], 1);
console.log(res);