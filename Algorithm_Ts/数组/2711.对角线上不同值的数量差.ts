function differenceOfDistinctValues(grid: number[][]): number[][] {
    const res:number[][] = [];
    const hash:{
        [key: number]: Set<number>
    } = {};
    for(let i=0;i<grid.length;i++){
        res[i] = [];
        for(let j=0;j<grid[i].length;j++){
            res[i][j] = hash[i-j] ? hash[i-j].size : 0;
            if(hash[i-j]){
                hash[i-j].add(grid[i][j])
            } else {
                hash[i-j] = new Set([grid[i][j]]);
            }
        }
    }
    const hash2:{
        [key: number]: Set<number>
    } = {};
    for(let i=res.length-1;i>=0;i--){
        for(let j=res[i].length-1;j>=0;j--){
            res[i][j] = Math.abs(res[i][j] - (hash2[i-j] ? hash2[i-j].size : 0));
            if(hash2[i-j]){
                hash2[i-j].add(grid[i][j])
            } else {
                hash2[i-j] = new Set([grid[i][j]]);
            }
        }
    }
    console.log(hash, res); // 左上角
    return res;
};

const res = differenceOfDistinctValues([[1,2,3],[3,1,5],[3,2,1]]);


export {}