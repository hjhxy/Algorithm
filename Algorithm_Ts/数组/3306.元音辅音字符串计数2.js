"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countOfSubstrings(word, k) {
    var back = 0;
    var front = 0;
    var hash = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
        other: 0,
    };
    var res = 0;
    var map = ['a', 'e', 'i', 'o', 'u'];
    while (front < word.length && back <= front) {
        while (front < word.length && hash['other'] <= k) {
            var str_1 = "";
            if (map.includes(word[front])) {
                str_1 = word[front];
            }
            else {
                str_1 = "other";
            }
            hash[str_1]++;
            if (hash['other'] == k && check()) {
                console.log(back, front, word.slice(back, front + 1), hash);
                res++;
            }
            front++;
        }
        var str = "";
        if (map.includes(word[back])) {
            str = word[back];
        }
        else {
            str = "other";
        }
        console.log('=', front, str, hash[str]);
        hash[str]--;
        back++;
    }
    function check() {
        return map.every(function (el) {
            if (el == 'other') {
                return hash[el] == k;
            }
            else {
                return hash[el] >= 1;
            }
        });
    }
    return res;
}
;
var res = countOfSubstrings("ieaouqqieaouqq", 1); // 3
console.log(res);
