impl Solution {
    pub fn max_operations(nums: Vec<i32>, k: i32) -> i32 {
        let mut nums = nums;
        let mut count = 0;
        nums.sort();
        let mut start = 0;
        let mut end = nums.len() - 1;
        while start < end {
            if nums[start] + nums[end] < k {
                start += 1;
            } else if nums[start] + nums[end] > k {
                end -= 1;
            } else {
                count += 1;
                start += 1;
                end -= 1;
            }
        }
        count
    }
}

fn main() {}
