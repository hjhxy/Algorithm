use std::collections::HashMap;

impl Solution {
    pub fn find_final_value(nums: Vec<i32>, original: i32) -> i32 {
        let map = nums
            .iter()
            .map(|&el| (el, true))
            .collect::<HashMap<i32, bool>>();
        let mut res = original;
        while map.contains_key(&res) {
            res *= 2;
        }
        res
    }
}

fn main() {}
