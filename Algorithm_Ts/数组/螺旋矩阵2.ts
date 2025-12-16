function generateMatrix(n: number): number[][] {
    const res:number[][] = [];
    for(let i = 0; i < n; i++) {
        res[i] = [];
    }
    let num = 0;
    let k=0;
    while(k<Math.ceil(n/2)){
        // 上
        for(let i = 0; i < n; i++) {
            if(res[k][i]) continue;
            res[k][i] = ++num;
        }
        // 右
        for(let i=0; i<n; i++){
            if(res[i][n-1-k]) continue;
            res[i][n-1-k] = ++num;
        }
        // 下
        for(let i=n-1; i>=0; i--){
            if(res[n-1-k][i]) continue;
            res[n-1-k][i] = ++num;
        }
        // 左
        for(let i=n-1; i>=0; i--){
            if(res[i][k]) continue;
            res[i][k] = ++num;
        }
        k++;
    }
    return res;
};

const res = generateMatrix(3);
console.log(res);
