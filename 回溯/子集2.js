var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function subsetsWithDup(nums) {
    nums.sort(function (a, b) { return a - b; });
    var res = [[]];
    for (var i = 0; i < nums.length; i++) {
        if (i >= 1 && nums[i] === nums[i - 1]) {
            continue;
        }
        traval(i, [nums[i]]);
    }
    function traval(index, arr) {
        res.push(arr);
        for (var i = index + 1; i < nums.length; i++) {
            if (i != index + 1 && nums[i] === nums[i - 1]) {
                continue;
            }
            else {
                traval(i, __spreadArray(__spreadArray([], arr, true), [nums[i]], false));
            }
        }
    }
    ;
    return res;
}
;
var res = subsetsWithDup([1, 2, 2]);
console.log(res);
