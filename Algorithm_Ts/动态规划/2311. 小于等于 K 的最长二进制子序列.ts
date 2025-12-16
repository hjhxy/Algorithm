// 回溯超时
// function longestSubsequence(s: string, k: number): number {
//     return traval(s, -1, 0, '0', k);
// };

// function traval(s: string, index:number, len: number, num:string, k:number): number{
//     if(parseInt(num, 2)>k || index>=s.length) return len-1;
//     return Math.max(traval(s, index + 1, len+1, num+s[index + 1], k), traval(s, index + 1, len, num, k));
// }


// function longestSubsequence(s: string, k: number): number {
//     const dp:string[][] = [];
//     for(let i=0;i<s.length;i++){
//         dp[i] = [];
//         for(let j=0;j<s.length;j++){
//             dp[i][j] = '';   
//         }
//         if(Number(s[i])<=k){
//             dp[i][0] = s[i];
//         }
//     }
//     for(let i=0;i<s.length;i++){
//         for(let j=0;j<s.length;j++){
//             dp[i][j] = '';   
//         }
//     }
//     console.log(dp);
//     return 1;
// };


function longestSubsequence(s: string, k: number): number {
    let res = 0;
    for(let i=0;i<s.length;i++){
        if(s[i] == '0'){
            res++;
        }
    }
    let num = 0;
    let count = 0;
    for(let i=s.length-1;i>=0;i--){
        if(s[i] == '1') {
            num += Math.pow(2, count);
            if(num<=k){
                res++;
            } else {
                break;
            }
        }
        count++;
        console.log(i, num, res, count);
    }
    return res;
};

const res = longestSubsequence("00101001", 1);
console.log(res);

export {};