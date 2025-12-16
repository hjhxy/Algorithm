"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reorderedPowerOf2(n) {
    var str = n.toString();
    var powSet = getPowSet();
    var flag = false;
    for (var i = 0; i < str.length; i++) {
        if (str[i] != '0') {
            traval(str[i], new Set([i]));
        }
    }
    function getPowSet() {
        var pow2 = new Set();
        var start = Math.pow(10, str.length - 1);
        var end = Math.pow(10, str.length);
        var res = 1;
        while (res < end) {
            if (res >= start) {
                pow2.add(res);
            }
            res *= 2;
        }
        return pow2;
    }
    function traval(s, set) {
        if ((flag || s.length == str.length)) {
            if (powSet.has(Number(s))) {
                flag = true;
                console.log(s, powSet.has(Number(s)));
            }
            return;
        }
        for (var i = 0; i < str.length; i++) {
            if (!set.has(i)) {
                var set1 = new Set(set);
                set1.add(i);
                traval(s + str[i], set1);
            }
        }
    }
    console.log(powSet);
    return flag;
}
;
var res = reorderedPowerOf2(821);
console.log(res);
