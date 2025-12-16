"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function longestPalindrome(words) {
    var res = 0;
    var arr = [];
    var _a = [-1, -1], c1 = _a[0], c2 = _a[1];
    for (var i = 0; i < 26; i++) {
        arr[i] = [];
    }
    for (var i = 0; i < words.length; i++) {
        c1 = words[i].charCodeAt(0) - 97;
        c2 = words[i].charCodeAt(1) - 97;
        console.log(c1, c2, arr[c2][c1], arr[c1][c2]);
        if (arr[c2][c1]) {
            res += 4;
            arr[c2][c1] -= 1;
            continue;
        }
        arr[c1][c2] = (arr[c1][c2] || 0) + 1;
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][i] > 0) {
            res += 2;
            break;
        }
    }
    return res;
}
;
var res = longestPalindrome(["cc", "ll", "xx"]);
console.log(res);
