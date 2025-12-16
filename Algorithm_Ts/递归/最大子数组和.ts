// 数据的排列没有规律，没有技巧性，必须要计算所有的和关键是看怎么减少计算的次数
function maxSubArray(nums: number[]): number {
    if (nums.length <= 1) return nums[0];
    let mid = Math.floor(nums.length / 2);
    // 两个子问题继续分解
    const leftMax = maxSubArray(nums.slice(0, mid));
    const rightMax = maxSubArray(nums.slice(mid));
    // 合并代价，如果最大值包含中间，那么必然过mid
    let l_midMax = 0;
    let l_sum = 0;
    for (let i = mid - 1; i >= 0; i--) {
        l_sum += nums[i];
        l_midMax = Math.max(l_midMax, l_sum)
    }
    l_midMax = Math.max(l_midMax, 0);
    let r_midMax = 0;
    let r_sum = 0;
    for (let i = mid + 1; i < nums.length; i++) {
        r_sum += nums[i];
        r_midMax = Math.max(r_midMax, r_sum)
    }
    r_midMax = Math.max(r_midMax, 0);
    // console.log('midMax', nums, mid, leftMax, rightMax, l_midMax + r_midMax + nums[mid]);
    return Math.max(leftMax, rightMax, l_midMax + r_midMax + nums[mid]);
};

const res = maxSubArray([1]);
console.log(res);

export { }