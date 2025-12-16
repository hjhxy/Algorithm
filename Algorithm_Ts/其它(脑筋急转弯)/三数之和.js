"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function threeSum(nums) {
    var newarr = nums.map(function (el, index) {
        return {
            el: el,
            index: index
        };
    });
    newarr.sort(function (a, b) { return a.el - b.el; });
    var res = [];
    for (var i = 0; i < newarr.length; i++) {
        res.push.apply(res, doublePointer(i, newarr));
    }
    function doublePointer(index, arr) {
        var res = [];
        var start = index + 1; // 剪枝，减少重复计算。
        var end = arr.length - 1;
        var n1 = arr[index];
        while (start < end) {
            if (start == index) {
                start++;
                continue;
            }
            else if (end == index) {
                end--;
                continue;
            }
            if (arr[start].el + arr[end].el < -n1.el) {
                start++;
            }
            else if (arr[start].el + arr[end].el > -n1.el) {
                end--;
            }
            else {
                res.push([n1.el, arr[start].el, arr[end].el].sort());
                break;
            }
        }
        return res;
    }
    return res;
}
;
var nums = [0, 0, 0, 0, 0, 0];
var res = threeSum(nums);
console.log(res);
