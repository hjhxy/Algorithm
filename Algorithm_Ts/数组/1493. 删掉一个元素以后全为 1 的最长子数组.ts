function longestSubarray(nums: number[]): number {
    let one = 0;
    let zero = 0;
    let preone = 0;
    let res = 0;
    let flag = false;
    for(let i=0;i<nums.length;i++){
        if(nums[i] == 0){
            flag = true;
        }
        if(nums[i] == 1) {
            one += 1;
            res = Math.max(res, one+preone);
            zero = 0;
            console.log('--', preone, one, res);
        } else {
            zero += 1;
            if(zero == 1){
                preone = one;
            } else {
                preone = 0;
            }
            one = 0;
        }
    }
    console.log(preone, one, res);
    return flag?res:res-1;
};

const res = longestSubarray([1,1,1]);
console.log(res);

export {}