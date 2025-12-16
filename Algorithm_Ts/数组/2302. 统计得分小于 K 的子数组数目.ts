function countSubarrays(nums: number[], k: number): number {
    let count = 0;
    let start = 0;
    let end = 0;
    let sum = 0;
    while(end<nums.length){
        sum+=nums[end];
        while(sum*(end-start+1)>=k){
            sum-=nums[start];
            start++;
        }
        count += end - start + 1;
        end++;
    }
    console.log(start, end, count);
    return count;
};

const res = countSubarrays([2,1,4,3,5], 10);
console.log(res);
export {}