var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function combinationSum2(candidates, target) {
    candidates.sort(function (a, b) { return (a - b); });
    var res = [];
    for (var i = 0; i < candidates.length; i++) {
        if (candidates[i] == candidates[i - 1])
            continue;
        traval(candidates, i, candidates[i], [candidates[i]], target);
    }
    function traval(candidates, start, sum, arr, target) {
        if (sum == target) {
            res.push(arr);
            return;
        }
        else if (sum > target) {
            return;
        }
        for (var i = start + 1; i < candidates.length; i++) {
            if (i > start + 1 && candidates[i] == candidates[i - 1])
                continue;
            traval(candidates, i, sum + candidates[i], __spreadArray(__spreadArray([], arr, true), [candidates[i]], false), target);
        }
    }
    return res;
}
;
var res = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
console.log(res);
