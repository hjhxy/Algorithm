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
function smallestEquivalentString(s1, s2, baseStr) {
    var arr = [];
    for (var i = 0; i < s1.length; i++) {
        var flag = false;
        var set1 = -1;
        var set2 = -1;
        for (var j = 0; j < arr.length; j++) {
            if (arr[j].has(s1[i])) {
                set1 = j;
                arr[j].add(s1[i]);
                arr[j].add(s2[i]);
                flag = true;
            }
            if (arr[j].has(s2[i])) {
                set2 = j;
                arr[j].add(s1[i]);
                arr[j].add(s2[i]);
                flag = true;
            }
        }
        // 不在同一个集合需要合并
        if (set1 != set2 && set1 != -1 && set2 != -1) {
            for (var _i = 0, _a = arr[set2]; _i < _a.length; _i++) {
                var v = _a[_i];
                console.log(arr[set2], v);
                arr[set1].add(v);
            }
            arr.splice(set2, 1);
        }
        if (!flag) {
            arr.push(new Set([s1[i], s2[i]]));
        }
        console.log(set1, set2, s1[i], s2[i], arr);
    }
    var newres = [];
    for (var i = 0; i < arr.length; i++) {
        newres.push(__spreadArray([], arr[i], true));
    }
    for (var i = 0; i < baseStr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j].has(baseStr[i])) {
                break;
            }
        }
    }
    console.log(arr, newres);
    return '';
}
;
var res = smallestEquivalentString("cgokcgerolkgksgbhgmaaealacnsshofjinidiigbjerdnkolc", "rjjlkbmnprkslilqmbnlasardrossiogrcboomrbcmgmglsrsj", "bxbwjlbdazfejdsaacsjgrlxqhiddwaeguxhqoupicyzfeupcn");
console.log(res);
