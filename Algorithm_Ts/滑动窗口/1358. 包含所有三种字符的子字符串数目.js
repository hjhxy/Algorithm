"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function numberOfSubstrings(s) {
    var res = 0;
    var hash = {};
    var start = 0;
    var end = 0;
    while (start <= end) {
        while (!isSatisfied(hash) && end < s.length) {
            hash[s[end]] = (hash[s[end]] || 0) + 1;
            end++;
        }
        if (end >= s.length && !isSatisfied(hash)) {
            break;
        }
        while (isSatisfied(hash) && start < end) {
            console.log(start, end, s.slice(start, end), s.length - end, res);
            res += s.length - end + 1;
            hash[s[start]] -= 1;
            start++;
        }
        console.log(start, end, s.length - 2, isSatisfied(hash));
    }
    return res;
}
;
function isSatisfied(hash) {
    return hash['a'] > 0 && hash['b'] > 0 && hash['c'] > 0;
}
var res = numberOfSubstrings("ababbbc");
console.log(res);
