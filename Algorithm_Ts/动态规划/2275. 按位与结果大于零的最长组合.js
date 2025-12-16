"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function largestCombination(candidates) {
    var hash = {};
    for (var i = 0; i < candidates.length; i++) {
        radix2(candidates[i], hash);
    }
    console.log(hash);
    var res = Object.keys(hash).map(function (k) { return hash[k]; });
    return Math.max.apply(Math, res);
}
;
function radix2(number, hash) {
    var i = 0;
    var yu = 0;
    while (number != 0) {
        yu = number % 2;
        number = (number - yu) / 2;
        hash[i] = (hash[i] || 0) + yu;
        i++;
    }
}
var res = largestCombination([16, 17, 71, 62, 12, 24, 14]);
console.log(res);
