function solveNQueens(n: number): string[][] {
    let res: string[][] = [];
    let res1:string = "123";
    console.log(res1[0]);
    // for(let i=0;i<n;i++){
    //     let arr:string[] =[''];
    //     for(let j = 0;j<n;j++){
    //         arr[0] = '.';
    //     }
    //     arr[0][i] = 'Q';
    //     traval(arr, n, i);
    //     res.push(arr);
    // }
    return res;
};

function traval(arr: string[], n: number, i:number) {
    for(let i=0;i<n;i++){
        traval();
    }
    return 
}


let res = solveNQueens(4);
console.log(res);