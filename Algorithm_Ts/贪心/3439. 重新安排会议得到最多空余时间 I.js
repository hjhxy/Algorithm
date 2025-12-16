"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maxFreeTime(eventTime, k, startTime, endTime) {
    var res = 0;
    var front = 0;
    var back = 0;
    var sum = startTime[0];
    while (front <= back && back < startTime.length) {
        while (back - front < k && back + 1 < startTime.length) {
            sum += startTime[back + 1] - endTime[back];
            back++;
        }
        console.log('-', sum, back, front, back - front);
        if (back - front == k) {
            res = Math.max(res, sum);
        }
        else if (back - front == k - 1 && back + 1 == startTime.length) {
            sum += eventTime - endTime[back];
            res = Math.max(res, sum);
        }
        console.log('=', sum, back, front, back - front);
        sum -= startTime[front] - ((endTime === null || endTime === void 0 ? void 0 : endTime[front - 1]) || 0);
        front++;
    }
    return res;
}
;
var res = maxFreeTime(99, 1, [7, 21, 25], [13, 25, 78]);
console.log(res);
