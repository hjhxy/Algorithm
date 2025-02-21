function insert(intervals: number[][], newInterval: number[]): number[][] {
    const res: number[][] = [];
    for(let i = 0; i < intervals.length; i++) {
        if(newInterval[0]>intervals[i][1]){
            res.push(intervals[i]);
        }
        if(newInterval[0]>intervals[i][0]){}
    }
    return res;
};

const res = insert([[1,3],[6,9]], [2,5]);
console.log(res);
