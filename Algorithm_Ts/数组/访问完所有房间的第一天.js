"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function firstDayBeenInAllRooms(nextVisit) {
    var count = 0;
    var hashTable = {};
    var res = 0;
    var nextroom = 0;
    while (count !== nextVisit.length) {
        var room = nextroom;
        if (hashTable[room] == undefined) {
            hashTable[room] = 1;
            count++; // 第一次访问
        }
        else {
            hashTable[room]++;
        }
        if (hashTable[room] % 2 == 0) {
            nextroom = (nextroom + 1) % nextVisit.length;
        }
        else {
            nextroom = nextVisit[nextroom];
        }
        res++;
    }
    return (res - 1) % (Math.pow(10, 9) + 7);
}
;
var res = firstDayBeenInAllRooms([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
console.log(res);
