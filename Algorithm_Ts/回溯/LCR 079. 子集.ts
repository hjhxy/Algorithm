function subsets(nums: number[]): number[][] {
    nums.sort((a, b)=>(a-b));
    const res:number[][] = [[]];
    for(let i=0;i<nums.length;i++){
        traval(nums, i, [nums[i]], res);
    }
    return res;
};

function traval(nums:number[], index:number, value:number[], res:number[][]){
    res.push([...value]);
    for(let i=index+1;i<nums.length;i++){
        traval(nums, i, [...value, nums[i]], res);
    }
}


const res = subsets([1,2,3]);
console.log(res);
export {}