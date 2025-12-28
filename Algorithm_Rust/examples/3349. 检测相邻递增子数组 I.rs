use std::collections::HashMap;

impl Solution {
    pub fn has_increasing_subarrays(nums: Vec<i32>, k: i32) -> bool {
        let k = k as usize;
        if k <= 1 {
            return true;
        }
        let mut map = HashMap::new();
        let mut count = 1;
        for i in 0..nums.len() {
            if i == 0 {
                continue;
            }
            if nums[i] > nums[i - 1] {
                count += 1;
                if count >= k {
                    println!("{} {}", i, k);
                    if map.contains_key(&(i - k + 1 - k)) {
                        return true;
                    } else {
                        map.insert(i - k + 1, true);
                    }
                }
            } else {
                count = 1;
            }
        }
        println!("{:?}", map);
        false
    }
}

fn main() {}
