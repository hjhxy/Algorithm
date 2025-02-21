function rob(nums) {
    var dp = [
        [nums[0], nums[0]],
        [0, nums[1]]
    ];
    for (var i = 2; i < nums.length; i++) {
        if (i != nums.length - 1) {
            dp[0][i] = Math.max(dp[0][i - 2] + nums[i], dp[0][i - 1]);
        }
        else {
            dp[0][i] = dp[0][i - 1];
        }
        dp[1][i] = Math.max(dp[1][i - 2] + nums[i], dp[1][i - 1]);
    }
    console.log(dp);
    return Math.max(dp[0][nums.length - 1], dp[1][nums.length - 1]);
}
;
var res = rob([1, 2, 3, 1]);
console.log(res);
