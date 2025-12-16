function beautifulSubarrays(nums: number[]): number {
    let hash:{
        [key:number]:number
    } = {};
    let sum = 0;
    let res = 0;
    hash[0] = 1;
    for(let i=0;i<nums.length;i++){
        sum = sum^nums[i];
        hash[sum] = hash[sum]?(hash[sum]+1):1;
    }
    console.log(hash);
    for(const key in hash){
        res += Math.floor(hash[key]*(hash[key]-1)/2);
    }
    return res;
};



const res = beautifulSubarrays([4,3,1,2,4]);
console.log(res);


export {}
