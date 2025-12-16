"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function buildArray(nums) {
    var res = [];
    for (var i = 0; i < nums.length; i++) {
        res[i] = nums[nums[i]];
    }
    return res;
}
;
var res = buildArray([5, 0, 1, 2, 3, 4]);
console.log(res);
