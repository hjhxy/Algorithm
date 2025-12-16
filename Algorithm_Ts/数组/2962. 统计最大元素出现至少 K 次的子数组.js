"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countSubarrays(nums, k) {
    var start = 0;
    var end = 0;
    var count = 0;
    var max = Math.max.apply(Math, nums);
    var res = 0;
    // let arr: number[][] = [];
    while (start <= end && start < nums.length - k) {
        while (count < k && end < nums.length) {
            if (nums[end] == max) {
                count++;
            }
            end++;
        }
        if (count < k)
            break;
        while (count >= k && start <= end) {
            res += (nums.length - end + 1);
            // arr.push(nums.slice(start, end))
            if (nums[start] == max) {
                count--;
            }
            start++;
        }
        // console.log(start, end, count, res, max, arr)
    }
    return res;
}
;
var res = countSubarrays([1, 4, 2, 1], 3);
console.log(res);
