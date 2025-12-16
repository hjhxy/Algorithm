function longestAlternatingSubarray(nums, threshold) {
    var res = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0 && nums[i] <= threshold) {
            var len = 1;
            var j = i;
            while (j++ < nums.length && nums[j] % 2 != nums[j - 1] % 2 && nums[j] <= threshold) {
                len++;
            }
            res = Math.max(len, res);
        }
    }
    return res;
}
;
var nums = [4, 10, 3];
var threshold = 10;
var res = longestAlternatingSubarray(nums, threshold);
console.log(res);
