use std::collections::HashMap;

impl Solution {
    pub fn find_pairs(nums: Vec<i32>, k: i32) -> i32 {
        if k < 0 {
            return 0;
        }

        let mut map = HashMap::new();
        for &n in &nums {
            *map.entry(n).or_insert(0) += 1;
        }

        let mut count = 0;
        for (&n, &freq) in &map {
            if k == 0 {
                if freq >= 2 {
                    count += 1;
                }
            } else if map.contains_key(&(n + k)) {
                count += 1;
            }
        }

        count
    }
}

fn main() {}
