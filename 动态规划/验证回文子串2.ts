// 记录不相同元素的个数，最多不超过一个
// function validPalindrome(s: string): boolean {
//     let start = 0;
//     let end = s.length - 1;
//     let count = 0;
//     return traval(start, end, count);
//     function traval(start: number, end:number, count: number): boolean {
//         if(start<end){
//             if(s[start]===s[end]){
//                 start++;
//                 end--;
//                 if(traval(start, end, count)){
//                     return true;
//                 }
//             } else {
//                 if(s[start] === s[end-1]&&!count){
//                     if(traval(start, end-1, count+1)){
//                         return true;
//                     }
//                 } 
//                 if(s[start+1] === s[end]&&!count){
//                     if(traval(start+1, end, count+1)){
//                         return true;
//                     }
//                 }
//                 if(count&&(s[start] !== s[end-1])&&(s[start+1] !== s[end])) {
//                     return false;
//                 }
//             }
//             return false;
//         } else {
//             return true;
//         }
//     }
// };

// 回文子串的长度>=s.length-1;
function validPalindrome(s: string): boolean{
    const dp:number[][] = [];
    for(let i=0; i<s.length; i++){
        dp[i] = [];
        for(let j=i; j<s.length; j++){
            if(i==j){
                dp[i][j] = 1;
            } else if(j==i+1 && s[j]==s[i]) {
                dp[i][j] = 2;
            } else {
                dp[i][j] = 0;
            }
        }
    }
    for(let i=dp.length-1; i>=0; i--){
        for(let j=i+1;j<dp[i].length; j++){
            if(s[i] == s[j]){
                if(i==j-1){
                    dp[i][j] = 2;
                } else {
                    dp[i][j] = dp[i+1][j-1] + 2;
                }
            } else {
                dp[i][j] = Math.max(dp[i][j-1], dp[i+1][j]);
            }
        }
    }
    console.log(dp);
    return dp[0][dp[0].length-1]>=s.length-1;
};

const res = validPalindrome("eceec");
console.log(res);
