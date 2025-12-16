"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countSubarrays(nums, minK, maxK) {
    var start = 0;
    var end = 0;
    var res = 0;
    var hash = {};
    while (start < nums.length || end < nums.length) {
        if (nums[end] >= minK && nums[end] <= maxK) {
            hash[nums[end]] = (hash[nums[end]] || 0) + 1;
            end++;
        }
        else {
            if (start <= end) {
                if (hash[nums[start]] > 0) {
                    hash[nums[start]] -= 1;
                }
                start++;
            }
            else {
                end++;
            }
        }
        if (hash[minK] > 0 && hash[maxK] > 0) {
            res++;
        }
        console.log(hash, start, end, res, hash[minK], hash[maxK]);
    }
    return res;
}
;
var res = countSubarrays([1, 1, 1, 1], 1, 1);
console.log(res);
