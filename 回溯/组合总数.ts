function combinationSum2(candidates: number[], target: number): number[][] {
    candidates = candidates.sort((a, b) => (a - b));
    let res: number[][] = [];
    for (let i = 0; i < candidates.length; i++) {
        traval(candidates, i, candidates[i], target, res);
    }
    return res;
};

function traval(candidates: number[], i: number, num: number, target: number, res: number[][]): any {
    // for (let i = 0; i < candidates.length; i++) {
    if (candidates[i] > target) return;
    else if (candidates[i] == target) {
        return res.push([candidates[i]]);
    } else {
        let newtarget = target - candidates[i];
        let left = i + 1;
        let right = candidates.length - 1;
        while (left < right) {
            if (candidates[left] + candidates[right] > newtarget) {
                right--;
            } else if (candidates[left] + candidates[right] < newtarget) {
                left++;
            } else {
                res.push([candidates[i], candidates[left], candidates[right]]);
                left++;
                right--;
            }
        }
    }
    // }
    return [[]];
}



let res = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
console.log(res);