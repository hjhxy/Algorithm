function longestSubsequence(arr, difference) {
    var dp = [];
    for (var i = 0; i < arr.length; i++) {
        dp[i] = 1;
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < i; j++) {
            if (arr[i] - arr[j] == difference) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    console.log(dp);
    return Math.max.apply(Math, dp);
}
;
var res = longestSubsequence([1, 2, 3, 4, 5, 6, 7, 8], 1);
console.log(res);
