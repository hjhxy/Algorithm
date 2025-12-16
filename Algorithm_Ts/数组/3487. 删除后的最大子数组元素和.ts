function maxSum(nums: number[]): number {
    const arr = nums.filter(el=>el>0);
    if(!arr.length) return Math.max(...nums);
    let front = 0,
        back = 0;
    let res = 0,
        v = 0;
    let hash:Record<number, number> = {};
    console.log(arr);
    while(front<=back && back<arr.length){
        if(!hash[arr[back]]){
            v += arr[back];
            res = Math.max(v, res);
            console.log('back', back, arr[back], hash[back], res, v);
            hash[arr[back]] = 1;
            back++;
        } else {
            v -= arr[front];
            res = Math.max(v, res);
            console.log('front', front, res, v);
            hash[arr[front]] -= 1;
            front++;
        }
    }
    return res;
};


const res = maxSum([-6,12,20,20,-14,10,-12]); // [1,2,3,4,5] [1,1,0,1,1] [1,2,-1,-2,1,0,-1]
console.log(res);


export {}