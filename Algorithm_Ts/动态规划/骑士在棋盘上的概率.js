"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function knightProbability(n, k, row, column) {
    if (k === 0)
        return 1;
    var remember = [0, 0];
    var dp = [];
    for (var i = 0; i <= k; i++) {
        dp[i] = [];
        for (var j = 0; j < n; j++) {
            dp[i][j] = [];
            for (var m = 0; m < n; m++) {
                if (k == 0)
                    dp[i][j][m] = 1;
                else
                    dp[i][j][m] = 0;
            }
        }
    }
    console.log(dp);
    traval(n, k, row, column, remember, dp);
    console.log(dp);
    return dp[k][row][column] / Math.pow(8, k);
}
;
function traval(n, k, row, column, remember, dp) {
    var _a, _b;
    if ((_b = (_a = dp[k]) === null || _a === void 0 ? void 0 : _a[row]) === null || _b === void 0 ? void 0 : _b[column]) {
        console.log('进入', k, row, column, dp[k][row][column]);
        // remember[1]+=dp[k][row][column];
        return dp[k][row][column];
    }
    if (k == 0 && row >= 0 && row < n && column >= 0 && column < n) {
        console.log(k, row, column, remember);
        // remember[1]++;
        return 1;
    }
    if (k == 0 || row >= n || column >= n || row < 0 || column < 0) {
        console.log('xxx', k, row, column, remember);
        return 0;
    }
    var res1 = traval(n, k - 1, row - 2, column - 1, remember, dp);
    var res2 = traval(n, k - 1, row - 2, column + 1, remember, dp);
    var res3 = traval(n, k - 1, row - 1, column - 2, remember, dp);
    var res4 = traval(n, k - 1, row - 1, column + 2, remember, dp);
    var res5 = traval(n, k - 1, row + 2, column + 1, remember, dp);
    var res6 = traval(n, k - 1, row + 2, column - 1, remember, dp);
    var res7 = traval(n, k - 1, row + 1, column + 2, remember, dp);
    var res8 = traval(n, k - 1, row + 1, column - 2, remember, dp);
    // if(!dp[k]) dp [k] = [];
    // if(!dp[k][row]) dp[k][row] = [];
    dp[k][row][column] = res1 + res2 + res3 + res4 + res5 + res6 + res7 + res8;
    return dp[k][row][column];
}
var res = knightProbability(8, 30, 6, 4);
console.log(res);
