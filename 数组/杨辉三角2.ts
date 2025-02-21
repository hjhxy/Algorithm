function getRow(rowIndex: number): number[] {
    let arr:number[][] = [];
    for(let i = 0; i <= rowIndex; i++) {
        arr[i] = [];
        for(let j = 0; j <= i; j++) {
            if(j==0||j==i){
                arr[i][j] = 1;
            } else {
                arr[i][j] = arr[i-1][j-1] + arr[i-1][j];
            }
        }
    }
    console.log(arr);
    return arr[rowIndex]
};


const res = getRow(3);
console.log(res);

export {}