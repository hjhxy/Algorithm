"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countSubarrays(nums, k) {
    var count = 0;
    var start = 0;
    var end = 0;
    var sum = 0;
    while (end < nums.length) {
        sum += nums[end];
        while (sum * (end - start + 1) >= k) {
            sum -= nums[start];
            start++;
        }
        count += end - start + 1;
        end++;
    }
    console.log(start, end, count);
    return count;
}
;
var res = countSubarrays([2, 1, 4, 3, 5], 10);
console.log(res);
