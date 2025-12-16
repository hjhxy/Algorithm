function longestAlternatingSubarray(nums: number[], threshold: number): number {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0 && nums[i] <= threshold) {
            let len = 1;
            let j = i;
            while (j++ < nums.length && nums[j] % 2 != nums[j - 1] % 2 && nums[j] <= threshold) {
                len++;
            }
            res = Math.max(len, res);
        }
    }
    return res;
};


const nums = [4, 10, 3];
const threshold = 10;
const res = longestAlternatingSubarray(nums, threshold);
console.log(res);
