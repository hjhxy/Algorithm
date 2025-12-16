function threeSum(nums = []) {
    let res = [];
    nums.sort((a, b) => (a - b));
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        let left = i + 1,
            right = nums.length - 1;
        let target = -nums[i];
        while (left < right) {
            if (nums[left] + nums[right] > target) {
                right--;
            } else if (nums[left] + nums[right] < target) {
                left++;
            } else {
                res.push([nums[i], nums[left], nums[right]]);
                break;
            }
        }
    }
    return res;
};


const res = threeSum([-1, 0, 1, 2, -1, -4]);

console.log('====================================');
console.log(res);
console.log('====================================');