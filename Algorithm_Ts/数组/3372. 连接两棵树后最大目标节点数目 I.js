"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maxTargetNodes(edges1, edges2, k) {
    var map1 = [];
    var map2 = [];
    for (var i = 0; i < edges1.length; i++) {
        if (!map1[edges1[i][0]]) {
            map1[edges1[i][0]] = [];
        }
        if (!map1[edges1[i][1]]) {
            map1[edges1[i][1]] = [];
        }
        map1[edges1[i][0]][edges1[i][1]] = 1;
        map1[edges1[i][1]][edges1[i][0]] = 1;
    }
    for (var i = 0; i < edges2.length; i++) {
        if (!map2[edges2[i][0]]) {
            map2[edges2[i][0]] = [];
        }
        if (!map2[edges2[i][1]]) {
            map2[edges2[i][1]] = [];
        }
        map2[edges2[i][0]][edges2[i][1]] = 1;
        map2[edges2[i][1]][edges2[i][0]] = 1;
    }
    // console.table(map1);
    // console.table(map2);
    var max = 0;
    // for(let i=0;i<map2.length;i++){
    //     const res1 = traval(i, map2, map2.map((_,index)=>index==i?1:0), k-1);
    //     max = Math.max(max, res1);
    // }
    var res = [];
    var _loop_1 = function (i) {
        var res1 = traval(i, map1, map1.map(function (_, index) { return index == i ? 1 : 0; }), k);
        res[i] = res1 + max;
    };
    for (var i = 0; i < map1.length; i++) {
        _loop_1(i);
    }
    return res;
}
;
function traval(start, map, visited, k) {
    if (k <= 0)
        return k + 1;
    var res = 0;
    for (var i = 0; i < map[start].length; i++) {
        if (map[start][i] && !visited[i]) {
            console.log(start, i, k - 1);
            visited[i] = 1;
            res += traval(i, map, visited, k - 1);
        }
    }
    return res + 1;
}
var res = maxTargetNodes([[2, 1], [7, 3], [0, 4], [7, 5], [2, 6], [0, 2], [0, 7]], [[3, 0], [1, 2], [5, 1], [6, 3], [9, 4], [5, 6], [7, 5], [9, 7], [8, 9]], 7);
console.log('res', res);
