function longestCommonSubsequence(text1: string, text2: string): number {
    const dp:number[][] = [];
    for(let i = 0; i <=text1.length; i++) {
        dp[i] = [];
        for(let j = 0; j <=text2.length; j++){
            if(i==0||j==0){
                dp[i][j] = 0;
            }
        }
    }
    for(let i = 1; i <= text1.length; i++) {
        for(let j=1; j <= text2.length; j++){
            if(text1[i-1] == text2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j])
            }
        }
    }
    console.log(dp);
    return dp[text1.length][text2.length];
};


const res = longestCommonSubsequence("abc", "def");
console.log(res);