function combinationSum2(candidates, target) {
    candidates = candidates.sort(function (a, b) { return (a - b); });
    var res = [];
    for (var i = 0; i < candidates.length; i++) {
        if (candidates[i] > target)
            continue;
        else if (candidates[i] == target) {
            res.push([candidates[i]]);
        }
        else {
            var newtarget = target - candidates[i];
            var left = i + 1;
            var right = candidates.length - 1;
            while (left < right) {
                if (candidates[left] + candidates[right] > newtarget) {
                    right--;
                }
                else if (candidates[left] + candidates[right] < newtarget) {
                    left++;
                }
                else {
                    res.push([candidates[i], candidates[left], candidates[right]]);
                    left++;
                    right--;
                }
            }
        }
    }
    return res;
}
;
var res = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
console.log(res);
