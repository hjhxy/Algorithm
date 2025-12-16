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
function permuteUnique(nums) {
    nums.sort(function (a, b) { return (a - b); });
    var res = [];
    for (var i = 0; i < nums.length; i++) {
        if (i >= 1 && nums[i] === nums[i - 1]) {
            continue;
        }
        traval([i]);
    }
    function traval(indexs) {
        if (indexs.length == nums.length) {
            res.push(__spreadArray([], indexs, true));
            return;
        }
        var set = new Set();
        for (var i = 0; i < nums.length; i++) {
            if (indexs.indexOf(i) !== -1)
                continue;
            if (set.has(nums[i]))
                continue;
            traval(__spreadArray(__spreadArray([], indexs, true), [i], false));
            set.add(nums[i]);
        }
    }
    return res.map(function (el) {
        return el.map(function (i) { return nums[i]; });
    });
}
;
var res = permuteUnique([1, 1, 2]);
console.log(res);
