impl Solution {
    pub fn max_increasing_subarrays(nums: Vec<i32>) -> i32 {
        let mut count = 1;
        let mut pre_len: usize = 0;
        let mut res = 1;
        for i in 1..nums.len() {
            if nums[i] > nums[i - 1] {
                count += 1;
            } else {
                println!("{} {} {} {}", res, pre_len, count, nums[i]);
                res = res.max(pre_len.min(count).max(count / 2));
                pre_len = count;
                count = 1;
                println!("=={} {} {} {}", res, pre_len, count, nums[i]);
            }
        }

        res.max(pre_len.min(count).max(count / 2)) as i32
    }
}

fn main() {}
