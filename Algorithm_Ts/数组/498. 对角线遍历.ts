function findDiagonalOrder(mat: number[][]): number[] {
    let k = 0;
    const res: number[] = [];
    while(k<=mat.length+mat[0].length-2) {
        for(let i=Math.min(k, mat.length-1);i>=0 && k-i<=mat[i].length-1;i--){
            if(k%2==0){
                res.push(mat[i][k-i]);
            } else {
                res.push(mat[k-i][i]);
            }
        }
        
        k++;
    }
    return res;
};

const res = findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]);
console.log(res);
export {}