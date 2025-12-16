"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maxSum(nums) {
    var arr = nums.filter(function (el) { return el > 0; });
    if (!arr.length)
        return Math.max.apply(Math, nums);
    var front = 0, back = 0;
    var res = 0, v = 0;
    var hash = {};
    console.log(arr);
    while (front <= back && back < arr.length) {
        if (!hash[arr[back]]) {
            v += arr[back];
            res = Math.max(v, res);
            console.log('back', back, arr[back], hash[back], res, v);
            hash[arr[back]] = 1;
            back++;
        }
        else {
            v -= arr[front];
            res = Math.max(v, res);
            console.log('front', front, res, v);
            hash[arr[front]] -= 1;
            front++;
        }
    }
    return res;
}
;
var res = maxSum([-6, 12, 20, 20, -14, 10, -12]); // [1,2,3,4,5] [1,1,0,1,1] [1,2,-1,-2,1,0,-1]
console.log(res);
