function nonSpecialCount(l, r) {
    var res = 0;
    var newl = Math.ceil(Math.sqrt(l));
    var newr = Math.floor(Math.sqrt(r));
    for (var i = newl; i <= newr; i++) {
        if (i == 1)
            continue; // 1是特殊情况
        var flag = true;
        var n = Math.sqrt(i);
        for (var j = 2; j <= n; j++) {
            if (i % j == 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            console.log(i * i, i, newl, newr);
            res++;
        }
    }
    return r - l + 1 - res;
}
var res = nonSpecialCount(4, 16);
console.log(res);
