function maxCount(m: number, n: number, ops: number[][]): number {
    //取x的最小值和y的最小值
    let minx = Infinity;
    let miny = Infinity;
    for(let i=0;i<ops.length;i++) {
        minx = Math.min(ops[i][0], minx);
        miny = Math.min(ops[i][1], miny);
    }
    console.log(minx, miny);
    return minx * miny;    
};


const res = maxCount(3, 3, [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]);
console.log(res);

export {}