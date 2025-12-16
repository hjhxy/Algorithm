"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function closestMeetingNode(edges, node1, node2) {
    var res1 = edges.map(function () { return -1; });
    var res2 = edges.map(function () { return -1; });
    traval(node1, edges, edges.map(function () { return 0; }), res1, 0);
    console.log(res1);
    traval(node2, edges, edges.map(function () { return 0; }), res2, 0);
    console.log(res2);
    var min = Infinity;
    var minIndex = -1;
    for (var i = res1.length - 1; i >= 0; i--) {
        if (res1[i] != -1 && res2[i] != -1 && Math.max(res1[i], res2[i]) <= min) {
            min = Math.max(res1[i], res2[i]);
            minIndex = i;
        }
    }
    return minIndex;
}
;
function traval(start, edges, visited, res, len) {
    console.log(start, edges[start], len);
    if (visited[start]) {
        return;
    }
    visited[start] = 1;
    res[start] = len;
    if (edges[start] == -1) {
        return;
    }
    traval(edges[start], edges, visited, res, len + 1);
}
var res = closestMeetingNode([4, 4, 8, -1, 9, 8, 4, 4, 1, 1], 5, 6);
console.log(res);
