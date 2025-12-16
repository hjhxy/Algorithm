"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function beautifulSubarrays(nums) {
    var hash = {};
    var sum = 0;
    var res = 0;
    hash[0] = 1;
    for (var i = 0; i < nums.length; i++) {
        sum = sum ^ nums[i];
        hash[sum] = hash[sum] ? (hash[sum] + 1) : 1;
    }
    console.log(hash);
    for (var key in hash) {
        res += Math.floor(hash[key] * (hash[key] - 1) / 2);
    }
    return res;
}
;
var res = beautifulSubarrays([4, 3, 1, 2, 4]);
console.log(res);
