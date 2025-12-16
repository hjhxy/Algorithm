function countCompleteSubarrays(nums) {
    var set = new Set(nums);
    var num = set.size;
    var front = 0, back = front;
    var hash = {};
    var count = 0;
    var res = 0;
    while (front <= back) {
        while (count != num && back < nums.length) {
            if (!hash[nums[back]]) {
                count++;
                hash[nums[back]] = 1;
            }
            else {
                hash[nums[back]] += 1;
            }
            back++;
        }
        if (count == num) {
            res += nums.length - back + 1;
            console.log(count, num, front, back, nums.length - back + 1, nums.slice(front, back), hash);
        }
        if (hash[nums[front]] == 1) {
            count--;
        }
        hash[nums[front]] -= 1;
        front++;
    }
    return res;
}
;
var res = countCompleteSubarrays([459, 459, 962, 1579, 1435, 756, 1872, 1597]);
console.log(res);
