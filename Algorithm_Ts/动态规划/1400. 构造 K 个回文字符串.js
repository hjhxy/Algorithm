"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function canConstruct(s, k) {
    // const dp:Array<Set<number>> = [new Set([1])];
    // for(let i=1;i<s.length;i++){
    //     dp[i] = new Set()
    //     if(isHuiwen(s, 0, i)){
    //         dp[i].add(1);
    //     }
    //     for(let j=0;j<i;j++){
    //         console.log(j, i, s.slice(0, j+1), s.slice(j+1, i+1), dp[j], isHuiwen(s, j+1, i));
    //         if(dp[j].size!=0 && isHuiwen(s, j+1, i)){
    //             for(const key in dp[j]){
    //                 console.log('----', key)
    //                 // dp[i].add(v + 1);
    //             }
    //             console.log('===', dp[j]);
    //         }
    //     }
    // }
    // console.log(dp[0]);
    // for(const key of dp[0]){
    //     console.log('----', key)
    //     // dp[i].add(v + 1);
    // }
    // console.log(dp);
    var set = new Set([1, 2, 3]);
    for (var _i = 0, set_1 = set; _i < set_1.length; _i++) {
        var key = set_1[_i];
        console.log(key);
    }
    console.log(set);
    return false;
}
;
function isHuiwen(str, start, end) {
    while (start < end) {
        if (str[start++] != str[end++]) {
            return false;
        }
    }
    return true;
}
var res = canConstruct("annabelle", 2);
console.log(res);
