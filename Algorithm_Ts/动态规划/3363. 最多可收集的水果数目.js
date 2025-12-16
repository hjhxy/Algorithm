"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maxCollectedFruits(fruits) {
    var res = fruits.reduce(function (sum, arr, i) { return (sum + arr.reduce(function (s, el, j) { return (s + (i == j ? el : 0)); }, 0)); }, 0);
    var dp = [];
    for (var i = 0; i < fruits.length; i++) {
        dp[i] = [];
        for (var j = 0; j < fruits[i].length; j++) {
            if ((i == 0 && j != fruits[i].length - 1) || (j == 0 && i != fruits.length - 1)) {
                dp[i][j] = -Infinity;
            }
            else {
                dp[i][j] = undefined;
            }
        }
    }
    function getDp(i, j) {
        if (i < 0 || j < 0 || i >= j || j >= fruits[i].length)
            return 0;
        if (dp[i][j] === undefined) {
            var res_1 = Math.max(getDp(i - 1, j), getDp(i - 1, j - 1), getDp(i - 1, j + 1)) + fruits[i][j];
            dp[i][j] = res_1;
        }
        return dp[i][j];
    }
    function getDp2(i, j) {
        if (i < 0 || j < 0 || j >= i || i >= fruits.length)
            return 0;
        if (dp[i][j] === undefined) {
            var res_2 = Math.max(getDp2(i, j - 1), getDp2(i - 1, j - 1), getDp2(i + 1, j - 1)) + fruits[i][j];
            dp[i][j] = res_2;
        }
        return dp[i][j];
    }
    return res + getDp(fruits.length - 2, fruits[0].length - 1) + getDp2(fruits.length - 1, fruits[0].length - 2);
}
;
var res = maxCollectedFruits([[1, 2, 3, 4], [5, 6, 8, 7], [9, 10, 11, 12], [13, 14, 15, 16]]);
console.log(res);
