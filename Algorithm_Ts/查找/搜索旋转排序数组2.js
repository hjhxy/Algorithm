"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function search(nums, target) {
    return find(0, nums.length - 1);
    function find(start, end) {
        if (end < start)
            return false;
        if (start == end - 1 && (nums[start] == target || nums[end] == target))
            return true;
        var mid = Math.floor((start + end) / 2);
        var res = false;
        if (target === nums[mid])
            return true;
        if (nums[mid] <= nums[end]) {
            if (target > nums[mid] && target <= nums[end]) {
                res = find(mid + 1, end);
            }
            else {
                res = find(start, mid - 1);
            }
        }
        else {
            if (target > nums[mid]) {
                res = find(mid + 1, end);
            }
            else {
                res = find(start, mid - 1);
            }
        }
        return res;
    }
}
;
var res = search([1, 0], 0);
console.log(res);
