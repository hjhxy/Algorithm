"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function minimumSum(n, k) {
    var i = 1;
    var arr = [];
    while (i <= k / 2 && arr.length < n) {
        arr.push(i);
        i++;
    }
    i = k;
    console.log('=', arr);
    while (arr.length < n) {
        arr.push(i);
        i++;
    }
    console.log(arr);
    return arr.reduce(function (sum, el) { return (sum + el); }, 0);
}
;
var res = minimumSum(5, 4);
console.log(res);
