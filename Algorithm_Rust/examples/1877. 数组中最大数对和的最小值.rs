impl Solution {
    pub fn min_pair_sum(nums: Vec<i32>) -> i32 {
        let mut nums = nums;
        nums.sort();
        let mut front = 0;
        let mut back = nums.len() - 1;
        let mut max = 0;
        while front < back {
            max = max.max(nums[front] + nums[back]);
            front += 1;
            back = 1;
        }
        if front == back {
            max = max.max(nums[front]);
        }

        max
    }
}

fn main() {}
