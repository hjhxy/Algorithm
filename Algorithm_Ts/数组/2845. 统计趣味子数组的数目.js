"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countInterestingSubarrays(nums, modulo, k) {
    var res = 0;
    for (var i = 0; i < nums.length; i++) {
        var count = 0;
        for (var j = i; j < nums.length; j++) {
            if (nums[j] % modulo == k) {
                count += 1;
            }
            console.log(i, j, count);
            if (count % modulo == k) {
                console.log(i, j, nums.slice(i, j + 1), count);
                res += 1;
            }
        }
    }
    return res;
}
;
var res = countInterestingSubarrays([3, 2, 4], 2, 1);
console.log(res);
