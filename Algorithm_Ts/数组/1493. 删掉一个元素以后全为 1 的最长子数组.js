"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function longestSubarray(nums) {
    var one = 0;
    var zero = 0;
    var preone = 0;
    var res = 0;
    var flag = false;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            flag = true;
        }
        if (nums[i] == 1) {
            one += 1;
            res = Math.max(res, one + preone);
            zero = 0;
            console.log('--', preone, one, res);
        }
        else {
            zero += 1;
            if (zero == 1) {
                preone = one;
            }
            else {
                preone = 0;
            }
            one = 0;
        }
    }
    console.log(preone, one, res);
    return flag ? res : res - 1;
}
;
var res = longestSubarray([1, 1, 1]);
console.log(res);
