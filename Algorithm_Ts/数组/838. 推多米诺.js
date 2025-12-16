"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pushDominoes(dominoes) {
    var prev = {
        index: -1,
        char: '.',
    };
    var res = dominoes.split('');
    for (var i = 0; i < dominoes.length; i++) {
        if (dominoes[i] != '.') {
            if (prev.char == 'R' && dominoes[i] == 'L') {
                var start = prev.index;
                var end = i;
                while (start < end) {
                    res[start++] = 'R';
                    res[end--] = 'L';
                }
            }
            else if (dominoes[i] == 'L' && dominoes[i] != 'R') {
                var end = i;
                while (end >= Math.max(prev.index, 0)) {
                    res[end--] = 'L';
                }
            }
            else if (dominoes[i] == 'R' && prev.char == 'R') {
                var end = i;
                while (end >= Math.max(prev.index, 0)) {
                    res[end--] = 'R';
                }
            }
            prev.char = dominoes[i];
            prev.index = i;
        }
    }
    console.log(res.join(''));
    if (prev.char == 'R') {
        var start = prev.index;
        while (start < dominoes.length) {
            res[start++] = 'R';
        }
    }
    return res.join('');
}
;
var res = pushDominoes(".RR..");
console.log(res);
