"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maxCount(m, n, ops) {
    //取x的最小值和y的最小值
    var minx = Infinity;
    var miny = Infinity;
    for (var i = 0; i < ops.length; i++) {
        minx = Math.min(ops[i][0], minx);
        miny = Math.min(ops[i][1], miny);
    }
    console.log(minx, miny);
    return minx * miny;
}
;
var res = maxCount(3, 3, [[2, 2], [3, 3], [3, 3], [3, 3], [2, 2], [3, 3], [3, 3], [3, 3], [2, 2], [3, 3], [3, 3], [3, 3]]);
console.log(res);
