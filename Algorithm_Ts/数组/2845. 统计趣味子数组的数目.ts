function countInterestingSubarrays(nums: number[], modulo: number, k: number): number {
    let res = 0;
    for(let i=0;i<nums.length;i++){
        let count = 0;
        for(let j=i;j<nums.length;j++){
            if(nums[j]%modulo == k){
                count+=1;
            }
            if(count%modulo == k){
                console.log(i, j, nums.slice(i, j+1), count);
                res += 1;
            }
        }
    }
    return res;
};


const res = countInterestingSubarrays([3,2,4], 2, 1);
console.log(res);

export {}