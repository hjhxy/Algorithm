"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findDiagonalOrder(mat) {
    var k = 0;
    var res = [];
    while (k <= mat.length + mat[0].length - 2) {
        for (var i = Math.min(k, mat.length - 1); i >= 0 && k - i <= mat[i].length - 1; i--) {
            console.log('偶数列', i, k - i, mat[i][k - i]);
            if (k % 2 == 0) {
                res.push(mat[i][k - i]);
            }
            else {
                res.push(mat[k - i][i]);
            }
        }
        k++;
    }
    return res;
}
;
var res = findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(res);
