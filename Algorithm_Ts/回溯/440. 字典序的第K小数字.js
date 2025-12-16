"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findKthNumber(n, k) {
    var res = {
        count: 0,
        res: -1
    };
    var len = n.toString().length;
    for (var i = 1; i <= 9; i++) {
        if (i > n)
            break;
        traval(n, i.toString(), len - 1, res, k);
    }
    return res.res;
}
;
function traval(n, str, len, res, k) {
    res.count += 1;
    if (res.count == k) { // && Number(str)<=n
        res.res = Number(str);
    }
    console.log(str, res.count);
    if (len <= 0 || Number(str) > n || res.count >= k)
        return;
    for (var i = 0; i <= 9; i++) {
        if (Number(str + i) > n)
            break;
        traval(n, str + i, len - 1, res, k);
    }
}
var res = findKthNumber(13, 6);
console.log('res', res);
