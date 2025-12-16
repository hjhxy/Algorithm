"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function minCut(s) {
    var dp = Array(s.length).fill(0);
    for (var i = 0; i < s.length; i++) {
        if (isHuiwen(0, i)) {
            dp[i] = 1;
            continue;
        }
        var min = Infinity;
        for (var j = 0; j < i; j++) {
            if (dp[j] > 0 && isHuiwen(j + 1, i)) {
                min = Math.min(min, dp[j] + 1);
            }
        }
        dp[i] = min;
    }
    console.log(dp);
    return dp[dp.length - 1] - 1;
    function isHuiwen(left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
;
var res = minCut("aabbcc");
console.log(res);
