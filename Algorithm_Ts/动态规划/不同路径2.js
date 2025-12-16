function uniquePathsWithObstacles(obstacleGrid) {
    var dp = [[1]];
    for (var i = 0; i < obstacleGrid.length; i++) {
        if (dp[i] == undefined)
            dp[i] = [];
        for (var j = 0; j < obstacleGrid[i].length; j++) {
            if (i == 0 && j == 0)
                continue;
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            }
            else {
                if (i == 0) {
                    dp[i][j] = dp[i][j - 1];
                }
                else if (j == 0) {
                    dp[i][j] = dp[i - 1][j];
                }
                else {
                    dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
                }
            }
        }
    }
    console.log(dp);
    return dp[dp.length - 1][dp[dp.length - 1].length - 1];
}
;
var res = uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]);
console.log(res);
