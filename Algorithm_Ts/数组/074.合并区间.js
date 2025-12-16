"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
function merge(intervals) {
    intervals.sort(function (a, b) { return (a[0] - b[0]); });
    var res = [];
    res.push(__spreadArray([], intervals[0], true));
    for (var i = 1; i < intervals.length; i++) {
        var top_1 = res.pop();
        if (!top_1)
            continue;
        if (intervals[i][0] > top_1[1]) {
            res.push(top_1);
            res.push(__spreadArray([], intervals[i], true));
            console.log(top_1, __spreadArray([], intervals[i], true));
            continue;
        }
        else if (intervals[i][0] >= top_1[0] && intervals[i][0] <= top_1[1]) {
            console.log([top_1[0], Math.max(top_1[1], intervals[i][1])]);
            res.push([top_1[0], Math.max(top_1[1], intervals[i][1])]);
        }
    }
    return res;
}
;
var res = merge([[1, 4], [4, 5]]);
console.log(res);
