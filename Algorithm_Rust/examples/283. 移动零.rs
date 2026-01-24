impl Solution {
    pub fn move_zeroes(nums: &mut Vec<i32>) {
        let mut count = 0;
        for i in 0..nums.len() {
            if nums[i] == 0 {
                count += 1;
            } else {
                nums[i - count] = nums[i];
            }
        }
        let mut start = nums.len() - count;
        for i in start..nums.len() {
            nums[i] = 0;
        }
    }
}

fn main() {}
