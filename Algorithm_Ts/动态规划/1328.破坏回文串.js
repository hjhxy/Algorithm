"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function breakPalindrome(palindrome) {
    if (palindrome.length <= 1)
        return "";
    for (var i = 0; i < Math.floor(palindrome.length / 2); i++) {
        var char = 'a'.charCodeAt(0);
        if (palindrome[i] === 'a') {
            continue;
        }
        // console.log(i, char, palindrome.charCodeAt(i), palindrome[i]);
        if (char != palindrome.charCodeAt(i)) {
            return palindrome.slice(0, i) + String.fromCharCode(char) + palindrome.slice(i + 1);
        }
    }
    return palindrome.slice(0, -1) + 'b';
}
;
var res = breakPalindrome("aba");
console.log(res);
exports.default = {};
