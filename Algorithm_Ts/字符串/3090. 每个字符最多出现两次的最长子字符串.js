"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maximumLengthSubstring(s) {
    var hash = {};
    var max = 0;
    var front = 0;
    var back = 0;
    while (front <= back && back < s.length) {
        hash[s[back]] = (hash[s[back]] || 0) + 1;
        console.log('=', front, back, hash[s[back]], s[back], hash);
        if (hash[s[back]] < 3) {
            back++;
        }
        else { // char=3
            max = Math.max(back - front, max);
            console.log('+', front, back, max);
            while (s[front] != s[back] && front <= back) {
                hash[s[front]] -= 1;
                front++;
            }
            hash[s[front]] -= 1;
            front += 1;
            back++;
            console.log('-', front, back, max, hash);
        }
    }
    return Math.max(back - front, max);
}
;
var res = maximumLengthSubstring("aaaa");
console.log(res);
