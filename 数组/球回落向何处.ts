function findBall(grid: number[][]): number[] {
    const res:number[] = [];
    for(let i = 0; i < grid[0].length; i++) {
        let r = traval(0, i);
        res.push(r.index);
    }
    return res;
    type TRes = {index:number, result:boolean};
    function traval(x:number, y:number): TRes{
        if(x==grid.length) {
            return {
                index: y,
                result:true
            }
        }
        if(y==0 && grid[x][y]==-1 || y==grid[x].length-1&&grid[x][y]==1) return {
            index: -1,
            result: false
        };
        let [res1, res2]:TRes[] = [];
        if(grid[x][y]==1 && grid[x][y+1] == 1){
            res1 = traval(x+1, y+1);
        } else if(grid[x][y]==-1 && grid[x][y-1]==-1){
            res2 = traval(x+1, y-1);
        } else {
            return {
                index: -1,
                result: false
            };
        }
        if(res1 && res1.result) {
            return res1;
        } else if(res2 && res2.result) {
            return res2;
        } else {
            return res1 || res2;
        }
    }
};


const res = findBall([[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]]);
console.log(res);
export {}