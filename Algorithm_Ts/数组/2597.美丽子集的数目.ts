function beautifulSubsets(nums: number[], k: number): number {
    let res = 0;
    nums.sort((a, b) => a - b);
    
    function traval(index: number, hash: Set<number>) {
        for (let i = index; i < nums.length; i++) {
            if (!hash.has(nums[i] - k) && !hash.has(nums[i] + k)) {
                res++;
                hash.add(nums[i]);
                traval(i + 1, new Set(hash));
                hash.delete(nums[i]);
            }
        }
    }
    
    traval(0, new Set());
    return res;
}



const res = beautifulSubsets([10,4,5,7,2,1], 3);
console.log(res);


export {}