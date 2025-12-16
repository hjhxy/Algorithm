"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function largestSumAfterKNegations(nums, k) {
    nums.sort(function (a, b) { return (a - b); });
    var res = 0;
    var x = 0;
    while (k > 0 && x < nums.length) {
        if (nums[x] < 0) {
            res += Math.abs(nums[x]);
            x += 1;
            k -= 1;
        }
        else if (nums[x] == 0) {
            x += 1;
            k = 0;
            break;
        }
        else {
            if (k % 2 == 0) {
                k = 0;
                break;
            }
            else {
                if (x >= 1) {
                    console.log(res, Math.abs(nums[x - 1]) < nums[x], 2 * nums[x - 1], -nums[x], k, res);
                    if (Math.abs(nums[x - 1]) < nums[x]) {
                        res += 2 * nums[x - 1];
                    }
                    else {
                        res -= nums[x];
                        x += 1;
                    }
                    console.log(res, nums[x - 1], nums[x]);
                }
                else {
                    res += (-nums[x]);
                    x += 1;
                }
                k = 0;
                break;
            }
        }
    }
    while (x < nums.length) {
        res += nums[x];
        x += 1;
    }
    if (x >= nums.length && k > 0) {
        res += k % 2 == 0 ? 0 : (2 * nums[nums.length - 1]);
    }
    return res;
}
;
var res = largestSumAfterKNegations([-4, -2, -3], 4);
console.log(res);
