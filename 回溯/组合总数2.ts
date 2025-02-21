function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a, b)=>(a-b));
    const res:number[][] = [];
    for(let i = 0; i < candidates.length; i++){
        if(candidates[i] == candidates[i-1]) continue;
        traval(candidates, i, candidates[i], [candidates[i]], target);
    }
    function traval(candidates:number[], start: number, sum: number, arr: number[], target: number): void {
        if(sum == target) {
            res.push(arr);
            return;
        } else if(sum>target){
            return;
        }
        for(let i = start+1; i < candidates.length; i++){
            if(i>start+1&&candidates[i] == candidates[i-1]) continue; // 保证同级比较的树不存在相同节点
            traval(candidates, i, sum+candidates[i], [...arr, candidates[i]], target);
        }
    }
    return res;
};



const res = combinationSum2([10,1,2,7,6,1,5], 8);
console.log(res);
