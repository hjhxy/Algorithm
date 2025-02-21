function knightDialer(n) {
    var tables = [[4, 6], [6, 8], [7, 9], [4, 8], [0, 3, 9], [], [0, 1, 7], [2, 6], [1, 3], [2, 4]]; // 跳跃表，免去复杂判断
    var res = 0;
    var dp = [];
    var MOD = Math.pow(10, 9) - 7;
    for (var k = 0; k < n; k++) {
        dp[k] = [];
        for (var j = 0; j < tables.length; j++) {
            if (k == 0) {
                dp[k][j] = 1;
            }
            else {
                dp[k][j] = 0;
            }
        }
    }
    for (var i = 0; i < tables.length; i++) {
        res += (traval(tables, i, n - 1, dp, MOD) % MOD);
    }
    return res % MOD;
}
;
function traval(tables, index, n, dp, MOD) {
    if (dp[n][index])
        return dp[n][index];
    var res = 0;
    for (var i = 0; i < tables[index].length; i++) {
        res += (traval(tables, tables[index][i], n - 1, dp, MOD) % MOD);
    }
    dp[n][index] = res % MOD;
    return res;
}
var res = knightDialer(31);
console.log(res);
