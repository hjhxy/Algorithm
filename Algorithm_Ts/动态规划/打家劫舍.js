"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function rob(nums) {
    var dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[1], nums[0]);
    for (var i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    console.log(dp);
    return dp[nums.length - 1];
}
;
var res = rob([1, 2, 3, 1]);
console.log(res);
