function minValidStrings(words: string[], target: string): number {
    const dp:number[][] = [];
    const MAX = target.length + 1;
    for(let i = 0; i < target.length; i++) {
        dp[i] = [];
        for(let j=0;j<target.length;j++){
            dp[i][j] = MAX;
        }
    }
    const res = getDp(words, dp, MAX, 0, target.length-1, target);
    // console.log(dp);
    return res;
};

function getDp(words: string[], dp: number[][], MAX: number, start:number, end: number, target: string): number {
    if(dp[start][end] !== MAX) return dp[start][end];
    for(let j=0; j< words.length; j++){
        if(words[j].indexOf(target.substring(start, end + 1)) === 0){
            dp[start][end] = 1;
            return dp[start][end]
        }
    }
    let min = MAX;
    for(let i=start; i<end; i++){
        let dp_front = getDp(words, dp, MAX, start, i, target);
        let dp_back = getDp(words, dp, MAX, i + 1, end, target);
        if( dp_front == -1 || dp_back == -1){
            continue;
        }
        min = Math.min(min, dp_front + dp_back);
        // console.log(target.substring(start, i+1), target.substring(i, end + 1), min, dp_front, dp_back, start, end);
    }
    if(min == MAX){
        dp[start][end] = -1;
    } else {
        dp[start][end] = min;
    }
    return dp[start][end];
}



const res = minValidStrings(["abababab","ab"], "ababaababa");
console.log(res);