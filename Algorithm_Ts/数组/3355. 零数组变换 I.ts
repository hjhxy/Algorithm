function isZeroArray(nums: number[], queries: number[][]): boolean {
    const prefix = new Array(nums.length+1).fill(0);
    for(let i=0;i<queries.length;i++){
        prefix[queries[i][0]] += 1;
        prefix[queries[i][1]+1] -= 1;
    }
    for(let i=1;i<prefix.length;i++){
        prefix[i] += prefix[i-1];
    }
    for(let i=0;i<nums.length;i++){
       if(nums[i] - prefix[i] > 0){
        return false;
       }
    }
    return true;
};


const res = isZeroArray([1,0,1], [[0,2]]);
console.log(res)
export {};