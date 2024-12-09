/* prim算法，通过并查集求*/
function countCompleteComponents(n: number, edges: number[][]): number {
    let arr:number[][] = [];
    let edge: number[] = []; // 记录分量对应的边个数
    for (let i = 0; i < n; i++) {
        arr[i] = [i];
        edge[i] = 0;
    }
    for(let i = 0; i < edges.length; i++) {
        let res = [-1, -1];
        for(let j=0; j < arr.length; j++) {
            const i1 = arr[j].indexOf(edges[i][0]);
            const i2 = arr[j].indexOf(edges[i][1]);
            if(i1 != -1){
                res[0] = j;
            }
            if(i2 != -1){
                res[1] = j;
            }
        }
        if(res[0]!=-1&&res[1]!=-1&&res[0]!=res[1]){
            arr[res[0]].push(...arr[res[1]]);
            arr[res[1]] = [];
            if(edge[res[1]] == 0){
                edge[res[0]]+=1;
            } else {
                edge[res[0]]+=(1+edge[res[1]]);
            }
        }
        if(res[0]!=-1&&res[1]!=-1&&res[0]==res[1]){
            edge[res[0]]++;
        }
    }
    // console.log(edge, arr);
    return arr.filter((el,i)=>(el.length&&edge[i]>=el.length*(el.length-1)/2)).length;
};

let res = countCompleteComponents(3, [[1,0],[2,0],[2,1]]);
console.log(res);


/* 通过深度优先搜索*/