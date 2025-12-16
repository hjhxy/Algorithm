"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function canSplitArray(nums, m) {
    var sum = nums.reduce(function (sum, el) { return (sum + el); }, 0);
    return canSplit(nums, 0, nums.length - 1, m, sum);
}
;
function canSplit(nums, start, end, m, sum) {
    if (end - start <= 1)
        return true;
    var _a = [false, false], left = _a[0], right = _a[1];
    if (sum - nums[start] >= m) {
        left = canSplit(nums, start + 1, end, m, sum - nums[start]);
    }
    if (sum - nums[end] >= m) {
        right = canSplit(nums, start, end - 1, m, sum - nums[end]);
    }
    console.log(start, end, left, right);
    return left || right;
}
var res = canSplitArray([2, 3, 3, 2, 3], 6);
console.log(res);
