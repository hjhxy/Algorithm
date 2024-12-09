function longestValidParentheses(s) {
    if (!s)
        return 0;
    var dp = [];
    for (var i = 0; i < s.length; i++) {
        dp[i] = 0;
    }
    var res = getDp(dp, s, s.length - 1);
    console.log('dp', dp);
    return Math.min.apply(Math, dp);
}
;
function getDp(dp, s, i) {
    if (dp[i])
        return dp[i];
    if (i <= 0)
        return 0;
    if (s[i - 1] == '(' && s[i] == ')') {
        dp[i] = getDp(dp, s, i - 2) + 2;
        console.log(dp, i - 1, i, s[i - 1], s[i]);
    }
    else if (s[i - 1] == '(' && s[i] == '(') {
        getDp(dp, s, i - 1);
        dp[i] = 0;
    }
    else if (s[i - 1] == ')' && s[i] == '(') {
        getDp(dp, s, i - 1);
        dp[i] = 0;
    }
    else { // '))'
        console.log(i - 1 - getDp(dp, s, i - 1), s[i - 1 - getDp(dp, s, i - 1)]);
        if (s[i - 1 - getDp(dp, s, i - 1)] == "(") {
            dp[i] = getDp(dp, s, i - 1) + getDp(dp, s, i - 1 - 1 - getDp(dp, s, i - 1)) + 2;
        }
        else {
            dp[i] = 0;
        }
    }
    return dp[i];
}
var res = longestValidParentheses(")()())");
console.log(res);
