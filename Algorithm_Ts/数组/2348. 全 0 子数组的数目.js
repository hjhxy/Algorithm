"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function zeroFilledSubarray(nums) {
    var front = 0;
    var back = 0;
    var res = 0;
    while (front <= back && back < nums.length) {
        if (nums[back] == 0) {
            back++;
        }
        else {
            console.log(front, back, res, (back - front) * (back - front + 1) / 2);
            res += (back - front) * (back - front + 1) / 2;
            back++;
            front = back;
        }
    }
    return res;
}
;
var res = zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4]);
console.log(res);
