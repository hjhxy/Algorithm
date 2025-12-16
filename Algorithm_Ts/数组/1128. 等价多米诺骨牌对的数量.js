"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function numEquivDominoPairs(dominoes) {
    dominoes.sort(function (a, b) {
        var min1 = Math.min.apply(Math, a);
        var min2 = Math.min.apply(Math, b);
        var max1 = Math.max.apply(Math, a);
        var max2 = Math.max.apply(Math, b);
        if (min1 < min2) {
            return -1;
        }
        else if (min1 == min2) {
            return max1 - max2;
        }
        else {
            return 1;
        }
    });
    var res = 0;
    var count = 1;
    for (var i = 1; i < dominoes.length; i++) {
        if ((dominoes[i][0] == dominoes[i - 1][0] && dominoes[i][1] == dominoes[i - 1][1]) || (dominoes[i][0] == dominoes[i - 1][1] && dominoes[i][1] == dominoes[i - 1][0])) {
            count++;
        }
        else {
            res += (count * (count - 1)) / 2;
            count = 1;
        }
    }
    if (count != 1) {
        res += (count * (count - 1)) / 2;
    }
    console.log(dominoes);
    return res;
}
;
var res = numEquivDominoPairs([[2, 2], [1, 2], [1, 2], [1, 1], [1, 2], [1, 1], [2, 2]]);
console.log(res);
