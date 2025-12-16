function maxFreeTime(eventTime: number, k: number, startTime: number[], endTime: number[]): number {
    let res = 0;
    let front =0;
    let back = 0;
    let sum = startTime[0];
    while(front<=back && back < startTime.length) {
        while(back-front < k && back+1 < startTime.length){
            sum += startTime[back+1] - endTime[back];
            back++;
        }
        console.log('-', sum, back, front, back-front);
        if(back-front == k) {
            res = Math.max(res, sum);
        } else if(back-front == k-1 && back+1 == startTime.length) {
            sum += eventTime - endTime[back];
            res = Math.max(res, sum);
        }
        console.log('=', sum, back, front, back-front);
        sum-=startTime[front] - (endTime?.[front-1]||0);
        front++;
    }
    return res;
};

const res = maxFreeTime(99, 1, [7,21,25], [13,25,78]);
console.log(res);
export {}