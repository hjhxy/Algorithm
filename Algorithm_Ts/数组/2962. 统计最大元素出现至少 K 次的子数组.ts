function countSubarrays(nums: number[], k: number): number {
    let start = 0;
    let end = 0;
    let count = 0;
    let max = Math.max(...nums);
    let res = 0;
    // let arr: number[][] = [];
    while(start<=end && start<nums.length-k){
        while(count<k && end<nums.length){
            if(nums[end] == max){
                count++;
            }
            end++;
        }
        if(count<k) break;
        while(count>=k && start<=end){
            res += (nums.length - end + 1);
            // arr.push(nums.slice(start, end))
            if(nums[start] == max){
                count--;
            }
            start++;
        }
        // console.log(start, end, count, res, max, arr)
    }

    return res;
};


const res = countSubarrays([1,4,2,1], 3);
console.log(res);

export {}