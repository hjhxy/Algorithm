var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function eatenApples(apples, days) {
    var heap = new MiniHeap(apples);
    console.log(heap.getValue());
    return 1;
}
;
var MiniHeap = /** @class */ (function () {
    function MiniHeap(arr) {
        this.heap = [];
        for (var i = 0; i < arr.length; i++) {
            this.push(arr[i]);
        }
    }
    MiniHeap.prototype.push = function (value) {
        this.heap.push(value);
        this.heapify();
    };
    MiniHeap.prototype.heapify = function () {
        var endi = this.heap.length - 1;
        var parenti = Math.floor((endi - 1) / 2);
        // console.log(endi, parenti, this.heap[endi], this.heap[parenti]);
        while (parenti > 0 && this.heap[endi] < this.heap[parenti]) {
            var mid = this.heap[endi];
            this.heap[endi] = this.heap[parenti];
            this.heap[parenti] = mid;
            endi = parenti;
            parenti = Math.floor((endi - 1) / 2);
        }
    };
    MiniHeap.prototype.getValue = function () {
        return __spreadArray([], this.heap, true);
    };
    return MiniHeap;
}());
var res = eatenApples([1, 4, 6, 5, 2, 2], [3, 2, 1, 4, 2]);
console.log(res);
