/* prim算法，通过并查集求*/
function countCompleteComponents(n, edges) {
    var _a;
    var arr = [];
    var edge = []; // 记录分量对应的边个数
    for (var i = 0; i < n; i++) {
        arr[i] = [i];
        edge[i] = 0;
    }
    for (var i = 0; i < edges.length; i++) {
        var res_1 = [-1, -1];
        for (var j = 0; j < arr.length; j++) {
            var i1 = arr[j].indexOf(edges[i][0]);
            var i2 = arr[j].indexOf(edges[i][1]);
            if (i1 != -1) {
                res_1[0] = j;
            }
            if (i2 != -1) {
                res_1[1] = j;
            }
        }
        if (res_1[0] != -1 && res_1[1] != -1 && res_1[0] != res_1[1]) {
            (_a = arr[res_1[0]]).push.apply(_a, arr[res_1[1]]);
            arr[res_1[1]] = [];
            if (edge[res_1[1]] == 0) {
                edge[res_1[0]] += 1;
            }
            else {
                edge[res_1[0]] += (1 + edge[res_1[1]]);
            }
        }
        if (res_1[0] != -1 && res_1[1] != -1 && res_1[0] == res_1[1]) {
            edge[res_1[0]]++;
        }
    }
    console.log(edge, arr);
    return arr.filter(function (el, i) { return (el.length && edge[i] >= el.length * (el.length - 1) / 2); }).length;
}
;
var res = countCompleteComponents(3, [[1, 0], [2, 0], [2, 1]]);
console.log(res);
/* 通过深度优先搜索*/ 
