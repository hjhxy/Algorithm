function rob(nums: number[]): number {
    if (nums.length == 1) return nums[0];
    if (nums.length == 2) return Math.max(nums[0], nums[1]);
    const dp: number[] = [nums[0], nums[0]]; // 选0
    const dp2: number[] = [0, nums[1]]; // 不选0
    for (let i = 2; i < nums.length; i++) {
        dp[i] = dp[i - 1] + 0;
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i]);
    }
    console.log(dp, dp2);
    return dp[nums.length - 1];
};


const res = rob([1, 2, 3, 1]);
console.log(res);
export { }