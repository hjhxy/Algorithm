"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function beautifulSubsets(nums, k) {
    var res = 0;
    nums.sort(function (a, b) { return a - b; });
    function traval(index, hash) {
        for (var i = index; i < nums.length; i++) {
            if (!hash.has(nums[i] - k) && !hash.has(nums[i] + k)) {
                res++;
                hash.add(nums[i]);
                traval(i + 1, new Set(hash));
                hash.delete(nums[i]);
            }
        }
    }
    traval(0, new Set());
    return res;
}
var res = beautifulSubsets([10, 4, 5, 7, 2, 1], 3);
console.log(res);
