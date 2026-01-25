use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut map = HashMap::new();
        for i in 0..nums.len() {
            let key = target - nums[i];
            if let Some(v) = map.get(&key) {
                return vec![*v, i].iter().map(|&el| el as i32).collect();
            }
            map.insert(nums[i], i);
        }
        vec![]
    }
}

fn main() {}
