impl Solution {
    pub fn max_frequency(nums: Vec<i32>, k: i32, num_operations: i32) -> i32 {
        let num_operations = num_operations as usize;
        let mut nums = nums;
        nums.sort();
        let mut start = 0;
        let mut end = 0;
        let mut res = 0;
        while end < nums.len() {
            if nums[end] - nums[start] <= 2 * k {
                end += 1;
            } else {
                res = res.max((end - start).min(num_operations + 1));
                println!("{} {} {} {}", res, start, end, end - start);
                start += 1;
            }
        }
        println!("{} {} {} {}", res, start, end, end - start);
        res.max((end - start).min(num_operations + 1)) as i32
    }
}

fn main() {}
