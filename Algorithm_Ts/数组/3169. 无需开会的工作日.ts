function countDays(days: number, meetings: number[][]): number {
    meetings.sort((a,b)=>{
        if(a!=b) {
            return a[0]-b[0];
        } else {
            return a[1]-b[1];
        }
    });
    console.log(meetings);
    let res = 0;
    let pre = 1;
    for(let i=0;i<meetings.length;i++){
        if(i==0){
            res += meetings[i][0]-1;
            pre = meetings[i][1];
            console.log(res, pre);
        } else {
            if(pre>=meetings[i][0]){
                pre = Math.max(pre, meetings[i][1]); // 合并
                console.log('==', res, pre);
            } else {
                res += (meetings[i][0] - pre - 1);
                pre = meetings[i][1];
                console.log('--', res, pre);
            }
        }
    }
    res += days - pre;
    return res;
};
// [[1,2], [1,5], [2,3],[2,5]]
const res = countDays(57, [[3,49],[23,44],[21,56],[26,55],[23,52],[2,9],[1,48],[3,31]]);
console.log(res);

export {};