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
function subsets(nums) {
    nums.sort(function (a, b) { return (a - b); });
    var res = [];
    for (var i = 0; i < nums.length; i++) {
        traval(nums, i, [nums[i]], res);
    }
    return res;
}
;
function traval(nums, index, value, res) {
    res.push(__spreadArray([], value, true));
    for (var i = index + 1; i < nums.length; i++) {
        traval(nums, i, __spreadArray(__spreadArray([], value, true), [nums[i]], false), res);
    }
}
var res = subsets([1, 2, 3]);
console.log(res);
