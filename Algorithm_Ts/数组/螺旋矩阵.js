"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function spiralOrder(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0)
        return [];
    var res = [];
    var k = 0; // 螺旋层数
    var rows = matrix.length, cols = matrix[0].length;
    while (2 * k < rows && 2 * k < cols) {
        // 从左到右
        for (var i = k; i < cols - k; i++) {
            res.push(matrix[k][i]);
        }
        // 从上到下
        for (var i = k + 1; i < rows - k; i++) {
            res.push(matrix[i][cols - 1 - k]);
        }
        // 从右到左（避免重复）
        if (rows - 1 - k > k) {
            for (var i = cols - 2 - k; i >= k; i--) {
                res.push(matrix[rows - 1 - k][i]);
            }
        }
        // 从下到上（避免重复）
        if (cols - 1 - k > k) {
            for (var i = rows - 2 - k; i > k; i--) {
                res.push(matrix[i][k]);
            }
        }
        k++;
    }
    return res;
}
var res = spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16], [17, 18, 19, 20], [21, 22, 23, 24]]);
console.log(res);
