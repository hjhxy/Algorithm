"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRow(rowIndex) {
    var arr = [];
    for (var i = 0; i <= rowIndex; i++) {
        arr[i] = [];
        for (var j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                arr[i][j] = 1;
            }
            else {
                arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
            }
        }
    }
    console.log(arr);
    return arr[rowIndex];
}
;
var res = getRow(3);
console.log(res);
