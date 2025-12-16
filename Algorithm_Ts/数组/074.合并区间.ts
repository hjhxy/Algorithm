function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b)=>(a[0] - b[0]))

    const res: number[][] = [];
    res.push([...intervals[0]]);

    for(let i=1; i<intervals.length; i++){
        let top = res.pop();
        if(!top) continue;
        if(intervals[i][0]>top[1]){
            res.push(top);
            res.push([...intervals[i]]);
            console.log(top, [...intervals[i]]);
            continue;
        } else if(intervals[i][0]>=top[0] && intervals[i][0]<=top[1]){
            console.log([top[0], Math.max(top[1], intervals[i][1])]);
            res.push([top[0], Math.max(top[1], intervals[i][1])]);
        }
    }

    return res;
};


const res = merge([[1,4],[4,5]]);
console.log(res);

export {}