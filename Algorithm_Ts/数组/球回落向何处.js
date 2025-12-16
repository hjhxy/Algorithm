"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findBall(grid) {
    var res = [];
    for (var i = 0; i < grid[0].length; i++) {
        var r = traval(0, i);
        res.push(r.index);
    }
    return res;
    function traval(x, y) {
        if (x == grid.length) {
            return {
                index: y,
                result: true
            };
        }
        if (y == 0 && grid[x][y] == -1 || y == grid[x].length - 1 && grid[x][y] == 1)
            return {
                index: -1,
                result: false
            };
        var _a = [], res1 = _a[0], res2 = _a[1];
        if (grid[x][y] == 1 && grid[x][y + 1] == 1) {
            res1 = traval(x + 1, y + 1);
        }
        else if (grid[x][y] == -1 && grid[x][y - 1] == -1) {
            res2 = traval(x + 1, y - 1);
        }
        else {
            return {
                index: -1,
                result: false
            };
        }
        if (res1 && res1.result) {
            return res1;
        }
        else if (res2 && res2.result) {
            return res2;
        }
        else {
            return res1 || res2;
        }
    }
}
;
var res = findBall([[1, 1, 1, 1, 1, 1], [-1, -1, -1, -1, -1, -1], [1, 1, 1, 1, 1, 1], [-1, -1, -1, -1, -1, -1]]);
console.log(res);
