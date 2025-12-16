function maximumLength(nums: number[]): number {
    const dp:Array<Record<'len'|'pre', number>> = [];
    for(let i=0;i<nums.length;i++){
        dp[i] = {
            pre: -1,
            len: 1
        };
    }
    for(let i=0;i<dp.length;i++){
        for(let j=i+1;i<dp.length;j++){
            if(dp[i]==dp[j]){}
        }
    }
    return Math.max(...dp.map(el=>el.len));
};

const res = maximumLength([1,2,1,1,2,1,2]);
console.log(res);

export {}