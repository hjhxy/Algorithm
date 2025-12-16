// 数据的排列没有规律，没有技巧性，必须要计算所有的和关键是看怎么减少计算的次数
function maxSubArray(nums) {
    if (nums.length <= 1)
        return nums[0];
    var mid = Math.floor(nums.length / 2);
    // 两个子问题继续分解
    var leftMax = maxSubArray(nums.slice(0, mid));
    var rightMax = maxSubArray(nums.slice(mid));
    // 合并代价，如果最大值包含中间，那么必然过mid
    var l_midMax = 0;
    var l_sum = 0;
    for (var i = mid - 1; i >= 0; i--) {
        l_sum += nums[i];
        l_midMax = Math.max(l_midMax, l_sum);
    }
    l_midMax = Math.max(l_midMax, 0);
    var r_midMax = 0;
    var r_sum = 0;
    for (var i = mid + 1; i < nums.length; i++) {
        r_sum += nums[i];
        r_midMax = Math.max(r_midMax, r_sum);
    }
    r_midMax = Math.max(r_midMax, 0);
    // console.log('midMax', nums, mid, leftMax, rightMax, l_midMax + r_midMax + nums[mid]);
    return Math.max(leftMax, rightMax, l_midMax + r_midMax + nums[mid]);
}
;
var res = maxSubArray([1]);
console.log(res);
