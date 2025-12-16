function canSplitArray(nums: number[], m: number): boolean {
    const sum = nums.reduce((sum, el)=>(sum+el), 0);
    return canSplit(nums, 0, nums.length-1, m, sum);
};

function canSplit(nums: number[], start: number, end: number, m: number, sum: number): boolean {
    if(end-start<=1) return true;
    let [left, right] = [false, false];
    if(sum - nums[start] >= m) {
        left = canSplit(nums, start + 1, end, m, sum - nums[start]);
    }
    if(sum - nums[end] >= m){
        right = canSplit(nums, start, end-1, m, sum - nums[end])
    }
    console.log(start, end, left, right);
    return left || right;
}

const res = canSplitArray([2, 3, 3, 2, 3], 6);

console.log(res);

export {}