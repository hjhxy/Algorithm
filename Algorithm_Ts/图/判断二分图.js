// 并查集
function isBipartite(graph) {
    let set1 = new Set([0]);
    let set2 = new Set([...graph[0]]);
    for (let i = 1; i < graph.length; i++) {
        if (!set1.has(i) && !set2.has(i)) { // 都不存在
            let flag = true;
            let sets = [set1, set2];
            for (let j = 0; j < graph[i].length; j++) { // 检查其邻接节点是否已存在
                if (set2.has(graph[i][j])) { // 正序
                    flag = false;
                    break;
                }
                else if (set1.has(graph[i][j])) { // 反序
                    flag = false;
                    sets[0] = set2;
                    sets[1] = set1;
                    console.log('=1', set1, set2, graph[i], graph[i][j]);
                    break;
                }
            }
            if (flag) { // 都不存在，延迟加入
                graph.push([...graph[i]]);
                continue;
            }
            sets[0].add(i);
            for (let j = 0; j < graph[i].length; j++) {
                sets[1].add(graph[i][j]);
            }
        }
        else if (set1.has(i)) { // 存在set1
            for (let j = 0; j < graph[i].length; j++) {
                if (!set1.has(graph[i][j])) {
                    set2.add(graph[i][j]);
                }
                else {
                    console.log('=2', set1, set2, graph[i], graph[i][j]);
                    return false;
                }
            }
        }
        else { // 存在于set2
            for (let j = 0; j < graph[i].length; j++) {
                if (!set2.has(graph[i][j])) {
                    set1.add(graph[i][j]);
                }
                else {
                    console.log('=3', set1, set2, graph[i], graph[i][j]);
                    return false;
                }
            }
        }
    }
    console.log(set1, set2);
    return true;
}
;
const res = isBipartite([[3], [2, 4], [1], [0, 4], [1, 3]]);
console.log(res);
