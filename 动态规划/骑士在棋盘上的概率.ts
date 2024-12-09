function knightProbability(n: number, k: number, row: number, column: number): number {
    if(k===0) return 1;
    const remember: [number, number] = [0, 0];
    const dp: number[][][] = [];
    for(let i = 0; i <= k; i++){
        dp[i] = [];
        for(let j = 0; j < n; j++){
            dp[i][j] = [];
            for(let m = 0; m < n; m++){
                if(k==0) dp[i][j][m] = 1;
                else dp[i][j][m] = 0;
            }
        }
    }
    traval(n, k, row, column, remember, dp);
    console.log(dp);
    return dp[k][row][column]/Math.pow(8, k);
};

function traval(n: number, k: number, row: number, column: number, remember: [number, number], dp: number[][][]): number{
    if(dp[k]?.[row]?.[column]) {
        console.log('进入', k, row, column, dp[k][row][column]);
        return dp[k][row][column];
    }
    if(k==0&&row>=0&&row<n&&column>=0&&column<n) {
        console.log(k, row, column, remember);
        return 1;
    } 
    if(k==0||row>=n||column>=n||row<0||column<0) {
        console.log('xxx', k, row, column, remember);
        return 0;
    }
    let res1 = traval(n, k-1, row-2, column-1, remember, dp);
    let res2 = traval(n, k-1, row-2, column+1, remember, dp);
    let res3 = traval(n, k-1, row-1, column-2, remember, dp);
    let res4 = traval(n, k-1, row-1, column+2, remember, dp);
    let res5 = traval(n, k-1, row+2, column+1, remember, dp);
    let res6 = traval(n, k-1, row+2, column-1, remember, dp);
    let res7 = traval(n, k-1, row+1, column+2, remember, dp);
    let res8 = traval(n, k-1, row+1, column-2, remember, dp);
    dp[k][row][column] = res1 + res2 + res3 + res4 + res5 + res6 + res7 + res8;
    return dp[k][row][column];
}

const res = knightProbability(8, 30, 6, 4);
console.log(res);


export {}