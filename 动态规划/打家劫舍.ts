function rob(nums: number[]): number {
    if (nums.length == 1) return nums[0];
    if (nums.length == 2) return Math.max(nums[0], nums[1]);
    const dp: number[] = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[1], nums[0]);
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    // console.log(dp);
    return dp[nums.length - 1];
};


let res = rob([2, 7, 9, 3, 1]);
console.log(res);

export { }
