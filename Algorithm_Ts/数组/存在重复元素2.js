"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function containsNearbyDuplicate(nums, k) {
    var hash = {};
    var front = 0;
    var back = 0;
    while (back < nums.length) {
        while (back - front <= k && back < nums.length) {
            console.log(front, back, hash, hash[nums[back]]);
            if (!hash[nums[back]]) {
                hash[nums[back]] = 1;
            }
            else {
                return true;
            }
            back++;
        }
        hash[nums[front]] -= 1;
        front++;
    }
    return false;
}
;
var res = containsNearbyDuplicate([1, 2, 3, 1], 3);
console.log(res);
