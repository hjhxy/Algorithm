"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function differenceOfDistinctValues(grid) {
    var res = [];
    var hash = {};
    for (var i = 0; i < grid.length; i++) {
        res[i] = [];
        for (var j = 0; j < grid[i].length; j++) {
            res[i][j] = hash[i - j] ? hash[i - j].size : 0;
            if (hash[i - j]) {
                hash[i - j].add(grid[i][j]);
            }
            else {
                hash[i - j] = new Set([grid[i][j]]);
            }
        }
    }
    var hash2 = {};
    for (var i = res.length - 1; i >= 0; i--) {
        for (var j = res[i].length - 1; j >= 0; j--) {
            res[i][j] = Math.abs(res[i][j] - (hash2[i - j] ? hash2[i - j].size : 0));
            if (hash2[i - j]) {
                hash2[i - j].add(grid[i][j]);
            }
            else {
                hash2[i - j] = new Set([grid[i][j]]);
            }
        }
    }
    console.log(hash, res); // 左上角
    return res;
}
;
var res = differenceOfDistinctValues([[1, 2, 3], [3, 1, 5], [3, 2, 1]]);
