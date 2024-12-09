var twoSum = function (nums = [], target) {
    nums = nums.map((el, i) => ({
        i,
        el
    })).sort((a, b) => (a.el - b.el));
    console.log(nums);
    let left = 0,
        right = nums.length - 1;
    while (left < right) {
        if (nums[left].el + nums[right].el < target) {
            left++;
        } else if (nums[left].el + nums[right].el > target) {
            right--;
        } else {
            return [nums[left].i, nums[right].i];
        }
    }
    return [];
};


let res = twoSum([2, 7, 11, 15], 9);
console.log(res); // [2, 7]