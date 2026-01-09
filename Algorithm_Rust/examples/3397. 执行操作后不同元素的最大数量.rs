impl Solution {
    pub fn max_distinct_elements(nums: Vec<i32>, k: i32) -> i32 {
        let mut v = i32::MIN;
        let mut count = 0;
        let mut nums = nums;
        nums.sort();
        for &el in nums.iter() {
            let m = ((el - k).max(v + 1)).min(el + k);
            if m > v {
                count += 1;
                v = m;
            }
        }
        count
    }
}

fn main() {}
