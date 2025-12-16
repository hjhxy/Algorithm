function longestCommonSubsequence(text1, text2) {
    var dp = [];
    for (var i = 0; i <= text1.length; i++) {
        dp[i] = [];
        for (var j = 0; j <= text2.length; j++) {
            if (i == 0 || j == 0) {
                dp[i][j] = 0;
            }
        }
    }
    for (var i = 1; i <= text1.length; i++) {
        for (var j = 1; j <= text2.length; j++) {
            if (text1[i] == text2[j]) {
                console.log(text1[i], text2[j]);
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
            }
        }
    }
    console.log(dp);
    return dp[text1.length][text2.length];
}
;
var res = longestCommonSubsequence("abc", "def");
console.log(res);
