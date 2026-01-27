impl Solution {
    pub fn minimum_difference(nums: Vec<i32>, k: i32) -> i32 {
        let k = k as usize;
        let mut nums = nums;
        nums.sort();
        let mut start = k - 1;
        let mut res = i32::MAX;
        for i in start..nums.len() {
            res = res.min(nums[i] - nums[i - k - 1])
        }
        res
    }
}

fn main() {}
