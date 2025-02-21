function subsetsWithDup(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const res: number[][] = [[]];
    for(let i = 0; i < nums.length; i++) {
        if(i>=1&&nums[i] === nums[i-1]){
            continue;
        }
        traval(i, [nums[i]]);
    }
    function traval(index: number, arr:number[]){
        res.push(arr);
        for(let i = index+1; i < nums.length; i++){
            if(i!=index+1&&nums[i] === nums[i-1]){
                continue;
            } else {
                traval(i, [...arr, nums[i]]);
            }
        }
    };
    return res;
};


const res = subsetsWithDup([1,2,2]);
console.log(res);
