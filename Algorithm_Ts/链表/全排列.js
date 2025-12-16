"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
function foo(str) {
    var res = [];
    for (var i = 0; i < str.length; i++) {
        traval(str[i], res, str, [i]);
    }
    return res;
}
function traval(s, res, str, hasArr) {
    if (hasArr.length >= str.length) {
        res.push(s);
    }
    ;
    for (var i = 0; i < str.length; i++) {
        if (hasArr.indexOf(i) == -1) {
            traval(s + str[i], res, str, __spreadArray(__spreadArray([], hasArr, true), [i], false));
        }
    }
}
var res = foo("abc");
console.log(res);
