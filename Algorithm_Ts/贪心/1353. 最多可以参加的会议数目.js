"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maxEvents(events) {
    // 按开始时间排序
    events.sort(function (a, b) { return a[0] - b[0]; });
    var heap = new MinHeap();
    var day = 1;
    var res = 0;
    var i = 0;
    var n = events.length;
    var maxDay = Math.max.apply(Math, events.map(function (e) { return e[1]; }));
    while (day <= maxDay) {
        // 将所有今天开始的活动加入堆中（堆存结束时间）
        while (i < n && events[i][0] === day) {
            heap.insert(events[i][1]);
            i++;
        }
        // 移除已经过期的活动（结束时间小于当前天）
        while (heap.peek() !== undefined && heap.peek() < day) {
            heap.pop();
        }
        // 贪心选择最早结束的活动
        if (heap.peek() !== undefined) {
            heap.pop();
            res++;
        }
        day++;
    }
    return res;
}
var MinHeap = /** @class */ (function () {
    function MinHeap() {
        this.data = [];
    }
    // 获取堆顶元素
    MinHeap.prototype.peek = function () {
        return this.data[0];
    };
    // 插入元素
    MinHeap.prototype.insert = function (val) {
        this.data.push(val);
        this.bubbleUp(this.data.length - 1);
    };
    // 删除并返回堆顶元素
    MinHeap.prototype.pop = function () {
        if (this.data.length === 0)
            return undefined;
        var min = this.data[0];
        var last = this.data.pop();
        if (this.data.length > 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return min;
    };
    // 上浮操作（插入后）
    MinHeap.prototype.bubbleUp = function (index) {
        var _a;
        while (index > 0) {
            var parentIdx = Math.floor((index - 1) / 2);
            if (this.data[parentIdx] <= this.data[index])
                break;
            _a = [this.data[index], this.data[parentIdx]], this.data[parentIdx] = _a[0], this.data[index] = _a[1];
            index = parentIdx;
        }
    };
    // 下沉操作（删除堆顶后）
    MinHeap.prototype.bubbleDown = function (index) {
        var _a;
        var n = this.data.length;
        while (true) {
            var smallest = index;
            var left = 2 * index + 1;
            var right = 2 * index + 2;
            if (left < n && this.data[left] < this.data[smallest]) {
                smallest = left;
            }
            if (right < n && this.data[right] < this.data[smallest]) {
                smallest = right;
            }
            if (smallest === index)
                break;
            _a = [this.data[smallest], this.data[index]], this.data[index] = _a[0], this.data[smallest] = _a[1];
            index = smallest;
        }
    };
    // 工具方法：打印当前堆
    MinHeap.prototype.print = function () {
        console.log(this.data);
    };
    return MinHeap;
}());
var res = maxEvents([[1, 2], [1, 2], [3, 3], [1, 5], [1, 5]]);
console.log(res);
