function buildArray(nums: number[]): number[] {
    const res: number[] = [];
    for(let i=0;i<nums.length;i++){
        res[i] = nums[nums[i]];
    }

    return res;
};

const res = buildArray([5,0,1,2,3,4]);
console.log(res);

export {}