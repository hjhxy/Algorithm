"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maxDiff(num) {
    var res = (num + "").split('');
    if (res[0] === '1') {
        var target_1 = res[1];
        var str1 = res.map(function (el) {
            if (el == target_1)
                return '0';
            return el;
        }).join('');
        var target2_1 = res.find(function (el) { return el != '9'; });
        var str2 = res.map(function (el) {
            if (el != target2_1)
                return el;
            return '9';
        }).join('');
        return Number(str2) - Number(str1);
    }
    else {
        var target_2 = res[0];
        var str1 = res.map(function (el) {
            if (el == target_2)
                return '1';
            return el;
        }).join('');
        var target2_2 = res.find(function (el) { return el != '9'; });
        var str2 = res.map(function (el) {
            if (el != target2_2)
                return el;
            return '9';
        }).join('');
        console.log();
        return Number(str2) - Number(str1);
    }
}
;
var res = maxDiff(9288);
console.log(res);
