"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 题目的意思已经非常明确了，每次操作可能会造成数组大小改变，但是总是希望找到最小值, 可以实现 k*logn。
// 通过堆实现优先队列，每次调整的时间复杂度是logn，但是不通过优先队列就需要每次找最小值n, 最终为 k*n
function getFinalState(nums, k, multiplier) {
    var count = 0;
    var MOD = Math.pow(10, 9) + 7;
    var stack = new MiniStack();
    for (var i = 0; i < nums.length; i++) {
        stack.push({
            value: nums[i],
            index: i,
        });
    }
    var newarr = stack.getValue();
    while (count < k) {
        newarr[0].value = (newarr[0].value * multiplier) % MOD;
        nums[newarr[0].index] = newarr[0].value;
        stack.heapifyUp(); // 调整
        count++;
    }
    console.log(stack.getValue());
    return nums;
}
;
var MiniStack = /** @class */ (function () {
    function MiniStack() {
        this.stack = [];
    }
    MiniStack.prototype.push = function (data) {
        this.stack.push(data);
        this.heapifyUp();
    };
    MiniStack.prototype.heapifyUp = function () {
        var index = this.stack.length - 1;
        while (index > 0 && this.stack[Math.floor((index - 1) / 2)].value > this.stack[index].value) {
            var parentIndex = Math.floor((index - 1) / 2);
            var mid = this.stack[parentIndex];
            this.stack[parentIndex] = this.stack[index];
            this.stack[index] = mid;
            index = parentIndex;
        }
    };
    MiniStack.prototype.getValue = function () {
        return this.stack;
    };
    return MiniStack;
}());
function getFinalState2(nums, k, multiplier) {
    var count = 0;
    var MOD = Math.pow(10, 9) + 7;
    while (count < k) {
        var minIndex = 0;
        for (var i = 1; i < nums.length; i++) {
            if (nums[i] < nums[minIndex]) {
                minIndex = i;
            }
        }
        nums[minIndex] = (nums[minIndex] * multiplier) % MOD;
        count++;
    }
    return nums;
}
;
var res = getFinalState2([66307295, 441787703, 589039035, 322281864], 900900704, 641725);
console.log(res);
